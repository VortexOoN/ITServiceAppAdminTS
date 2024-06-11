import React from "react";
type CardProps={
    actualNumber: string;
    assignmentName: string;
    cardDescription: string;
    progressPercent: string;
}
function Card(props: CardProps) {
    return (
        <div className="card bg-dark text-light">
            <div className="card-body">
                <h5>{props.actualNumber}</h5>
                <h6 className="card-title">{props.assignmentName}</h6>
                <div className="progress text" role="progressbar">
                    <div className="progress-bar w-75">{props.progressPercent}</div>
                </div>
                <p className="card-text">{props.cardDescription}</p>
            </div>
        </div>
    )
}
export default Card;