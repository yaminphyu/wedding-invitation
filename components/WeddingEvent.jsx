import React, { useEffect } from 'react';
import Image from 'next/image';
import { FaRegCalendarAlt } from "react-icons/fa";
import { WiTime8 } from "react-icons/wi";
import { RiMapPinLine } from "react-icons/ri";
import styles from '@/styles/WeddingEvent.module.css';
import { eventImages } from '@/config'

export default function WeddingEvent({ customFont }) {
  const destination = "RHIGA Royal Hotel, Tokyo";
  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;

  const [isIos, setIsIos] = React.useState(false);

  const getMobileOperatingSystem = () => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPhone/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }
  };

  useEffect(() => {
    if (getMobileOperatingSystem() === "iOS") {
      setIsIos(true);
    }
  }, []);
  
  return (
    <section className={styles.wrapper} id='wedding-events'>
      <div className={styles.container}>
        <h1 className={`${styles.title} ${customFont.className}`}>Time & Place</h1>
        <div className={`w-full h-[60vh] py-10 box-border ${isIos ? 'mt-[95vh]' : ""}`}>
          <div className='w-full h-full flex flex-col md:flex-row justify-evenly items-start p-3 mb-20 md:mb-0  box-border'>
            <div className='box-border mb-8 md:mb-0'>
              <div className='overflow-hidden'>
                <Image
                  src={eventImages[0].name}
                  alt='event image'
                  width={400}
                  height={400}
                  className='w-[400px] h-full hover:animate-pulse-once max-w-full max-h-full'
                />
              </div>
              <div className='w-full h-[70px] bg-primary flex justify-center items-center'>
                <h1 className={`text-xl text-hoverColor font-semibold ${customFont.className}`}>Wedding Ceremony</h1>
              </div>
              <div className='w-full flex flex-col justify-center items-center gap-2 mt-8 box-border'>
                <div className='flex justify-center items-center gap-3'>
                  <FaRegCalendarAlt className='text-hoverColor text-lg' />
                  <p className={`font-semibold text-gray-700 ${customFont.className}`}>{process.env.WEDDIND_DATE}</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                  <WiTime8 className='text-hoverColor text-lg' />
                  <p className={`font-semibold text-gray-700 ${customFont.className}`}>{process.env.WEDDIND_TIME}</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                  <RiMapPinLine className='text-hoverColor text-lg' />
                  <p className={`font-semibold text-gray-700 ${customFont.className}`}>{process.env.WEDDING_ADDRESS}</p>
                </div>
              </div>
            </div>
            <div className='box-border'>
              <div className='overflow-hidden'>
                <Image
                    src={`${eventImages[1].name}`}
                    alt='event image'
                    width={400}
                    height={400}
                    className='w-[433px] hover:animate-pulse-once max-w-full max-h-full h-[290px]'
                />
              </div>
              <div className='w-full h-[70px] bg-primary flex justify-center items-center'>
                <h1 className={`text-xl text-hoverColor font-semibold ${customFont.className}`}>Map</h1>
              </div>
              <div className='w-full flex flex-col justify-center items-center gap-2 mt-8 box-border'>
                <div className='w-[40vw] md:w-[15vw] xl:w-[8vw] my-1'>
                  <button 
                    className={`w-full h-[50px] font-semibold border-2 border-primary hover:border-hoverColor text-hoverColor bg-primary hover:text-white hover:bg-hoverColor ${customFont.className}`}
                    onClick={() => window.open(googleMapsLink, '_blank')}  
                  >Get Direction</button>
                </div>
              </div>
            </div>
            <div className='box-border my-8 md:hidden block'>
              <div className='overflow-hidden'>
                <Image
                    src={`${eventImages[2].name}`}
                    alt='event image'
                    width={400}
                    height={400}
                    className='w-[450px] hover:animate-pulse-once max-w-full max-h-full h-[290px]'
                />
              </div>
              <div className='w-full flex flex-col justify-center items-center mt-5 box-border'>
                <p className={`font-semibold text-[12px] text-gray-700 text-center ${customFont.className}`}>You can take free bus JR Takadanobaba Station to hotel.</p>
                <p className={`font-semibold text-[13px] text-gray-700 text-center ${customFont.className}`}>8:00~21:00 (At 10 and 40 minutes past each hour.)</p>
                <p className={`font-semibold text-[13px] text-gray-700 text-center ${customFont.className}`}>Notes : About 10 minutes travel time.</p>
                <p className={`font-semibold text-[13px] text-gray-700 text-center ${customFont.className}`}>Capacity is 22 passengers.</p>
              </div>
            </div>
            <div className='box-border mb-8 md:hidden block flex flex-col justify-center items-center w-full'>
              <h1 className={`text-xl text-gray-700 font-semibold my-5 ${customFont.className}`}>&#34;&nbsp;Will you attend our wedding?&nbsp;&#34;</h1>
              <button 
                className='text-hoverColor bg-primary hover:text-white hover:bg-hoverColor text-normal font-bold rounded-md w-[260px] text-center my-3 py-3 px-5'
                onClick={() => window.open(process.env.WEDDING_URL, '_blank')}
              >WILL ATTEND (出席)</button>
              <button className='text-hoverColor bg-primary hover:text-white hover:bg-hoverColor text-normal font-bold rounded-md w-[260px] text-center my-3 py-3 px-5'>WILL NOT ATTEND (欠席)</button>
            </div>
          </div>
        </div>
        <div className='w-full h-[60vh] py-10 box-border md:block hidden'>
          <div className='w-full h-full flex flex-col md:flex-row justify-evenly items-start p-3 mb-20 md:mb-0  box-border'>
            <div className='box-border mb-8 md:mb-0 w-[400px] h-[400px] flex flex-col justify-center items-center'>
              <h1 className={`text-xl text-gray-700 font-semibold my-5 ${customFont.className}`}>&#34;&nbsp;Will you attend our wedding?&nbsp;&#34;</h1>
              <button 
                className='text-hoverColor bg-primary hover:text-white hover:bg-hoverColor text-lg font-bold rounded-md w-[270px] text-center my-5 py-3 px-5'
                onClick={() => window.open(process.env.WEDDING_URL, '_blank')}
              >WILL ATTEND (出席)</button>
              <button className='text-hoverColor bg-primary hover:text-white hover:bg-hoverColor text-lg font-bold rounded-md w-[270px] text-center my-5 py-3 px-5'>WILL NOT ATTEND (欠席)</button>
            </div>
            <div className='box-border'>
              <div className='overflow-hidden'>
                <Image
                    src={`${eventImages[2].name}`}
                    alt='event image'
                    width={400}
                    height={400}
                    className='w-[450px] hover:animate-pulse-once max-w-full max-h-full h-[290px]'
                />
              </div>
              <div className='w-full flex flex-col justify-center items-center mt-5 box-border'>
                <p className={`font-semibold text-sm text-gray-700 ${customFont.className}`}>You can take free Bus JR Takadanobaba Station to hotel.</p>
                <p className={`font-semibold text-sm text-gray-700 ${customFont.className}`}>8:00~21:00 (At 10 and 40 minutes past each hour.)</p>
                <p className={`font-semibold text-sm text-gray-700 ${customFont.className}`}>Notes : About 10 minutes travel time.</p>
                <p className={`font-semibold text-sm text-gray-700 ${customFont.className}`}>Capacity is 22 passengers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
