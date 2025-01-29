import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { Movie } from "./pages/Movie";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        errorElement:<NotFound/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/movies",
                element:<Movies/>,
            },
            {
                path:"/movie/:id",
                element:<Movie/>,
            },
        ]
    }
])