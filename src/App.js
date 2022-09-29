import React from "react";
import FoodNav from "./components/LandingPage/FoodNav";
import Order from "./components/LandingPage/Order";
import Specials from "./components/LandingPage/Specials";
import Updated from "./components/LandingPage/Updated";
import Footer from "./components/LandingPage/Footer";

function App() {
  const navbar = [
    { head: "Lillies", home: "Home", login: "Login", signup: "Signup" },
  ];
  const title = "Get started";
  return (
    <div>
      <FoodNav
        head={navbar[0].head}
        home={navbar[0].home}
        login={navbar[0].login}
        signup={navbar[0].signup}
      ></FoodNav>
      <Order></Order>
      <Specials></Specials>
      <Updated title={title}></Updated>
      <Footer></Footer>
    </div>
  );
}

export default App;
