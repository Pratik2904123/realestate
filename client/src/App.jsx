import HomePage from "./routes/homePage/homePage";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import ListPage from "./routes/homePage/listPage/listPage";
import {Layout, RequireAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profile/Profile";
import Register from "./routes/register/register";
import Login from "./routes/login/login.jsx";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage.jsx";
import { profilePageLoader, listPageLoader } from "./routes/lib/loaders.js";

function App() {
  const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "list",
          element: <ListPage/>,
          loader: listPageLoader,
        },
          {
          path: "/:id",
          element: <SinglePage/>,
        },
      
           {
          path: "register",    
          element: <Register />,
        },
         {
          path: "login",    
          element: <Login />,
        },
      ],
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
          {
          path: "profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
          },
          {
          path: "profile/update",
          element:< ProfileUpdatePage />,
          },
          {
          path: "add",
          element:< NewPostPage />,
          },

      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;