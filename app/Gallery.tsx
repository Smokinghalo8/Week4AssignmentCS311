'use client';

import React, {useState} from 'react';

interface GalleryProps {
    images: string[];
}

//Need help understanding what this chunk of code does

const Gallery: React.FC<GalleryProps> = ({images}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const handleNext = () =>{
        setCurrentImageIndex((prevIndex)=>
            prevIndex === images.length -1?0 : prevIndex+1
        );
    };

    const handlePrevious = () =>{
        setCurrentImageIndex((prevIndex)=>
            prevIndex === 0 ? images.length - 1 :prevIndex-1
        );
    };


    return (
        <div>
            <img
            src = {images[currentImageIndex]}
            alt = {'Image {currentImageIndex}'}
            style={{ width: '300px', height: 'auto', display: 'block', margin: '0 auto' }}
            />
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                {/* "Prev Button" */}
                <button onClick={handlePrevious}>Previous </button>
                {/* "Next Button" */}
                <button onClick={handleNext}> Next</button>
            </div>
        </div>
    );
};

export default Gallery;