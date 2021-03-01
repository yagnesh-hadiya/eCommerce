import { Rating } from 'react-native-ratings';
import React from 'react';

const StarRating = () => {
    return (
        <Rating
            type='star'
            ratingCount={5}
            imageSize={45}
            style={{ paddingVertical: 10 }}
        />
    )
}
export default StarRating;