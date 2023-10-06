import React, { useState } from "react";

const Rating: React.FC = () => {
  const [userRating, setUserRating] = useState<number | null>(null);

  const handleStarClick = (rating: number) => {
    setUserRating(rating);
  };

  return (
    <div className="text-center">
      <p className="text-lg font-bold mb-2">Avalie este item:</p>
      <div className="flex justify-center">
        {[1, 2, 3, 4, 5].map((rating) => (
          <span
            key={rating}
            className={`text-3xl cursor-pointer ${
              userRating && rating <= userRating
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
            onClick={() => handleStarClick(rating)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p className="text-lg mt-2">
        Sua avaliação:{" "}
        {userRating ? `${userRating} estrelas` : "Nenhuma avaliação"}
      </p>
    </div>
  );
};

export default Rating;
