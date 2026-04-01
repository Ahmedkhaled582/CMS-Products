import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Users from "./Pages/Dashboard/Users";
import Dashboard from "./Pages/Dashboard/Dashboard";
import User from "./Pages/Dashboard/User";
import AddUser from "./Pages/Dashboard/AddUser";
import RequireBack from "./Pages/Auth/RequireBack";
import Products from "./Pages/Dashboard/Products";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Calendar from "./Pages/Dashboard/calendar/Calendar";
import Home from "./Pages/Dashboard/home/Home";
import { useEffect, useState } from "react";
import BarChart from "./Pages/Dashboard/barChart/BarChart";
import Geography from "./Pages/Dashboard/geography/Geography";
import LineChart from "./Pages/Dashboard/lineChart/LineChart";
import PieChart from "./Pages/Dashboard/pieChart/PieChart";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <Routes>
        <Route element={<RequireBack />}>
          <Route
            path="/"
            element={
              <Dashboard
                // @ts-ignore
                setTheme={setTheme}
                theme={theme}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            // Users
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<User />} />
            <Route path="user/add" element={<AddUser />} />
            // Products
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<Products />} />
            <Route path="product/add" element={<AddProduct />} />
            // calendar
            <Route path="calender" element={<Calendar />} />
            // charts
            <Route path="barchart" element={<BarChart />} />
            <Route path="geography" element={<Geography />} />
            <Route path="linechart" element={<LineChart />} />
            <Route path="piechart" element={<PieChart />} />
          </Route>
        </Route>
        // Auth
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
