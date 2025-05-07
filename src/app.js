import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header"
import {Functions} from "./Components/Functions"
import Body from "./Components/Body"
import About from "./Components/AboutUs.js"
import Error from "./Components/Error.js"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import RestaurantMenu from "./Components/restaurantMenu.js"

const AppLayout = ()=> {
    return (
        <div>
            <Header />
            {/* <Body /> */}
            <Outlet/> 
             /** replaced by children routes  */ 
        </div>
    )
};

// create browser router for router configuration .
const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout />,
        children: [
            {
                path:"/",
                element:<Body />
            } ,

            {
                path:"/about",
                element:<About />
            } ,

            {
                path:"/restaurants/:Id",  // dynamic routing .
                element:<RestaurantMenu />
            } ,
        ],
        errorElement:<Error />  // our own custom error page .
    } ,

    
]);

// router provider to provide router configuration .
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)