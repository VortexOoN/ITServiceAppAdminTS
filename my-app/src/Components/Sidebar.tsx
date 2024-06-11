import React from "react";
import { FaRegMessage, FaGauge, FaFeather, FaCalendar, FaChartLine } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import { FaUser } from "react-icons/fa";
function Sidebar() {

    return (
        <>
        <div className="sidebar d-none d-lg-block bg-secondary">
            <ul className="nav flex-column mt-2">
                <li>
                    <p className="fs-3 fw-bold">Menu</p>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <FaGauge size={30} />
                        <p>Dashboard</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"  href="/Messages">
                        <FaRegMessage size={30} />
                        <p>Messages</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Blog">
                        <FaFeather size={30} />
                        <p>Blog</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <IoMdPhotos size={30} />
                        <p>Gallery</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <FaCalendar size={30} />
                        <p>Calendar</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Statistics">
                        <FaChartLine size={30} />
                        <p>Statistics</p>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Users"><FaUser size={30} />
                        <p>Users</p>
                    </a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Sidebar;