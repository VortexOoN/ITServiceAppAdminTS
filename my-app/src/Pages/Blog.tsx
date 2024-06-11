import React from "react";
import BlogArticlesList from "../Components/BlogArticlesList.tsx";
import { FaRegMessage, FaGauge, FaFeather, FaCalendar, FaChartLine, } from "react-icons/fa6";
import { FaLaptop, FaQuestion, FaCamera, FaWpforms, FaUser } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import SiteName from "../Components/SiteName.tsx";
import StatPanel from "../Components/StatPanel.tsx";
import Card from "../Components/Card.tsx";
function Blog() {
    return (
        <>
            <div className="row text-start">
                <SiteName text="Blog Panel"><FaFeather />
                </SiteName>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 mt-3 mb-2" >
                            <StatPanel panelTitle="Blog posts" panelDescription="Total number of blog posts" statsNumber="30" className="bg-secondary">
                                <FaLaptop size={100} />
                            </StatPanel>
                        </div>
                        <div className="col-md-3 mb-2 mt-3">
                            <StatPanel panelTitle="Today's posts" panelDescription="Total number of today's posts" statsNumber="0" className="bg-secondary">
                                <ImBlog size={100} />
                            </StatPanel>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-2">
                                <Card actualNumber="10" assignmentName="Blog posted this month" progressPercent="76%" cardDescription="Lets see how many post we can get till end of month!">
                                </Card>
                            </div>
                            <div>
                                <Card actualNumber="10" assignmentName="Blog posted this month" progressPercent="89%" cardDescription="Lets see how many post we can get till end of month!">
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BlogArticlesList />
        </>
    );
}
export default Blog;