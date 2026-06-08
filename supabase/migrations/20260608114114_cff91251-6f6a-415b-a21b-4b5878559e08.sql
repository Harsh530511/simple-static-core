
-- ============ ROLES ============
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN LANGUAGE SQL STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Admins manage roles" ON public.user_roles FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- ============ PROFILES ============
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Profiles self read" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Profiles self update" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id);

-- ============ NEW USER TRIGGER (first user = admin) ============
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  user_count INT;
  assigned_role app_role;
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name'),
    NEW.raw_user_meta_data->>'avatar_url'
  );

  SELECT COUNT(*) INTO user_count FROM public.user_roles;
  IF user_count = 0 THEN
    assigned_role := 'admin';
  ELSE
    assigned_role := 'user';
  END IF;

  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, assigned_role);
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============ updated_at helper ============
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

-- ============ ARTICLES ============
CREATE TABLE public.articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL DEFAULT '',
  body TEXT[] NOT NULL DEFAULT '{}',
  date TEXT NOT NULL DEFAULT '',
  read_time TEXT NOT NULL DEFAULT '',
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.articles TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.articles TO authenticated;
GRANT ALL ON public.articles TO service_role;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Articles public read published" ON public.articles FOR SELECT USING (published = true OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Articles admin write" ON public.articles FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER articles_updated_at BEFORE UPDATE ON public.articles FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ============ EVENTS ============
CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  location TEXT NOT NULL DEFAULT '',
  event_date TEXT NOT NULL DEFAULT '',
  time_range TEXT NOT NULL DEFAULT '',
  theme TEXT NOT NULL DEFAULT '',
  excerpt TEXT NOT NULL DEFAULT '',
  body TEXT[] NOT NULL DEFAULT '{}',
  cover_image TEXT,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.events TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.events TO authenticated;
GRANT ALL ON public.events TO service_role;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Events public read published" ON public.events FOR SELECT USING (published = true OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Events admin write" ON public.events FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER events_updated_at BEFORE UPDATE ON public.events FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ============ QUOTES ============
CREATE TABLE public.quotes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  text TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Anonymous',
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.quotes TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.quotes TO authenticated;
GRANT ALL ON public.quotes TO service_role;
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Quotes public read published" ON public.quotes FOR SELECT USING (published = true OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Quotes admin write" ON public.quotes FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- ============ NEWS ============
CREATE TABLE public.news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT '',
  url TEXT,
  summary TEXT NOT NULL DEFAULT '',
  published_at TEXT NOT NULL DEFAULT '',
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.news TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.news TO authenticated;
GRANT ALL ON public.news TO service_role;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
CREATE POLICY "News public read published" ON public.news FOR SELECT USING (published = true OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "News admin write" ON public.news FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

-- ============ CONTACT MESSAGES ============
CREATE TABLE public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  handled BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_messages TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_messages TO authenticated;
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit" ON public.contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin read messages" ON public.contact_messages FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admin update messages" ON public.contact_messages FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admin delete messages" ON public.contact_messages FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));

-- ============ SEEDS ============
INSERT INTO public.articles (slug, title, excerpt, body, date, read_time) VALUES
('tareekh-pe-tareekh-indian-judiciary','Tareekh Pe Tareekh: The Judiciary''s Business Model','Five crore pending cases. One infinite adjournment. A field report from inside the world''s longest queue, and a plan to shorten it.',
 ARRAY['There is a phrase every Indian litigant learns before they learn the name of their own lawyer: tareekh pe tareekh. Another date. Another adjournment. Another quiet shuffle in the registry.',
'The official story is that the judiciary is overburdened. The honest story is that delay has become a feature, not a bug — a quiet rent collected on grief, property, and time.',
'TCJP''s position is that delay is a policy choice. End post-retirement reward seats. Publish judge-level disposal data. Cap adjournments. Treat the docket as a public ledger, not a private timetable.',
'We are not asking for revolution from the bench. We are asking for the clock back.'],
 '23 May 2026','6 min read'),
('the-quiet-rights-human-rights-india','The Quiet Rights: Dignity, Shelter, and the Right to Fail Without Shame','India has loud rights and quiet ones. The loud ones get recited in court. The quiet ones are the ones we are slowly losing.',
 ARRAY['Some rights are loud. They have logos, hashtags, and televised hearings. Others are quiet — dignity, identity, the ability to be visibly poor without being treated as a criminal.',
'This essay is about the quiet rights. The ones nobody clips for prime time. The ones that, when removed, do not produce a press release.',
'We argue that a working democracy is measured less by its loud freedoms and more by the boredom of its quiet ones. When you can fail, change jobs, change cities, change minds without being punished — that is the republic working as designed.'],
 '22 May 2026','5 min read'),
('reclaiming-the-cockroach-as-political-symbol','Reclaiming the Cockroach: Why the Insect Is the Insignia','Tories. Quakers. Suffragettes. Queer. Cockroach. A short history of movements that took the slur and printed it on the letterhead.',
 ARRAY['Every successful political movement has, at some point, eaten an insult and turned it into a flag. Tories were thieves. Quakers shook. Suffragettes were diminutives. Queer was an attack.',
'The slur lands hardest when it is most accurate, and the response that endures is rarely outrage — it is adoption. You take the word, you spell it correctly, you put it on the masthead.',
'We picked Cockroach because the people calling us cockroaches were not entirely wrong about the survival part. We have lived through worse. We will live through this.'],
 '20 May 2026','4 min read'),
('the-five-demands-explained','The Five Demands, Explained','A walkthrough of each demand on the manifesto — what it means, what it would change, and why it has to be exactly five.',
 ARRAY['A short manifesto is harder to write than a long one. Long manifestos are written by people who want credit. Short ones are written by people who want change.',
'Demand one is about post-retirement integrity. Two is about electoral integrity. Three is about who actually gets to govern. Four is about who controls the megaphone. Five is about loyalty as a political product.',
'Five demands. No edits. We will explain each at length here, but the headline version is enough to start arguments — which is exactly what a manifesto is for.'],
 '18 May 2026','8 min read'),
('the-great-emi-republic','The Great EMI Republic','How a generation learned to swipe right on debt while being told it was financial discipline.',
 ARRAY['Somewhere in the last decade, a country with one of the highest savings rates in the world was sold the idea that paying in instalments was the same as owning.',
'It is not. It is a polite, app-shaped form of indenture. The phone is yours after twenty-four months — unless the job goes first, in which case the phone is the bank''s and the credit score is a souvenir.',
'TCJP''s position is small: financial products marketed to young people must say the quiet part loud. Interest in bold. Default consequences in bold. Total cost in bold. The romance can stay in the brochure.'],
 '12 May 2026','4 min read');

INSERT INTO public.events (slug, title, location, event_date, time_range, theme, excerpt, body) VALUES
('6-june-delhi-cockroach-march','6 June · Delhi · The Cockroach March','Jantar Mantar, New Delhi','6 June 2026','10:00 AM – 5:00 PM','Political dissent · Youth mobilisation against NEET/CBSE exam irregularities',
 'A historic Gen-Z on-ground mobilisation led by founder Abhijeet Dipke demanding accountability and the resignation of the Union Education Minister.',
 ARRAY['On 6 June 2026, the Cockroach Janta Party held its first on-ground mobilisation at Jantar Mantar, New Delhi. From 10:00 AM to 5:00 PM, peaceful demonstrators — many of them wearing cockroach-themed attire — gathered to demand a clean, independent inquiry into the NEET and CBSE exam irregularities that have hollowed out an entire cohort of Indian students.',
'The protest was led by party founder Abhijeet Dipke. His central demand was simple and unambiguous: the resignation of the Union Education Minister, and a binding public commitment to publish examination integrity audits within a fixed timeline.',
'The march was deliberately satirical in form and deadly serious in substance. The cockroach costumes were a refusal — a way to say: you have called us pests, parasites, the dregs of a generation. Fine. We will wear it. We will not stop showing up.',
'Speakers included aspirants who lost a year of their lives to leaked papers, parents who had spent their savings on coaching, and lawyers offering pro-bono representation. There were no celebrities. There were no party flags other than ours. There was no money on stage.',
'TCJP''s position remains: examinations are the one rung of the Indian ladder where merit is supposed to matter. Break that rung and you break the only contract this republic still pretends to honour with its young.',
'We will return. Bigger. Quieter. Harder to ignore.']);

INSERT INTO public.quotes (text, author) VALUES
('You cannot squash a movement that has already learned to live in the cracks.','— TCJP Manifesto, 2026'),
('Every empire eventually meets its insect.','— Cockroach Field Notes');

INSERT INTO public.news (title, source, summary, published_at) VALUES
('CJP rally swells past Sansad Bhavan','The Daily Crawl','Tens of thousands joined the inaugural Cockroach Janta Party rally near Sansad Bhavan, marking the largest youth-led political demonstration of the year.','24 May 2026'),
('Exit polls show Burnt-Out Youth bloc up 14 points','Antenna Wire','A surprise surge among first-time voters has pushed the satirical CJP-aligned bloc to a 14-point gain in latest exit polls.','21 May 2026');
