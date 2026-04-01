import { faPlus , faUsers , faTruckFast , faCalendarDays , faHome , faChartLine , faEarth , faChartBar , faChartPie } from '@fortawesome/free-solid-svg-icons';

export const links = [
    {
        name : "Dashboard",
        path : "/",
        icon : faHome,
    },
    {
        name : "Users",
        path : "users",
        icon : faUsers,
    },
    {
        name : "AddUser",
        path : "/user/add",
        icon : faPlus,

    },
    {
        name : "Products",
        path : "/products",
        icon : faTruckFast,

    },
    {
        name : "AddProduct",
        path : "/product/add",
        icon : faPlus,

    },
            {
        name : "Calender",
        path : "calender",
        icon : faCalendarDays,
    },
        {
        name : "BarChart",
        path : "/barchart",
        icon : faChartBar,

    },
            {
        name : "Geography",
        path : "/geography",
        icon : faEarth,

    },
            {
        name : "LineChart",
        path : "/linechart",
        icon : faChartLine,

    },
            {
        name : "PieChart",
        path : "/piechart",
        icon : faChartPie,

    },
    
]