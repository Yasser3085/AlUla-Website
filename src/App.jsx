
import { ChakraProvider , Box, Text} from '@chakra-ui/react'
import Nav from './comp/nav'  
import Footer from './comp/footer'

import Slideshow from './comp/slideshow';
import './App.css'






function App() {


  
 const slides = [
  {
    image: '/public/images/img2.jpg',
    title: 'Discover Alula',
    description: 'Saudi Arabia'

  }, {image: '/public/images/hapitas.png',
  title: 'Hapitas Alula',
  description: 'Habitas Resort is located in Al Duwayan among the rock formations , The resort opened in 2021 '} ,
  {
    image: '/public/images/oasis.png',
    title: 'AlUla Oasis',
    description: 'Despite all the magnificent effects, rock formations, and advanced facilities that AlUla encompasses, it is a new global tourist destination waiting to be discovered now. ',
  },
  {image: '/public/images/dreamValey.png',
  title: 'AlUla Oasis',
  description: 'Despite all the magnificent effects, rock formations, and advanced facilities that AlUla encompasses, it is a new global tourist destination waiting to be discovered now. ',
},
{image: '/public/images/oldtwon.png',
title: 'Old Town',
description: 'The Old Town is an archaeological site near Al-Ula ',
},
{image: '/public/images/maraya.png',
title: 'Maraya',
description: ' Maraya, rises from the sand like a mirage. Designed to blend into the surrounding landscape , Largest mirrored building in the world. ',
},
  
 
];

  return (
    <>
    <ChakraProvider>
      <Nav></Nav>
       <Box className='Page'  textColor={'white'} fontSize={'20px'} textAlign={'center'} display={'Flex'} justifyContent={'center'} alignItems={'center'} >
      

       <div>
      
        <Slideshow slides={slides} />
       </div>
      
    
   
      
      </Box>
      
      
      
      
      
      <Footer></Footer>
       </ChakraProvider>
     
    </>
  )
}

export default App




