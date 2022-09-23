import React from "react";
import { Navbar, Hero, Experience, Footer } from "./components";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Experience key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
      <Footer />
    </div>
  );
}

export default App;
