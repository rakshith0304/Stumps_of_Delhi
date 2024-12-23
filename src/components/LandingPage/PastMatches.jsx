import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PastMatches = () => {
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(
          'https://api.cricapi.com/v1/currentMatches?apikey=b0fca199-7a3d-4509-bd34-52b5cbbe0bcd'
        );
        const pastMatches = response.data.data.filter(match => match.matchEnded);
        setMatches(pastMatches);
      } catch (error) {
        console.error("Error fetching match data:", error);
      }
    };
    fetchMatches();
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4 text-blue-700">Past Matches</h2>
      <div className="space-y-4">
        {matches.slice(0, 2).map(match => (
          <div key={match.id} className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">{match.name}</h3>
            <p><strong>Type:</strong> {match.matchType.toUpperCase()}</p>
            <p><strong>Date:</strong> {new Date(match.date).toLocaleDateString()}</p>
            <p><strong>Venue:</strong> {match.venue}</p>
            <p><strong>Status:</strong> {match.status}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/all-past-matches')} className="w-full mt-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
        More
      </button>
    </div>
  );
};

export default PastMatches;
