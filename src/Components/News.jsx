import React, { useState } from 'react'
import list from '/public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const filterdata = list.filter((item) => item.id % 2 === 0)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 3000
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000
        }
      }
    ]
  };

  const handleNewsClick = (item) => {
    setSelectedNews(item);
  };

  const handleClose = () => {
    setSelectedNews(null);
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='text-2xl font-semibold pb-2'>Latest Campus Updates</h1>
          <p className='text-gray-500 mb-10'>Stay informed with the most recent news and events from around Thapar University. From academic achievements to cultural celebrations, technical innovations to society activities - get comprehensive coverage of everything happening on campus. Our dedicated team works to bring you timely updates that matter to the Thapar community.</p>
        </div>
      
        <div>
          <Slider {...settings} autoplay={!selectedNews} autoplaySpeed={3000}>
            {filterdata.map((item) => (
              <Cards key={item.id} item={item} onReadMore={() => handleNewsClick(item)}/>
            ))}
          </Slider>
        </div>

        {selectedNews && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-base-100 dark:bg-base-100 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">{selectedNews.title}</h2>
                  <button 
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <img 
                  src={selectedNews.image} 
                  alt={selectedNews.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 dark:text-gray-300">{selectedNews.detailedDescription}</p>
                <div className="mt-4 text-gray-500">
                  <p>Author: {selectedNews.publisher}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default News
