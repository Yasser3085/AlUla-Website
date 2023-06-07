import React, { useState, useEffect } from 'react';
import { Box, Image, IconButton ,Text  } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Slideshow = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);



  const goToPreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const currentSlide = slides[currentSlideIndex];

  return (
   <Box w={'100%'} h={'70%'}>
    <Box position="relative" width="100%" height="100%">
      <Image src={currentSlide.image} objectFit="cover" width="100%" height="100%" />
      <Box position="absolute" top="30%" left="50%" transform="translate(-50%, -50%)">
          <Text className='Text' textShadow={'0.1px 0.1px 100px  #252525'} fontSize={{base:'20px',md:'50px',lg:'80px',xl:'125px'}}>{currentSlide.title}</Text>
          <p className='p1'>{currentSlide.description}</p>
        </Box>
      <IconButton
        icon={<ChevronLeftIcon />}
        size="lg"
        marginLeft={'10%'}
        position="absolute"
        top="50%"
        left="2"
        transform="translateY(-50%)"
        onClick={goToPreviousSlide}
        zIndex={'100'}
       
      />
      <IconButton
        icon={<ChevronRightIcon />}
        size="lg"
        marginRight={'10%'}
        position="absolute"
        top="50%"
        right="2"
        transform="translateY(-50%)"
        onClick={goToNextSlide}
       
      />
    </Box>
  </Box>

  );
};

export default Slideshow;
