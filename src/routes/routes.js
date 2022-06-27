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

const ProductDetail = lazy(() =>
  import(
    /* webpackChunkName: "ProductDetailPage" */ "../components/products/ProductDetail.jsx"
  )
);
const SearchResult = lazy(() =>
  import(
    /* webpackChunkName: "SearchResultPage" */ "../components/search/SearchResults.jsx"
  )
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
        path: "/products/product",
        to: "/products/product",
        Component: ProductDetail,
      },
    ],
  },
  {
    path: "/search",
    to: "/search",
    Component: SearchResult,
  },
  {
    path: "*",
    to: "*",
    Component: PageNotFound,
  },
];
