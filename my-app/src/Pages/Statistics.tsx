import React from "react";
import SiteName from "../Components/SiteName.tsx";
import StatPanel from "../Components/StatPanel.tsx";
import { FaUser } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaLaptop, FaQuestion, FaCamera, FaWpforms  } from "react-icons/fa";
import costsData from "../data/costsData.json";
import revenueData from "../data/revenueData.json";
import { FaRegMessage, FaGauge, FaFeather, FaCalendar, FaChartLine } from "react-icons/fa6";
import { Bar, Doughnut, Line, Bubble, Pie, Scatter} from "react-chartjs-2";
import Chart from "../Components/Chart.tsx";
function Statistics(){
    return(
        <>
        <div className="row text-start">
            <SiteName text="Statistics Panel"><FaChartLine/>
            </SiteName>
        </div>
        <div className="row">
            <div className="col-md-2 gy-2">
                <StatPanel panelTitle="Users Registered" panelDescription="Total number of registered users" statsNumber="215" className="bg-secondary">
                    <FaUser size={100}></FaUser>
                </StatPanel>
            </div>
            <div className="col-md-2 gy-2">
                <StatPanel panelTitle="Services Carried" panelDescription="Total number of services carried" statsNumber="450" className="bg-secondary">
                    <FaScrewdriverWrench size={100}/>
                </StatPanel>
            </div>
            <div className="col-md-2  gy-2">
                <StatPanel panelTitle="Blog posts" panelDescription="Total number of blog posts" statsNumber="30" className="bg-secondary">
                    <FaLaptop size={100}/>
                </StatPanel>
            </div>
            <div className="col-md-2  gy-2">
                <StatPanel panelTitle="Questions Answered" panelDescription="Total number of question aswered in FAQ" statsNumber="561" className="bg-secondary">
                    <FaQuestion size={100}/>
                </StatPanel>
            </div>
            <div className="col-md-2  gy-2">
                <StatPanel panelTitle="Gallery Photos" panelDescription="Total number of gallery photos" statsNumber="12" className="bg-secondary">
                    <FaCamera size={100}/>
                </StatPanel>
            </div>
            <div className="col-md-2 gy-2">
                <StatPanel panelTitle="Forms sent" panelDescription="Total number of forms sent" statsNumber="121" className="bg-secondary">
                    <FaWpforms size={100}/>
                </StatPanel>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 mb-2">
                <Chart>
                <Line className="chart"
                    data={{
                        labels: revenueData.map((data) => data.label),
                        datasets: [
                            {
                                label: "Revenue 2024",
                                data: revenueData.map((data) => data.value),
                                backgroundColor: [
                                    'rgba(227, 61, 148, 1)',
                                    'rgba(15, 10, 222, 1)',
                                    'rgba(102, 51, 153, 1)',
                                    'rgba(255, 0, 0, 1)'
                                ],
                            }
                        ]
                    }}
                />
                </Chart>
            </div>
            <div className="col-lg-6 mb-2">
            <Chart>
                <Line className="chart"
                    data={{
                        labels: costsData.map((data) => data.label),
                        datasets: [
                            {
                                label: "Costs 2024",
                                data: costsData.map((data) => data.value),
                                backgroundColor: [
                                    'rgba(227, 61, 148, 1)',
                                    'rgba(15, 10, 222, 1)',
                                    'rgba(102, 51, 153, 1)',
                                    'rgba(255, 0, 0, 1)'
                                ],
                            }
                        ]
                    }}
                />
                </Chart>
            </div>
        </div>
        </>
    )
}
export default Statistics;