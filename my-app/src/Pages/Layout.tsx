import React from "react";
import Navbar from "../Components/Navbar.tsx";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar.tsx";
import SidebarMobile from "../Components/SidebarMobile.tsx"
function Layout() {
    return (
        <>
            <div className="App">
                <div className="align-items-start">
                    <Navbar />
                    <Sidebar />
                    <SidebarMobile />
                    <div className='main-content'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Layout;