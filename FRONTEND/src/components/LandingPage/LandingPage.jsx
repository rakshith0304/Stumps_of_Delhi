import React from "react";
import LiveScore from "./LiveScore";
import NewsGrid from "./NewsGrid";
import BookVenue from "./BookVenue";
import WeatherWidget from "./WeatherWidget";
import FutureMatches from "./FutureMatches";
import PastMatches from "./PastMatches";

const LandingPage = () => {
    return (
        <div>
            <div className="flex h-screen">
                {/* Left Section - 1/3 width */}
                <div className="flex-1 w-1/3 grid grid-cols-1 md:grid-cols-1 gap-6 mb-15 mt-12 h-full">
                    <div className="flex-1">
                        <LiveScore />
                    </div>
                    <div className="flex-1">
                        <WeatherWidget />
                    </div>
                    <div className="flex-1">
                        <BookVenue />
                    </div>
                </div>

                {/* Right Section - 2/3 width, height equal to PastMatches */}
                <div className="flex-1 w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 mt-12 h-full">
                    <div className="flex-1">
                        <FutureMatches />
                    </div>
                    <div className="flex-1 h-full">
                        <PastMatches />
                    </div>
                </div>
            </div>

            {/* NewsGrid */}
            <div>
                <NewsGrid />
            </div>
        </div>
    );
};


export default LandingPage;
