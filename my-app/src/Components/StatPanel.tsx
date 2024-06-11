import React, { ReactNode } from "react";
import { FaUser } from "react-icons/fa";
type StatPanelProps={
    children: ReactNode;
    panelTitle: string;
    panelDescription: string;
    statsNumber: string;
    className: string;
}
function StatPanel(props: StatPanelProps) {
    return (
        <>
        <div className={`card text-center ${props.className} stat-panel`}>
            <div className="panel-icon text-center mt-3">
                {props.children}
            </div>
                <div className="card-body">
                    <h4 className="card-title fw-bold">{props.statsNumber}</h4>
                    <h5 className="card-title fw-bold">{props.panelTitle}</h5>
                    <p className="card-text">{props.panelDescription}</p>
                </div>
        </div>
        </>
    )
}
export default StatPanel;