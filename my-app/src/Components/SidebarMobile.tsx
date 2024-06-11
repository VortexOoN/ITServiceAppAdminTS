import React from "react";
import { FaRegMessage, FaGauge, FaFeather, FaCalendar, FaChartLine } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import { FaUser } from "react-icons/fa";

function SidebarMobile() {
    return (
        <nav className="navbar d-lg-none">
            <a className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </a>
            <div className="offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header bg-secondary">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">OptiPC Admin Panel</h5>
                    <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body bg-secondary">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link offcanvas-item" href="/">
                                <FaGauge size={30} />
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link offcanvas-item" href="/Messages">
                                <FaRegMessage size={30} />
                                <p>Messages</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link offcanvas-item" href="/Blog">
                                <FaFeather size={30} />
                                <p>Blog</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link offcanvas-item" href="#">
                                <IoMdPhotos size={30} />
                                <p>Gallery</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link offcanvas-item" href="#">
                                <FaCalendar size={30} />
                                <p>Calendar</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link offcanvas-item" href="/Statistics">
                                <FaChartLine size={30} />
                                <p>Statistics</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link offcanvas-item" href="/Users"><FaUser size={30} />
                                <p>Users</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default SidebarMobile;