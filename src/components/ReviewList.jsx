import React from "react";
import ReviewItem from "./ReviewItem";

const ReviewList = ({ reviews }) => {
    return (
        <div className="grid grid-cols-2">
            {reviews?.map((review, index) => (
                <ReviewItem key={index} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;
