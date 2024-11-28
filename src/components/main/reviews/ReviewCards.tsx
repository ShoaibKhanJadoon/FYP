import React from "react";
import "./ReviewCard.css"; // Import the CSS file for styling

const ReviewCards = () => {
  return (
    <div>
    <h2>User Reviews!</h2>
    <div className="container">
      <div className="review-grid">
        {reviewsData.map((user, index) => (
          <div key={index} className="review-card">
            <div className="card-header">
              <img
                src={user.image}
                alt={`${user.name}`}
                className="user-image"
              />
            </div>
            <div className="card-body">
              <p className="user-name">{user.name}</p>
              <p className="user-review">{user.review}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

const reviewsData = [
  {
    name: "John Smith",
    image:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=CYtNAx70jQEi71qyzo6Cw1boTW3bpLcwQfXZmy5IxW4=",
    review: "Excellent service! Highly recommend.",
  },
  {
    name: "Alice Johnson",
    image:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=CYtNAx70jQEi71qyzo6Cw1boTW3bpLcwQfXZmy5IxW4=",
    review: "Very satisfied with the quick response.",
  },
  {
    name: "Robert Brown",
    image:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=CYtNAx70jQEi71qyzo6Cw1boTW3bpLcwQfXZmy5IxW4=",
    review: "Good experience overall, but there's room for improvement.",
  },
  {
    name: "Emily Davis",
    image:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=CYtNAx70jQEi71qyzo6Cw1boTW3bpLcwQfXZmy5IxW4=",
    review: "Amazing support and friendly staff!",
  },
  {
    name: "Michael Wilson",
    image:
      "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=CYtNAx70jQEi71qyzo6Cw1boTW3bpLcwQfXZmy5IxW4=",
    review: "The service exceeded my expectations.",
  },
];

export default ReviewCards;
