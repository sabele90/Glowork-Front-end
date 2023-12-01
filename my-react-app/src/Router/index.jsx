import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../layouts";
import LoginCard from "../pages/LoginCard/LoginCard";
import SignUpCardUser from "../pages/SignUpCardUser/SignUpCardUser";
import Home from "../pages/Home/Home";
import HomeUser from "../pages/HomeUser/HomeUser";
import SingUpCardCompany from "../pages/SignUpCardCompany/SingUpCardCompany";
import Offers from "../pages/Offers/Offers";
import OfferSubscription from "../pages/OfferSubscription/OfferSubscription";
import UserProfile from "../pages/UserProfile/UserProfile";
import Favorires from "../pages/Favorites/Favorites";
import HomeInfo from "../pages/HomeInfo/HomeInfo";
import SubscriptionsProfile from "../pages/SubscriptionsProfile/SubscriptionsProfile";

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
        path: "/offer/continent/:continentValue",
        element: <Offers />,
      },

      {
        path: "/offer/country/:countryId",
        element: <Offers />,
      },
      {
        path: "/offer_subscrptions/:offer_id",
        element: <OfferSubscription />,
      },
      {
        path: "/profile_user",
        element: <UserProfile/>,
      },
      {
        path: "/favorites",
        element: <Favorires/>,
      },
      {
        path: "/homeInfo",
        element: <HomeInfo/>,
      },
      {
        path: "/subscriptions_profile",
        element: <SubscriptionsProfile/>,
      },
    ],
  },
]);

export default router;
