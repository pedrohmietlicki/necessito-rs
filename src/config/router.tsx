import {
    createBrowserRouter,
    RouterProvider,
    useLoaderData,
  } from "react-router-dom";
  import App from "../App";
  import { Shelters } from "../components/shelters";
  
  
  let router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/shelters",
      element: <Shelters/>
    },
  
  ]);
  
export default router