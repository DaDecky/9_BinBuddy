"use client";
import React, { useState } from 'react';

const ReviewPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const reviewsPerPage = 5;

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    if (newReview.trim()) {
      setReviews([newReview, ...reviews]);
      setNewReview("");
    }
  };

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const currentReviews = reviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-green-300 p-4 rounded-lg" style={{ backgroundColor: '#E7F0DC' }}>
      <div className="text-center">
        <h1 className="text-xl font-bold text-green-700 font-inter">Reviews</h1>
        <p className="text-sm text-green-700 font-inter">
          Hear what they have to say about our waste disposal and recycling solution!
        </p>

        {currentReviews.length > 0 && (
          <div className="mt-4">
            {currentReviews.map((review, index) => (
              <div 
                key={index} 
                className="bg-white p-2 rounded shadow mb-2 text-black-700 font-inter"
              >
                {review}
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center items-center mt-4">
          <button
            className="underline text-green-500 flex items-center"
            onClick={handleMoreClick}
          >
            <span className="text-center">More</span>
            <span className="ml-1">→</span>
          </button>
        </div>

        {showMore && (
          <div className="mt-4">
            {/* Additional content when "More" is clicked */}
            {/* Replace with your desired content */}
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm text-black-700 font-inter text-center">
          Make a review
        </p>
        <form onSubmit={handleReviewSubmit} className="mt-2">
          <input
            type="text"
            placeholder="Write your review"
            className="w-full border rounded p-2"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
        </form>
      </div>

      {/* Move Pagination Controls Here */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4 space-x-4">
          <button 
            onClick={goToPreviousPage} 
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-green-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Previous
          </button>
          <button 
            onClick={goToNextPage} 
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-green-500 text-white rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
