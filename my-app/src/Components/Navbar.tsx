import React from "react";
import { FaComputer } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { MdMail } from "react-icons/md";
function Navbar() {
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid text-light">

                <a className="navbar-brand text-light fs-4" href="/">
                    <FaComputer></FaComputer>
                    <span className="ms-2">OptiPC</span>
                </a>

                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn bg-light" type="submit">Search</button>
                </form>
                <div className="ms-auto d-flex">
                    <span><MdMail size={30} /><span className="badge text-bg-secondary">New</span></span>
                    <span><FaBell size={30} /><span className="badge text-bg-secondary">New</span></span>
                </div>


            </div>
        </nav>
    )
}
export default Navbar;