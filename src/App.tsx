import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/cjp/SiteHeader";
import SiteFooter from "./components/cjp/SiteFooter";
import LiveMemberTicker from "./components/cjp/LiveMemberTicker";
import Home from "./pages/Home";
import Manifesto from "./pages/Manifesto";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import VisionPage from "./pages/VisionPage";
import Gallery from "./pages/Gallery";
import Members from "./pages/Members";
import Voice from "./pages/Voice";
import RaiseIssue from "./pages/RaiseIssue";
import Tracker from "./pages/Tracker";
import Quotes from "./pages/Quotes";
import Memes from "./pages/Memes";
import News from "./pages/News";
import Press from "./pages/Press";
import CardPage from "./pages/CardPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <SiteHeader />
          <LiveMemberTicker />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vision" element={<VisionPage />} />
              <Route path="/manifesto" element={<Manifesto />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:slug" element={<ArticleDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/members" element={<Members />} />
              <Route path="/voice" element={<Voice />} />
              <Route path="/voice/raise" element={<RaiseIssue />} />
              <Route path="/cockroach-tracker" element={<Tracker />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/meme" element={<Memes />} />
              <Route path="/news" element={<News />} />
              <Route path="/press" element={<Press />} />
              <Route path="/card" element={<CardPage />} />
              <Route path="/join" element={<Join />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <SiteFooter />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
