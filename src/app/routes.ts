import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { CollectionPage } from "./pages/CollectionPage";
import { ProductPage } from "./pages/ProductPage";
import { AboutPage } from "./pages/AboutPage";
import { LookbookPage } from "./pages/LookbookPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "collezione", Component: CollectionPage },
      { path: "collezione/:id", Component: ProductPage },
      { path: "chi-siamo", Component: AboutPage },
      { path: "lookbook", Component: LookbookPage },
      { path: "contatti", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
