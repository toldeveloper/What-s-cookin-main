import NavBar from "../../components/NavBar";
import SLNavBar from "./components/SLnavBar";
import { Routes, Route } from "react-router-dom";
import ShoppingListPage from "./Pages/ShoppingList";
import StockList from "./Pages/StockList";
import { BrowserRouter } from "react-router-dom";
import List2 from "./List2";

export default function List() {
  return (
    <>
      <div>
        <h1> List Page</h1>
        <SLNavBar />
        <List2 />
        <NavBar />
      </div>
    </>
  );
}
