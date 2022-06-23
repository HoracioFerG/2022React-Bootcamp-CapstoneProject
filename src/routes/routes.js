import { lazy } from "react";
// import { LoadingPage } from "../pages/LoadingPage";
// import { Content } from "../components/Content";
// import { PageNotFound } from "../pages/PageNotFound";
// import { ProductsHomePage } from "../pages/ProductsHomePage.jsx";

const Content = lazy(() =>
  import(/* webpackChunkName: "Content" */ "../components/Content")
);
const PageNotFound = lazy(() =>
  import(/* webpackChunkName: "PageNotFound" */ "../pages/PageNotFound")
);
const ProductsHomePage = lazy(() =>
  import(
    /* webpackChunkName: "ProductsHomePage" */ "../pages/ProductsHomePage.jsx"
  )
);

const LoadingPage = lazy(() =>
  import(/* webpackChunkName: "ProductsHomePage" */ "../pages/LoadingPage")
);
const ProductsLayout = lazy(() =>
  import(/* webpackChunkName: "ProductsHomePage" */ "../pages/ProductsLayout")
);

export const routes = [
  {
    path: "/",
    to: "/",
    Component: Content,
  },
  {
    path: "/home",
    to: "/home",
    Component: Content,
  },
  {
    path: "/products",
    to: "/products",
    Component: ProductsLayout,
    child: [
      {
        index: true,
        path: "",
        to: "/products/",
        Component: ProductsHomePage,
      },
      {
        path: ":idCategory",
        to: "/products/:idCategory",
        Component: LoadingPage,
      },
      {
        path: "product-detail",
        to: "products/product-detail",
        Component: PageNotFound,
      },
    ],
  },

  {
    path: "*",
    to: "*",
    Component: PageNotFound,
  },
];
