import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "./Css/Components/Form.css"
import "./Css/base/media.css"
import "./Css/Components/alerts.css"
import "./Css/Components/loading.css"
import "./Css/Components/button.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import { HashRouter } from 'react-router-dom';
import MenuContext from './Context/MenuContext';
import WindowContext from './Context/WindowContext';
import "../i18n";
   
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
  <WindowContext>
  <MenuContext>
  <HashRouter>
    <App />
  </HashRouter>
  </MenuContext>
  </WindowContext>
    </StrictMode>
)
