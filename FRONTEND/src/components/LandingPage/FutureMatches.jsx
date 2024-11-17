import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Correctly import useNavigate
import axios from 'axios';

const FutureMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();  // Initialize navigate

  useEffect(() => {
    const fetchFutureMatches = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://api.cricapi.com/v1/cricScore?apikey=b0fca199-7a3d-4509-bd34-52b5cbbe0bcd'
        );
        setMatches(response.data.data);
      } catch (error) {
        setError("Unable to fetch match data.");
      } finally {
        setLoading(false);
      }
    };
    fetchFutureMatches();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading upcoming matches...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const initialMatches = matches.slice(0, 2);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4 text-blue-700">Upcoming Matches</h2>
      <div className="space-y-4">
        {initialMatches.map((match) => (
          <div key={match.id} className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">{match.t1} vs {match.t2}</h3>
            <p><strong>Series:</strong> {match.series}</p>
            <p><strong>Type:</strong> {match.matchType}</p>
            <p><strong>Date:</strong> {new Date(match.dateTimeGMT).toLocaleString()}</p>
            <p><strong>Status:</strong> {match.status}</p>
          </div>
        ))}
      </div>
      <button 
        onClick={() => navigate('/all-future-matches')} 
        className="w-full mt-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        More
      </button>
    </div>
  );
};

export default FutureMatches;
