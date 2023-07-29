import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, [auth]);

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]  ${
                pathMatchRoute("/")
                  ? "text-black border-b-red-500"
                  : "border-b-transparent"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] ${
                pathMatchRoute("/offers")
                  ? "text-black border-b-red-500"
                  : "border-b-transparent"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] ${
                pathMatchRoute("/sign-in") || pathMatchRoute("/profile")
                  ? "text-black border-b-red-500"
                  : "border-b-transparent"
              }`}
              onClick={() => navigate(!loggedIn ? "/sign-in" : "/profile")}
            >
              {!loggedIn ? "Sign in" : "Profile"}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
