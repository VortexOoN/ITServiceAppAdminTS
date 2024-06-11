import React from "react";
import SiteName from "../Components/SiteName.tsx";
import { FaRegMessage, FaGauge, FaFeather, FaCalendar, FaChartLine } from "react-icons/fa6";
import MessagesList from "../Components/MessagesList.tsx";
import { BiMessageRoundedCheck } from "react-icons/bi";
import UserFilter from "../Components/UserFilter.tsx"
import { FiMessageCircle } from "react-icons/fi";
import { FaLaptop, FaQuestion, FaCamera, FaWpforms, FaUser } from "react-icons/fa";
import StatPanel from "../Components/StatPanel.tsx";
function Messages(){
    return(
        <>
        <div className="row text-start ">
            <SiteName text="Messages Panel">
                <FaRegMessage />
            </SiteName>
        </div>
        <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 mt-3 mb-2" >
                            <StatPanel panelTitle="Messages today" panelDescription="Total number messages today" statsNumber="5" className="bg-secondary">
                                <FiMessageCircle size={100}/>
                            </StatPanel>
                        </div>
                        <div className="col-md-3 mt-3 mb-2" >
                            <StatPanel panelTitle="Messages opened" panelDescription="Total number of opened messages" statsNumber="30" className="bg-secondary">
                                <BiMessageRoundedCheck size={100}/>
                            </StatPanel>
                        </div>
                    </div>
                </div>
        <UserFilter />
        <MessagesList/>
        </>
    );
}
export default Messages;