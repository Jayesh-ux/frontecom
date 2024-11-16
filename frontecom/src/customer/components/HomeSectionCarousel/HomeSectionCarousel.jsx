import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material'; 
import { KeyboardArrowLeft } from '@mui/icons-material';


const HomeSectionCarousel = ({data , sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = React.useRef(null);

    const responsive = {
        0: { items: 2 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => {
        const newIndex = Math.max(activeIndex - 1, 0);
        setActiveIndex(newIndex);
        carouselRef.current?.slideTo(newIndex);
    };

    const slideNext = () => {
        const newIndex = Math.min(activeIndex + 1, data.length - 1);
        setActiveIndex(newIndex);
        carouselRef.current?.slideTo(newIndex);
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

    return (
        <div className="border">
            <h2 className='text-2xl, font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className="relative p-5 mx-4">
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    disableButtonsControls
                    disableDotsControls
                    responsive={responsive}
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                {/* Previous Button - Only shows if activeIndex > 0 */}
                {activeIndex > 0 && (
                    <Button 
                        variant="contained"
                        className="z-50"
                        onClick={slidePrev} 
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: 0,
                            transform: 'translateX(-30%)',
                            bgcolor: 'white',
                            minWidth: '40px',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            '&:hover': {
                                bgcolor: 'white',
                            },
                            boxShadow: 2,
                            zIndex: 50
                        }}
                        aria-label="previous"
                    >
                        <KeyboardArrowLeft sx={{ color: 'black' }} />
                    </Button>
                )}

                {/* Next Button - Only shows if activeIndex < items.length - number of visible items */}
                {activeIndex < items.length - responsive[1024].items && (
                    <Button 
                        variant="contained"
                        className="z-50" 
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            right: 0,
                            transform: 'translateX(30%) rotate(180deg)',
                            bgcolor: 'white',
                            minWidth: '40px',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            '&:hover': {
                                bgcolor: 'white',
                            },
                            boxShadow: 2,
                            zIndex: 50
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeft sx={{ color: 'black' }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
