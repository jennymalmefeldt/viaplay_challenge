import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DisplaySeries from "./components/DisplaySeries";

export const App = () => {
  return (
    <>
      <Header />
      <DisplaySeries />
      <Footer />
    </>
  );
};

export default App;
