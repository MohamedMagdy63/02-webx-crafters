import React, { useState, useEffect, useRef } from 'react';
import slide from '../Videos/SlideShow/Astronout.mp4';

const captionsEnglish = [
  { text: 'We offer customized solutions to every customer' },
  { text: 'Imagination and creativity blended perfectly' },
  { text: 'Our designs are simple and original' }
];
const captionsArabic = [
  { text: 'نقدم ابتكارات مناسبة الي كل عميل ' },
  { text: 'التخيل والأبداع يقدم في احسن صوره' },
  { text: 'تصميمنا بسيط و مميز' }
];
const SlideShow = ({ language }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showCaptionAnimation, setShowCaptionAnimation] = useState(false);
  const videoRef = useRef(null);
  const captionContainerRef = useRef(null);

  useEffect(() => {
    const scrollHandler = () => {
      if (isElementInViewport(captionContainerRef.current)) {
        setShowCaptionAnimation(true);
      } else {
        setShowCaptionAnimation(false);
      }
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % captionsEnglish.length);
    }, 6000); // 6 seconds interval
    return () => clearInterval(intervalId);
  }, []);
  const handleVideoEnd = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };
  const handleCanPlayThrough = () => {
    videoRef.current.play();
  };

  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  return (
    <div className="slideshow-container">
      <video
        ref={videoRef}
        className='slideshow-video'
        src={slide}
        alt={`Video animated`}
        muted
        onEnded={handleVideoEnd}
        onCanPlayThrough={handleCanPlayThrough}
        loop
      />
      <div className='absolute top-0 left-0 bg-black w-full h-full opacity-25'></div>
      <div
        ref={captionContainerRef}
        className={`caption-container `}
      >
        {
          showCaptionAnimation ? 
            <h2 className={`caption ${language === 'En' ? 'english' : 'arabic'}`}>
              {language === 'En' ? captionsEnglish[currentVideoIndex].text : captionsArabic[currentVideoIndex].text}
            </h2>
          : 
          ''
        }
      </div>
    </div>
  );
};

export default SlideShow;
