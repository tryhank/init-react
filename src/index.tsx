import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";
// import json from "@/assets/json/test.json";

// const root = document.getElementById('root');
const root = document.querySelector("#root");

console.log(process.env.BASE_ENV);
// console.log(process.env.NODE_ENV);
// console.log(process.env);
// console.log(json);

if (root) {
  createRoot(root).render(<App />);
}
