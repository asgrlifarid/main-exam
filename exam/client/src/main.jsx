import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/App/store.js";
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  </HelmetProvider>
);
