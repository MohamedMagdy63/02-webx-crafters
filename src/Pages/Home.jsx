
import AnalysisBox from '../Components/AnalysisBox';
import Demos from '../Components/Demos';
import OurClients from '../Components/OurClients';
import InnerPages from '../Components/InnerPages';
import MainSlide from '../Components/MainSlide';
import Navbar from '../Components/Navbar';
import SlideShow from '../Components/SlideShow';
import { useEffect } from 'react';
import Footer from '../Components/Footer';
import serviceData from '../Data/Services';


function Home() {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div className="App">
      <Navbar/>
      <MainSlide/>
      <SlideShow/>
      <AnalysisBox/>
      <Demos/>
      <InnerPages/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.map((service, index) => (
            <div className="relative bg-white overflow-hidden rounded-lg shadow-lg m-10 border border-gray-300 transform hover:scale-105 transition duration-300">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent opacity-50"></div>
                <img src={service.image} alt={service.title} className="w-full h-56 object-cover object-center rounded-t-lg" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <h2 className="text-3xl font-bold text-white text-center">{service.title}</h2>
                </div>
            </div>
            <div className="p-6 relative z-10 bg-white rounded-b-lg">
                <p className="text-gray-800 leading-relaxed mb-4">{service.description}</p>
                <p className="text-gray-500 leading-relaxed mb-4">{service.details}</p>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-green-600 font-bold text-lg">{service.price}</span>
                        <span className="text-gray-500 ml-2">{service.frequency}</span>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-gray-600">Contact us for more information</p>
                    <p className="text-sm text-gray-600">Phone: 01117125043</p>
                    <p className="text-sm text-gray-600">Email: webxcrafters@gmail.com</p>
                </div>
            </div>
        </div>
        ))}
      </div>
      <OurClients/>
      <Footer/>
    </div>
  );
}

export default Home;