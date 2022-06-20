import React from "react";

import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { AppRouter } from "../routes/AppRouter";

export const Homepage = () => {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
};
