import React, { ReactNode } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Bubble } from "react-chartjs-2";
import sourceData from "../data/sourceData.json";

type ChartProps={
    children: ReactNode;
}

function Chart(props: ChartProps) {
    return (
        <div className="card mt-2 chart-card">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}
export default Chart;
