import React, { useEffect, useState } from "react";

const LiveScore = () => {
  const [latestMatch, setLatestMatch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestMatch = async () => {
      try {
        const response = await fetch(
          "https://api.cricapi.com/v1/currentMatches?apikey=b0fca199-7a3d-4509-bd34-52b5cbbe0bcd&offset=0"
        );
        const data = await response.json();

        if (data && data.data && data.data.length > 0) {
          setLatestMatch(data.data[0]); // Take the first match as the latest
        } else {
          console.log("No live matches available.");
          setLatestMatch(null);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching live match data:", error);
        setLoading(false);
      }
    };

    // Fetch initial match
    fetchLatestMatch();

    // Poll the API every 30 seconds for live updates
    const intervalId = setInterval(fetchLatestMatch, 30000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 mx-auto mb-6">
      <p className="mt-2 text-xl font-bold text-blue-700">Live Score</p>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : latestMatch ? (
        <div className="text-center">
          <p className="font-semibold text-lg">{latestMatch.name}</p>
          <div className="mt-4">
            {latestMatch.score && latestMatch.score.length > 0 ? (
              latestMatch.score.map((inning, index) => (
                <div key={index} className="mb-2">
                  <p className="font-semibold">{inning.inning}</p>
                  <p>
                    {inning.r}/{inning.w} ({inning.o} overs)
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No score available</p>
            )}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No live match data available</p>
      )}
    </div>
  );
};

export default LiveScore;
