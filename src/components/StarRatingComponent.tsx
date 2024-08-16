import React from 'react';

type StarRatingProps = {
    rating: number;
    maxRating?: number
}

const StarRatingComponent: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
    const stars = []
    const filledStars = Math.round(rating / 2)
    for (let i = 1; i <= maxRating; i++) {
        if (i <= filledStars) {
            stars.push(<span key={i} style={{ color: '#FFD700' }}>★</span>)
        } else {
            stars.push(<span key={i} style={{ color: '#C0C0C0' }}>☆</span>)
        }
    }
    return <div>{stars}</div>
}

export default StarRatingComponent