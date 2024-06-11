import React from 'react';
import { FaRegMessage, FaGauge, FaFeather, FaCalendar, FaChartLine } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import { FaUser } from "react-icons/fa";
// IMPORTANT ! 
// This code doesnt work as it should
// It is just here because react doesn't allow me to delete it
function Sidebar2() {
    return (
        <div>
            <hr className='d-none d-sm-block' />
            <span className='fs-2 fw-bold d-none d-sm-block'>@Admin123</span>
            <hr className='d-none d-sm-block' />
            <ul className='nav nav-pills flex-column mt-2'>
                <li className='nav-item text-white fs-4'>
                    <a className="nav-link" href="/">
                        <FaGauge size={30} />
                        <p className='d-none d-sm-block'>Dashboard</p>
                    </a>
                </li>
                <li className='nav-item text-white fs-4 mt-2'>
                    <a className="nav-link" href="#">
                        <FaRegMessage size={30} />
                        <p className='d-none d-sm-block'>Messages</p>
                    </a>
                </li>
                <li className='nav-item text-white fs-4'>
                    <a className="nav-link" href="#">
                        <FaFeather size={30} />
                        <p className='d-none d-sm-block'>Blog</p>
                    </a>
                </li>
                <li className='nav-item text-white fs-4'>
                    <a className="nav-link" href="#">
                        <IoMdPhotos size={30} />
                        <p className='d-none d-sm-block'>Gallery</p>
                    </a>
                </li>
                <li className='nav-item text-white fs-4'>
                    <a className="nav-link" href="#">
                        <FaCalendar size={30} />
                        <p className='d-none d-sm-block'>Calendar</p>
                    </a>
                </li>
                <li className='nav-item text-white fs-4'>
                    <a className="nav-link" href="/Statistics">
                        <FaChartLine size={30} />
                        <p className='d-none d-sm-block'>Statistics</p>
                    </a>
                </li>
                <li className='nav-item text-white fs-4'>
                    <a className="nav-link" href="#"><FaUser size={30} />
                        <p className='d-none d-sm-block'>Users</p>
                    </a>
                </li>
            </ul>
            <hr className='d-none d-sm-block' />
        </div>
    )
}
export default Sidebar2;