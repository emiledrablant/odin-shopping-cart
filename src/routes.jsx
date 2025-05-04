import App from "./App";
import Shopping from "./Shopping";
import Home from "./Home";
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
            }
        ]
    },
    {
        path: "/Shop",
        element: <Shopping />,
    }
]

export default routes;