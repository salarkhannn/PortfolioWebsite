import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import AllProjects from "./pages/AllProjects";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import RentoCaseStudy from "./pages/RentoCaseStudy";
import KarakoramCaseStudy from "./pages/KarakoramCaseStudy";
import ZealCaseStudy from "./pages/ZealCaseStudy";
import PasswordUnlock from "./components/PasswordUnlock";
import ScrollToTop from "./components/ScrollToTop";
import { useAuth } from "./hooks/use-auth";

const queryClient = new QueryClient();

const AuthenticatedApp = () => {
  const { isAuthenticated, isLoading, login } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <PasswordUnlock onUnlock={login} />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/case-study/rento" element={<RentoCaseStudy />} />
        <Route path="/case-study/karakoram" element={<KarakoramCaseStudy />} />
        <Route path="/case-study/zeal" element={<ZealCaseStudy />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthenticatedApp />
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
