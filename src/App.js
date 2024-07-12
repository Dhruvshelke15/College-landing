import './App.css';
import AboutPace from './Components/AboutPace';
import AboutUhs from './Components/AboutUhs';
import Address from './Components/Address';
import Carousel from './Components/carousal';
import SchoolTab from './Components/schoolTab';
import Footer from './Components/Footer';
import Header from './Components/Header';
import image1 from './Components/Resources/image1.jpeg';
import image2 from './Components/Resources/image2.jpeg';
import image3 from  './Components/Resources/image3.jpeg';
import image4 from './Components/Resources/image4.jpeg';
import image5 from './Components/Resources/image5.jpeg';
import image6 from './Components/Resources/image6.jpeg'
import image7 from './Components/Resources/image4.jpeg';
import image8 from './Components/Resources/image5.jpeg';
import image9 from './Components/Resources/image6.jpeg'
import IconLine from './Components/IconLine';


function App() {

  const items = [
    { image: image1,  },
    { image: image2,  },
    { image: image3,  },
    { image: image4,  },
    { image: image5,  },
    { image: image6,  },
    { image: image7,  },
    { image: image8,  },
    { image: image9,  },

    // Add more items as needed
  ];

  return (
    <div className="app">
        <Header />
        <IconLine /> 
        <AboutUhs/> 
        <AboutPace/>
        <SchoolTab />
        <Carousel items={items}/>
        <Address/>
        <Footer/>
    </div>
);
}

export default App;
