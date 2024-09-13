import React, { useEffect, useState } from 'react';
import styles from '@/styles/OurDay.module.css';
import { calculateTimeDifference } from '@/hook/useCustom';

export default function OurDaySection({ customFont }) {
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const targetDate = new Date("2024-12-02T00:00:00");

  const [timeLeft, setTimeLeft] = useState(calculateTimeDifference(targetDate));

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeDifference(targetDate));
  //   }, 1000);

  //   return () => clearInterval(timer); // Cleanup on component unmount
  // }, [targetDate]);

  return (
    <section className={styles.wrapper} id='our-day'>
      <div className={styles.container}>
        <h1 className={`${styles.title} ${customFont.className}`}>Saturday, 2 <span className='text-primary'>December</span> 2024</h1>
        <div className={styles.counter}>
          <div className={styles.item}>
            <p className={styles.number}>{timeLeft.days}</p>
            <h1 className={styles.string}>Day</h1>
          </div>
          <div className={styles.item}>
            <p className={styles.number}>{timeLeft.hours}</p>
            <h1 className={styles.string}>Hour</h1>
          </div>
          <div className={styles.item}>
            <p className={styles.number}>{timeLeft.minutes}</p>
            <h1 className={styles.string}>Minute</h1>
          </div>
          <div className={styles.item}>
            <p className={styles.number}>00</p>
            <h1 className={styles.string}>Second</h1>
          </div>
        </div>
        <div>
          <p className={`${styles['main-part']} ${customFont.className}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
        </div>
      </div>
    </section>
  )
}
