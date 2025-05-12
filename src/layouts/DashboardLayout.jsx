import React from "react";
import { Outlet } from "react-router";
import DashSidebar from "../component/DashSidebar";
import DashNavbar from "../component/DashNavbar";

const DashboardLayout = () => {
    return (
        <div className="flex font-play-au ">
            <DashSidebar />
            <div className="ml-60  flex flex-col w-full">
                <DashNavbar />
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
