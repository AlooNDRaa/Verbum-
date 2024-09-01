import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../protectedRoute/ProtectedRoute";
import { Login } from "../../../pages/login";
import { Error404 } from "../../../pages/errorpage";
import Home from "../../../pages/home";
import Blog from "../../../pages/blog";
// import { GameCYR } from "../../../pages/game";
import { ThePrivatePage } from "../../../pages/private";
import { useAuth } from "../auth/authprovider";
import { Chat } from "../../chat/Chat";
// import Chatopen from "../../chat/chatOpen";


export const Routees = () => {
    const { token } = useAuth();


const routesForThePublic = [
{
    path: "/",
    element: <Login/>,
},
{
    path: "*",
    element: <Error404/>,
},
];

const routesForOnlyAuth = [
{
    path: "/",
    element: <ProtectedRoute/>,
    children: [
        {
            path:"/home",
            element: <Home/>,
        },
        {
            path:"/chats",
            element: <Chat/>,
        },
        {
            path:"/blog",
            element: <Blog/>,
        },
        {
            path:"/game",
            // element: <GameCYR/>,
        },
        {
            path:"/pvp",
            element: <ThePrivatePage/>,
        },
        {
            path:"/chatopen",
            // element: <Chatopen/>,
        },
    ],
},
];

const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "*",
      element: <Error404/>,
    },
  ];

  const router = createBrowserRouter([
    ...routesForThePublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForOnlyAuth,
  ]);

  return <RouterProvider router={router} />;
}

export default Routees;