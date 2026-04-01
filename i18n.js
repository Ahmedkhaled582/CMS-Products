import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Dashboard: "Dashboard",
        Calender: "Calender",
        Users: "Users",
        AddUser: "Add User",
        Products:"Products",
        AddProduct:"Add Product",
        BarChart:"Bar Chart",
        Geography:"Geography",
LineChart:"Line Chart",
PieChart:"Pie Chart"
      }
    },
    ar: {
      translation: {
        Dashboard: "لوحة التحكم",
        Calender: "التقويم",
        Users: "المستخدمون",
        AddUser: "إضافة مستخدم",
        Products:"المنتجات",
        AddProduct:"إضافة منتج",
        BarChart:"المخطط العمودى",
        Geography:"الجغرافيا",
LineChart:"المخطط الخطى",
PieChart:"المخطط الدائرى"
      }
    }
  },
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;