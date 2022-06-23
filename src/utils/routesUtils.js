import { Route } from "react-router-dom";

export const getRoutes = (routesArray) => {
  const allRoutes = [];
  routesArray.forEach((route) => {
    allRoutes.push(
      <Route
        key={route.path}
        path={route.path}
        element={<route.Component />}
        exact={route.exact}
      >
        {route?.child && getRoutes(route.child)}
      </Route>
    );
  });
  return allRoutes;
};
