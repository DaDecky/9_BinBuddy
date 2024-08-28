"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

const ReviewPage: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [reviews, setReviews] = useState<string[]>([]);
  const [newReview, setNewReview] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const reviewsPerPage = currentPage === 1 ? 2 : 5;

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  const handleReviewSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (newReview.trim()) {
      setReviews([newReview, ...reviews]);
      setNewReview("");
    }
  };

  const handleReviewChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewReview(event.target.value);
  };

  const totalPages = Math.ceil((reviews.length + 2) / reviewsPerPage);

  let currentReviews: string[] = [];

  if (currentPage === 1) {
    currentReviews = reviews.slice(0, 2);
  } else {
    currentReviews = reviews.slice(
      (currentPage - 2) * reviewsPerPage + 2,
      (currentPage - 1) * reviewsPerPage + 2
    );
  }

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
    <div className="bg-green-300 p-4 rounded-lg min-h-screen" style={{ backgroundColor: '#E7F0DC' }}>
      <div className="text-center">
        <h1 className="text-xl font-bold text-green-700 font-inter">Reviews</h1>
        <p className="text-sm text-green-700 font-inter">
          Hear what they have to say about our waste disposal and recycling solution!
        </p>

        {currentPage === 1 && (
          <div className="mt-4">
            <div className="bg-white p-2 rounded shadow mb-2 text-black-700 font-inter ">Amazing Apps </div>
            <div className="bg-white p-2 rounded shadow mb-2 text-black-700 font-inter">Bantu banget 🥺</div>
            <div className="bg-white p-2 rounded shadow mb-2 text-black-700 font-inter">Sangat membantu 👍</div>
          </div>
        )}

        {currentReviews.length > 0 && (
          <div className="mt-2">
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

        {showMore && (
          <div className="mt-4">
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm text-black-700 font-inter text-center">
          Make a review
        </p>
        <form onSubmit={handleReviewSubmit} className="mt-2 text-black">
          <input
            type="text"
            placeholder="Write your review"
            className="w-full border rounded p-2"
            value={newReview}
            onChange={handleReviewChange}
          />
        </form>
      </div>

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
