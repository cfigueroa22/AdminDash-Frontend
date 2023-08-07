import React, { useEffect, useState } from "react";
import hrLogo from "../assets/hr-logo.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  let [open, setOpen] = useState(false);

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("https://admindash-server-production.up.railway.app/dashboard")
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
        }
      });
  }, [navigate]);

  // const handleLogout = () => {
  //   axios

  //     .get("/logout")
  //     .then((res) => {
  //       navigate("/login");
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="bg-background h-screen">
      <div className="bg-background flex p-2 justify-between t:flex-col ">
        <div className="flex items-center gap-2 l:justify-end">
          <img src={hrLogo} alt="hr-logo" className="w-10 l:hidden" />

          <p className="font-overpass text-xl font-extrabold">
            Admin Dashboard
          </p>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl hover:cursor-pointer hover:text-gray t:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <div
          id="menu"
          className={`bg-accent absolute h-80 flex justify-center w-full transition-all ease-in duration-500 t:top-0 t:bg-transparent t:static t:h-10 t:pt-5 l:bg-secondary l:left-0 l:w-36 l:h-full l:top-0 l:fixed ${
            open ? "top-14" : "top-[-1000px]"
          }`}
        >
          <ul className="flex flex-col text-2xl justify-around t:flex-row t:w-full t:justify-evenly l:flex-col l:justify-start l:z-40 ">
            <div className="hidden l:flex l:justify-center">
              <img src={hrLogo} alt="hr-logo" className="w-10 l:w-20" />
            </div>
            <Link
              to="/"
              onClick={() => setOpen(!open)}
              className="font-quicksand font-bold hover:cursor-pointer text-white flex items-center hover:text-lightGray t:text-titleColor t:text-lg l:py-4 l:pl-2  l:text-xl "
            >
              <ion-icon name="newspaper-outline"></ion-icon>Dashboard
            </Link>
            <Link
              to="/employee"
              onClick={() => setOpen(!open)}
              className="font-quicksand font-bold hover:cursor-pointer text-white flex items-center hover:text-lightGray t:text-titleColor t:text-lg l:py-6 l:pl-2  l:text-xl"
            >
              <ion-icon name="people-outline"></ion-icon>Employees
            </Link>
            <Link
              to="/projects"
              onClick={() => setOpen(!open)}
              className="font-quicksand font-bold hover:cursor-pointer text-white flex items-center hover:text-lightGray t:text-titleColor t:text-lg l:py-6 l:pl-2  l:text-xl"
            >
              <ion-icon name="file-tray-stacked-outline"></ion-icon>Projects
            </Link>
            <Link
              to="/tickets"
              onClick={() => setOpen(!open)}
              className="font-quicksand font-bold hover:cursor-pointer text-white flex items-center hover:text-lightGray t:text-titleColor t:text-lg l:py-6 l:pl-2  l:text-xl"
            >
              <ion-icon name="ticket-outline"></ion-icon>
              Tickets
            </Link>
            {/* <Link
              onClick={handleLogout}
              className="font-quicksand font-bold hover:cursor-pointer text-white flex items-center hover:text-lightGray t:text-titleColor t:text-lg  l:py-6 l:pl-2  l:text-xl"
            >
              <ion-icon name="exit-outline"></ion-icon>Logout
            </Link> */}
          </ul>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
