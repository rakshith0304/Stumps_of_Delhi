import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllPastMatches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(
          'https://api.cricapi.com/v1/currentMatches?apikey=b0fca199-7a3d-4509-bd34-52b5cbbe0bcd'
        );
        const pastMatches = response.data.data.filter(match => match.matchEnded);
        setMatches(pastMatches.slice(0, 10));
      } catch (error) {
        console.error("Error fetching match data:", error);
      }
    };
    fetchMatches();
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto mt-8">

      <h2 className="text-2xl font-semibold text-center mb-4 text-blue-700">All Past Matches</h2>
      <div className="space-y-4">
        {matches.map(match => (
          <div key={match.id} className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">{match.name}</h3>
            <p><strong>Type:</strong> {match.matchType.toUpperCase()}</p>
            <p><strong>Date:</strong> {new Date(match.date).toLocaleDateString()}</p>
            <p><strong>Venue:</strong> {match.venue}</p>
            <p><strong>Status:</strong> {match.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPastMatches;
