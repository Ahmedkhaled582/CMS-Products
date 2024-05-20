import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Website/HomePage";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Users from "./Pages/Dashboard/Users";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Auth/RequireAuth";
import User from "./Pages/Dashboard/User";
import AddUser from "./Pages/Dashboard/AddUser";
import Err403 from "./Pages/Auth/403";
import Err404 from "./Pages/Auth/404";
import RequireBack from "./Pages/Auth/RequireBack";
import Categories from "./Pages/Dashboard/Categories";
import AddCategories from "./Pages/Dashboard/AddCategories";
import Category from "./Pages/Dashboard/Category";
import Products from "./Pages/Dashboard/Products";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Writer from "./Pages/Dashboard/Writer"
function App() {
  return (
    <div className="App">
    <Routes>




    <Route element={<RequireBack/>}>

    <Route path="/" element={<Dashboard/>}>

    // Users
    <Route index element={<Users/>}/>
    <Route path="users" element={<Users/>}/>
    <Route path="users/:id" element={<User/>}/>
    <Route path="user/add" element={<AddUser/>}/>

    // Writer
    <Route path="writer" element={<Writer/>}/>

    // Categories
    <Route path="categories" element={<Categories/>}/>
    <Route path="categories/:id" element={<Category/>}/>
    <Route path="category/add" element={<AddCategories/>}/>
    // Products
    <Route path="products" element={<Products/>}/>
    <Route path="products/:id" element={<Category/>}/>
    <Route path="product/add" element={<AddProduct/>}/>
    </Route>
    </Route>

    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
  
    </Routes>
    </div>
  );
}

export default App;
