import { RouterProvider } from "react-router";
import { router } from "./routes";
import "../styles/fonts.css";

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <RouterProvider router={router} />
  );
}
