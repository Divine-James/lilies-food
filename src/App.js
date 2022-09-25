import React from "react";
import FoodNav from "./components/FoodNav";
import Order from "./components/Order";
import Specials from "./components/Specials";
import Updated from "./components/Updated";
import Footer from "./components/Footer";

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
