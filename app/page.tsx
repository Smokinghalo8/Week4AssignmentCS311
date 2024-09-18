import React from 'react';
import Gallery from './Gallery';

import image1 from "./pictures/chillaxed.jpg"
import image2 from "./pictures/lambdaChiAlpha.jpg"
import image3 from "./pictures/pied.jpg"
//For some reason I cant make a list of images and use that, I need to figure out why


//npm run dev


export default function Home() {

  const images = [
    image1,image2,image3
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        pictures
      </main>
      <Gallery images={images}/>
      
    </div>
  );
}
