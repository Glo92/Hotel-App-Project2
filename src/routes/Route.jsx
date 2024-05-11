import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About"
import Services from "./Services";
import Registor from "./Registor";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/about',
        element: <About/>,
    },
    {
        path: '/services',
        element: <Services/>,
    },
    {
        path: '/registor',
        element: <Registor/>,
    }
])