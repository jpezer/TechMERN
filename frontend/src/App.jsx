import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import { routesConfig } from "./config/routesConfig";
import ContactPage from "./pages/ContactPage/ContactPage";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import Navigation from "./components/Navigation/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./config/axiosConfig";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <Loader />
            <Navigation />
            <Routes>
                <Route path={routesConfig.SHOP.url} element={<ShopPage />} />
                <Route path={routesConfig.CONTACT.url} element={<ContactPage />} />
                <Route path={routesConfig.AUTHORIZATION.url} element={<AuthorizationPage />} />
            </Routes>
            <ToastContainer />
        </>
    );
}

export default App;
