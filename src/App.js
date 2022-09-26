import React from "react";
import FoodNav from "./components/LandingPage/FoodNav";
import Order from "./components/LandingPage/Order";
import Specials from "./components/LandingPage/Specials";
import Updated from "./components/LandingPage/Updated";
import Footer from "./components/LandingPage/Footer";

function App() {
  return (
    <div>
      <FoodNav></FoodNav>
      <Order></Order>
      <Specials></Specials>
      <Updated></Updated>
      <Footer></Footer>
    </div>
  );
}

export default App;
