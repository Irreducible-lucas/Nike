import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel';
import './index.css'; // You can include global styles in this CSS file

const images = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
  // Add more image URLs as needed
];

ReactDOM.render(
  <React.StrictMode>
    <Carousel images={images} />
  </React.StrictMode>,
  document.getElementById('root')
);
