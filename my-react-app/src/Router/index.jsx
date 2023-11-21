import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../layouts";
import LoginCard from "../pages/LoginCard/LoginCard";
import SignUpCardUser from "../pages/RegisterCardUser/SignUpCardUser";
import Home from "../pages/Home/Home";
import HomeUser from "../pages/HomeUser/HomeUser";
import SingUpCardCompany from "../pages/RegisterCardCompany/SingUpCardCompany";
import Offers from "../pages/Offers/Offers";
import OfferSubscription from "../pages/OfferSubscription/OfferSubscription";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginCard />,
      },

      {
        path: "/register_user",
        element: <SignUpCardUser />,
      },
      {
        path: "/register_company",
        element: <SingUpCardCompany />,
      },
      {
        path: "/home_user",
        element: <HomeUser />,
        loader: () => {
          if (!localStorage.token) {
            return redirect("/");
          } else {
            return null;
          }
        },
      },
      {
        path: "/offer/:countryValue",
        element: <Offers />,
      },
      {
        path: "/offer_subscrptions/:offer_id",
        element: <OfferSubscription />,
      },
    ],
  },
]);

export default router;
