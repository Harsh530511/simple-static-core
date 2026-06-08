import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
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
import Auth from "./pages/Auth";
import Protests from "./pages/Protests";
import ProtestDetail from "./pages/ProtestDetail";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminArticles from "./pages/admin/AdminArticles";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminQuotes from "./pages/admin/AdminQuotes";
import AdminNews from "./pages/admin/AdminNews";
import AdminContacts from "./pages/admin/AdminContacts";

const queryClient = new QueryClient();

const Shell = () => {
  const loc = useLocation();
  const isAdmin = loc.pathname.startsWith("/admin");
  const isAuth = loc.pathname === "/auth";
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {!isAdmin && !isAuth && <SiteHeader />}
      {!isAdmin && !isAuth && <LiveMemberTicker />}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/protests" element={<Protests />} />
          <Route path="/protests/:slug" element={<ProtestDetail />} />
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
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<ProtectedRoute requireAdmin><AdminLayout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="articles" element={<AdminArticles />} />
            <Route path="events" element={<AdminEvents />} />
            <Route path="quotes" element={<AdminQuotes />} />
            <Route path="news" element={<AdminNews />} />
            <Route path="contacts" element={<AdminContacts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!isAdmin && !isAuth && <SiteFooter />}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Shell />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
