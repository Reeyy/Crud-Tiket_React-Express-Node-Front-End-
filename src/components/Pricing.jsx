import React, { useState } from "react";
import PricingList from "./PricingList";

const Pricing = () => {
  const [kelas, setKelas] = useState([
    {
      kelas: "Ekonomi",
      price: "200.000",
      img: "https://images.unsplash.com/photo-1589395241612-86d52ec4b9f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      kelas: "Bisnis",
      price: "300.000",
      img: "https://images.unsplash.com/photo-1595974379321-45126887ab11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      kelas: "Eksekutif",
      price: "400.000",
      img: "https://images.unsplash.com/photo-1610290621034-3e4754ada6ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    },
  ]);
  return <PricingList kelas={kelas} />;
};

export default Pricing;
