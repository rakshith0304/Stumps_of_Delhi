import React from "react";
import LiveScore from "./LiveScore";
import NewsGrid from "./NewsGrid";
import BookVenue from "./BookVenue";
import WeatherWidget from "./WeatherWidget";
import FutureMatches from "./FutureMatches";
import PastMatches from "./PastMatches";
import RegInput from "../Registration/RegInput"

const LandingPage = () => {
    return (

        

        <div>
            <div>
            <RegInput/>
        </div>
                <div className="flex h-screen">
    {/* Left Section - 1/3 width */}
    <div className="flex-1 w-1/3 grid grid-cols-1 mb-0 mt-12 h-full">
    <div className="flex-1">
        {/* <LiveScore /> */}
    </div>
    <div className="flex-1">
        {/* <WeatherWidget /> */}
    </div>
    <div className="flex-1">
        {/* <BookVenue /> */}
    </div>
</div>

    {/* Middle Section - 1/3 width for upcoming matches */}
    <div className="flex-1 w-1/3 h-full flex flex-col justify-center items-center">
        {/* <FutureMatches /> */}
    </div>

    {/* Right Section - 1/3 width for past matches */}
    <div className="flex-1 w-1/3 h-full flex flex-col justify-center items-center">
        {/* <PastMatches /> */}
    </div>
</div>

<div className="flex mt-20">
    {/* <NewsGrid /> */}
</div>
        </div>
        

    );
};


export default LandingPage;
