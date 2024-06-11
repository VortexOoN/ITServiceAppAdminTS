import React, { ReactNode } from "react";
type SiteNameProps={
    text: string;
    children: ReactNode;
}
function SiteName(props: SiteNameProps) {
    return (
        <div className='col-sm-12 mt-2 fw-bold'>
            <span className='fs-1'><span className="me-2">{props.children}</span>{props.text}</span>
        </div>
    )

}
export default SiteName;