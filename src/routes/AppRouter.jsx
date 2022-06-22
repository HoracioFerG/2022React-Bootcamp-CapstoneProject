import React from "react";
import { Routes } from "react-router-dom";
import { routes } from "../routes/routes";
import { getRoutes } from "../utils/routesUtiles";
export const AppRouter = () => {
  return (
    <>
      <Routes>{getRoutes(routes)}</Routes>
    </>
  );
};
