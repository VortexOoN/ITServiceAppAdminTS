import React from "react";
import Card from "../Components/Card.tsx";
import Chart from "../Components/Chart.tsx";
import SiteName from "../Components/SiteName.tsx"
import sourceData from "../data/sourceData.json";
import { Bar } from "react-chartjs-2";
import { FaGauge } from "react-icons/fa6";

function Dashboard() {
    return (
        <div className="container-fluid">
            <div className='col-sm-12 text-start'>
                <div className='row mb-2'>
                    <SiteName text='Dashboard'><FaGauge /></SiteName>
                </div>
                <div className='row'>
                    <div className='col-sm-4 mb-2'>
                        <Card actualNumber='135' cardDescription='55 to reach our monthly goal !'
                            progressPercent='75%' assignmentName='Registered users' />
                    </div>
                    <div className='col-sm-4 mb-2'>
                        <Card actualNumber='200' cardDescription='Photos posted in gallery this month ! Our clients rockin😎 ' progressPercent='75%'
                            assignmentName='Photos posted'></Card>
                    </div>
                    <div className='col-sm-4 mb-2'>
                        <Card actualNumber='15' cardDescription='Lets see how many services can we do till end of month' progressPercent="75%"
                            assignmentName='Services carried' />
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <Chart>
                                <Bar className="chart"
                                    data={{
                                        labels: sourceData.map((data) => data.label),
                                        datasets: [
                                            {
                                                label: "Views",
                                                data: sourceData.map((data) => data.value),
                                                backgroundColor: [
                                                    'rgba(227, 61, 148, 1)',
                                                    'rgba(15, 10, 222, 1)',
                                                    'rgba(102, 51, 153, 1)',
                                                    'rgba(255, 0, 0, 1)'
                                                ],
                                                borderRadius: 5,
                                            }
                                        ]
                                    }}
                                />
                            </Chart>
                        </div>
                        <div className='col-lg-6'>
                            <Chart>
                                <Bar className="chart"
                                    data={{
                                        labels: sourceData.map((data) => data.label),
                                        datasets: [
                                            {
                                                label: "Views",
                                                data: sourceData.map((data) => data.value),
                                                backgroundColor: [
                                                    'rgba(227, 61, 148, 1)',
                                                    'rgba(15, 10, 222, 1)',
                                                    'rgba(102, 51, 153, 1)',
                                                    'rgba(255, 0, 0, 1)'
                                                ],
                                                borderRadius: 5,
                                            }
                                        ]
                                    }}
                                />
                            </Chart>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}
export default Dashboard;