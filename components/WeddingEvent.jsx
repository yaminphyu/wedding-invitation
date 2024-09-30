import React from 'react';
import Image from 'next/image';
import { FaRegCalendarAlt } from "react-icons/fa";
import { WiTime8 } from "react-icons/wi";
import styles from '@/styles/WeddingEvent.module.css';
import { eventImages } from '@/config'

export default function WeddingEvent({ customFont }) {
  return (
    <section className={styles.wrapper} id='wedding-events'>
      <div className={styles.container}>
        <h1 className={`${styles.title} ${customFont.className}`}>Time & Place</h1>
        <div className='w-full h-[60vh] p-10 box-border'>
            <div className='w-full h-full bg-[#f3eeee] flex justify-center items-center gap-5 p-3 box-border'>
                <div className='p-1 box-border'>
                    <Image
                        src={eventImages[0].name}
                        alt='event image'
                        width={400}
                        height={400}
                    />
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
                    </div>
                </div>
                <div className='p-1 box-border'>
                    <Image
                        src={`${eventImages[1].name}`}
                        alt='event image'
                        width={450}
                        height={450}
                        className='w-[433px]'
                    />
                    <div className='w-full h-[70px] bg-primary flex justify-center items-center'>
                      <h1 className={`text-xl text-white ${customFont.className}`}>Map</h1>
                    </div>
                    {/* <div className='w-full flex flex-col justify-center items-center mt-8 box-border'>
                      <div className='flex justify-center items-center gap-3'>
                        <FaRegCalendarAlt />
                        <p className={`${styles['event-text']} ${customFont.className}`}>{process.env.WEDDIND_DATE}</p>
                      </div>
                      <div className='flex justify-center items-center gap-3'>
                        <WiTime8 />
                        <p className={`${styles['event-text']} ${customFont.className}`}>{process.env.WEDDIND_TIME}</p>
                      </div>
                    </div> */}
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
