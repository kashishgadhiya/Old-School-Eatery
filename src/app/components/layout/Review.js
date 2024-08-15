
"use client";
import { useState, useEffect } from 'react';
import { ReviewData as reviews } from "../libs/Reviewdata";

const Review = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };


    handleResize();

    
    window.addEventListener('resize', handleResize);

   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const initialReviewCount = 2;
  const displayedReviews = showAll || !isMobile ? reviews : reviews.slice(0, initialReviewCount);

  return (
    <section className="my-10">
      <div className="text-center">
        <h3 className="uppercase text-gray-400 font-semibold">Guest Highlights</h3>
        <h2 className="font-bold text-4xl">Reviews</h2>
      </div>

      <div className="text-white py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedReviews.map((review, index) => (
            <div
              key={index}
              className="bg-yellow-700 p-4 rounded-lg shadow-md flex flex-col justify-between hover:bg-yellow-600 cursor-pointer"
            >
              <h3 className="text-lg font-bold">{review.name}</h3>
              <p className="text-sm mb-2">{review.review}</p>
              <div className="flex items-center">
                <span className="text-lg font-bold mr-2">{review.rating}</span>
                <div className="flex text-yellow-300">
                  {Array(Math.floor(review.rating))
                    .fill()
                    .map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.112 3.429a1 1 0 00.95.69h3.631c.969 0 1.372 1.24.588 1.81l-2.946 2.135a1 1 0 00-.364 1.118l1.112 3.429c.3.921-.755 1.688-1.54 1.118L10 13.617l-2.946 2.135c-.784.57-1.839-.197-1.539-1.118l1.112-3.429a1 1 0 00-.364-1.118L3.317 8.856c-.784-.57-.38-1.81.588-1.81h3.63a1 1 0 00.95-.69l1.112-3.429z" />
                      </svg>
                    ))}
                  {review.rating % 1 !== 0 && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.112 3.429a1 1 0 00.95.69h3.631c.969 0 1.372 1.24.588 1.81l-2.946 2.135a1 1 0 00-.364 1.118l1.112 3.429c.3.921-.755 1.688-1.54 1.118L10 13.617l-2.946 2.135c-.784.57-1.839-.197-1.539-1.118l1.112-3.429a1 1 0 00-.364-1.118L3.317 8.856c-.784-.57-.38-1.81.588-1.81h3.63a1 1 0 00.95-.69l1.112-3.429z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {isMobile && !showAll && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(true)}
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Review;
