import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { mainCarouselData } from './HomeCarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../components/HomeCarousel/MainCarousel.css'; // Import the CSS file for additional styling

const MainCarousel = () => {
    const items = mainCarouselData.map((item) => (
        <div className="carousel-image-container">
            <img className="carousel-image cursor-pointer" src={item.image} alt="" />
        </div>
    ));

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
    );
};

export default MainCarousel;
