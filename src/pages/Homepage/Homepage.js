import React from "react";
import Announcement from "../../components/Announcement";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import Catalog from "../../components/Catalog";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Announcement />
      <Header />
      <Slider />
      <Catalog />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Homepage;
