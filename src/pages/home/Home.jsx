import React from "react";
import "./home.scss";
import TopBox from "../../components/topBox/TopBox";
import ChartBox from "../../components/chartBox/ChartBox";
import { barChartBoxRevenue, barChartBoxVisit, bigChartBoxData, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser, pieChartData } from "../../data";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";

const Home = () => {
    return (
    <div className="home">
        <div className="box box1">
            <TopBox />
        </div>
        <div className="box box2">
            <ChartBox {...chartBoxUser}/>
        </div>
        <div className="box box3">
            <ChartBox {...chartBoxProduct}/>
        </div>
        <div className="box box4">
            <PieChartBox pieChartData={pieChartData} />
        </div>
        <div className="box box5">
            <ChartBox {...chartBoxConversion}/>
        </div>
        <div className="box box6">
            <ChartBox {...chartBoxRevenue}/>
        </div>
        <div className="box box7">
            <BigChartBox bigChartBoxData={bigChartBoxData} />
        </div>
        <div className="box box8">
            <BarChartBox {...barChartBoxVisit} />
        </div>
        <div className="box box9">
            <BarChartBox {...barChartBoxRevenue} />
        </div>
    </div>
    )
};

export default Home;
