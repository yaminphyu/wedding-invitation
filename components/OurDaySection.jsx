import React, { useEffect, useState } from 'react';
import styles from '@/styles/OurDay.module.css';

export default function OurDaySection({ customFont }) {
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const targetDate = new Date("2024-12-08T00:00:00");
  
  // State to keep track of time left
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    // Update the countdown every second
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        // Stop the countdown if the time is up
        clearInterval(intervalId);
      } else {
        // Calculate time left
        const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

        // Update state with the new time left
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <section className={styles.wrapper} id='our-day'>
      <div className={styles.container}>
        <h1 className={`${styles.title} ${customFont.className}`}>Sunday, 8 <span className='text-primary'>December</span> 2024</h1>
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
            <p className={styles.number}>{timeLeft.seconds}</p>
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
