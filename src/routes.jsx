import App from "./App";
import Home from "./Home";
import Shopping from "./Shopping";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "shop",
                element: <Shopping />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ]
    },
    {
        path: "/Shop",
        element: <Shopping />,
    }
]

export default routes;