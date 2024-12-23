import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllFutureMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFutureMatches = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://api.cricapi.com/v1/cricScore?apikey=b0fca199-7a3d-4509-bd34-52b5cbbe0bcd'
        );
        setMatches(response.data.data.slice(0, 10));
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

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto mt-8">

      <h2 className="text-2xl font-semibold text-center mb-4 text-blue-700">All Upcoming Matches</h2>
      <div className="space-y-4">
        {matches.map((match) => (
          <div key={match.id} className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">{match.t1} vs {match.t2}</h3>
            <p><strong>Series:</strong> {match.series}</p>
            <p><strong>Type:</strong> {match.matchType}</p>
            <p><strong>Date:</strong> {new Date(match.dateTimeGMT).toLocaleString()}</p>
            <p><strong>Status:</strong> {match.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFutureMatches;
