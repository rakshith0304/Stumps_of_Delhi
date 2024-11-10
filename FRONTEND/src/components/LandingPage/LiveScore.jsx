import React, { useEffect, useState } from "react";

const LiveScore = () => {
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLiveMatch = async () => {
      try {
        const response = await fetch(
          "https://cricapi.com/api/matches?apikey=your-api-key"
        );
        const data = await response.json();

        if (data.matches && data.matches.length > 0) {
          const ongoingMatch = data.matches.find(
            (match) => match.status === "LIVE"
          );

          if (ongoingMatch) {
            setMatchData(ongoingMatch);
          } else {
            console.log("No live matches found.");
          }
          setLoading(false);
        } else {
          console.log("No live matches available.");
        }
      } catch (error) {
        console.error("Error fetching live match data:", error);
        setLoading(false);
      }
    };

    // Fetch initial match
    fetchLiveMatch();

    // Poll the API every 30 seconds for live updates
    const intervalId = setInterval(fetchLiveMatch, 30000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full sm:w-72 mx-auto">
      <p className="mt-2 text-lg font-bold">Live Score</p>
      {loading ? (
        <p>Loading...</p>
      ) : matchData ? (
        <div className="text-center">
          <p className="font-semibold">{matchData.name}</p>
          <p>{matchData.status}</p>
          <div className="flex justify-center space-x-4">
            {matchData.score && matchData.score.map((inning, index) => (
              <div key={index}>
                <p>{inning.inning}</p>
                <p>{inning.r}/{inning.w} in {inning.o} overs</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No live match data available</p>
      )}
    </div>
  );
};

export default LiveScore;
