import React from 'react';
import Image from 'next/image';
import { FaRegCalendarAlt } from "react-icons/fa";
import { WiTime8 } from "react-icons/wi";
import { RiMapPinLine } from "react-icons/ri";
import styles from '@/styles/WeddingEvent.module.css';
import { eventImages } from '@/config'

export default function WeddingEvent({ customFont }) {
  const destination = "RHIGA Royal Hotel, Tokyo";
  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
  
  return (
    <section className={styles.wrapper} id='wedding-events'>
      <div className={styles.container}>
        <h1 className={`${styles.title} ${customFont.className}`}>Time & Place</h1>
        <div className='w-full h-[60vh] py-10 box-border'>
          <div className='w-full h-full flex justify-evenly items-start p-3 box-border'>
            <div className='box-border'>
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
                <h1 className={`text-xl text-white ${customFont.className}`}>Wedding Ceremony</h1>
              </div>
              <div className='w-full flex flex-col justify-center items-center gap-2 mt-8 box-border'>
                <div className='flex justify-center items-center gap-3'>
                  <FaRegCalendarAlt className='text-primary' />
                  <p className={`font-light text-gray-500 ${customFont.className}`}>{process.env.WEDDIND_DATE}</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                  <WiTime8 className='text-primary' />
                  <p className={`font-light text-gray-500 ${customFont.className}`}>{process.env.WEDDIND_TIME}</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                  <RiMapPinLine className='text-primary' />
                  <p className={`font-light text-gray-500 ${customFont.className}`}>{process.env.WEDDING_ADDRESS}</p>
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
                <h1 className={`text-xl text-white ${customFont.className}`}>Map</h1>
              </div>
              <div className='w-full flex flex-col justify-center items-center gap-2 mt-8 box-border'>
                <div className='w-[8vw] my-1'>
                  <button 
                    className={`w-full h-[50px] text-gray-500 font-light bg-white border-2 border-primary hover:bg-white hover:text-primary ${customFont.className}`}
                    onClick={() => window.open(googleMapsLink, '_blank')}  
                  >Get Direction</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
