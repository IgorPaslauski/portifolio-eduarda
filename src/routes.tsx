import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Wireframe from "./pages/Wireframe";
import NotFound from "./pages/NotFound";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/portifolio-eduarda" element={<Index />} />
    <Route path="/portifolio-eduarda/wireframe" element={<Wireframe />} />
    <Route path="/wireframe" element={<Wireframe />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);