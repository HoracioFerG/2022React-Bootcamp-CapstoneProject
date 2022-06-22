import { Content } from "../components/Content";
import { PageNotFound } from "../pages/PageNotFound";
import { ProductsHomePage } from "../pages/ProductsHomePage.jsx";

export const routes = [
  {
    path: "/",
    to: "/",
    Component: <Content />,
  },
  {
    path: "/home",
    to: "/home",
    Component: <Content />,
  },
  {
    path: "/products",
    to: "/products",
    Component: <ProductsHomePage />,
    child: [
      {
        path: ":idCategory",
        to: ":idCategory",
        Component: <ProductsHomePage />,
      },
    ],
  },

  {
    path: "*",
    to: "*",
    Component: <PageNotFound />,
  },
];