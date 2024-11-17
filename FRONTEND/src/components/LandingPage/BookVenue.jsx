// BookVenue.jsx
import React from 'react';
import nets from '../../assets/nets.jpg'


function BookVenue() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs mx-auto">
            {/* PNG Image */}
            <img src={nets}  alt="Venue" className="w-full h-40 object-cover mb-4 rounded" />
            {/* Book Button */}
            <a
                href="https://playo.co/venues/delhi/sports/cricket"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Book a Box
            </a>
        </div>
    );
}

export default BookVenue;
