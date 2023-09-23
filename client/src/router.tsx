import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import AppLayout from "./layouts/AppLayout";

const router = createBrowserRouter([
  {
    index: true,
    element: <AppLayout element={<Home />} />,
  },
]);

export default router;
