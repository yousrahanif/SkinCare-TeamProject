import React from "react";
import './HealthFoodCart.css'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Group 10-15",
    Water: 4000,
    Carb: 2400,
    Protein: 2400,
    Fat:100,
    Vitamins:900,
    Minerals:90

  },
  {
    name: " Group 10-15",
    Water: 4000,
    Carb: 2400,
    Protein: 2400,
    Fat:100,
    Vitamins:900,
    Minerals:90
  },
  {
    name: "Group 10-15",
    Water: 4000,
    Carb: 2400,
    Protein: 2400,
    Fat:100,
    Vitamins:900,
    Minerals:90
  },
  {
    name: "Group 10-15",
    Water: 4000,
    Carb: 2400,
    Protein: 2400,
    Fat:100,
    Vitamins:900,
    Minerals:90
  },
  {
    name: "Group 10-15",
    Water: 4000,
    Carb: 2400,
    Protein: 2400,
    Fat:100,
    Vitamins:900,
    Minerals:90
  },
  {
    name: "Group 10-15",
    Water: 4000,
    Carb: 2400,
    Protein: 2400,
    Fat:100,
    Vitamins:900,
    Minerals:90
  },
  {
    name: "Group 10-15",
    Water: 4000,
    Carb: 2400,
    Protein: 2400,
    Fat:100,
    Vitamins:900,
    Minerals:90
  }
];

const HealthFoodCart = () => {
  return (
   <div className="barchart">
    
     <BarChart 
      width={1000}
      height={500}
      data={data}
      margin={{
        top: 50,
        right: 0,
        left: 10,
        bottom: 5 
         
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Water" fill="#8884d8" />
      <Bar dataKey="Carb" fill="#82ca9d" />
      <Bar dataKey="Protein" fill="pink" />
      <Bar dataKey="Fat" fill="red" />
      <Bar dataKey="Vitamins" fill="lightBlue" />
      <Bar dataKey="Minerals" fill="gray" />
    </BarChart>
   </div>
  );
}



export default HealthFoodCart;
