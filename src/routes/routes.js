import { lazy } from "react";

const Content = lazy(() =>
  import(/* webpackChunkName: "Content" */ "../components/Content")
);
const PageNotFound = lazy(() =>
  import(/* webpackChunkName: "PageNotFound" */ "../pages/PageNotFound")
);

const ProductDetail = lazy(() =>
  import(
    /* webpackChunkName: "ProductDetailPage" */ "../components/products/ProductDetail"
  )
);
const SearchResult = lazy(() =>
  import(
    /* webpackChunkName: "SearchResultPage" */ "../components/search/SearchResults"
  )
);
const ProductsHomePage = lazy(() =>
  import(/* webpackChunkName: "ProductsHomePage" */ "../pages/ProductsHomePage")
);

const LoadingPage = lazy(() =>
  import(/* webpackChunkName: "LoadingPage" */ "../pages/LoadingPage")
);
const ProductsLayout = lazy(() =>
  import(/* webpackChunkName: "ProductLayout" */ "../pages/ProductsLayout")
);
const CartHomePage = lazy(() =>
  import(/* webpackChunkName: "CartHomePage" */ "../pages/CartHomePage")
);
const CheckoutHomePage = lazy(() =>
  import(/* webpackChunkName: "CheckoutHomePage" */ "../pages/CheckoutHomePage")
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
    path: "/cart",
    to: "/cart",
    Component: CartHomePage,
  },
  {
    path: "/checkout",
    to: "/checkout",
    Component: CheckoutHomePage,
  },
  {
    path: "*",
    to: "*",
    Component: PageNotFound,
  },
];
