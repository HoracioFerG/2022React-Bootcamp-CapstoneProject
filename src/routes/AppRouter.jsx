import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes/routes";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.Component}
              exact={route.exact}
            />
          );
        })}
      </Routes>
    </>
  );
};
