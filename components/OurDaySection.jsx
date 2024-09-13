import React from 'react';
import styles from '@/styles/OurDay.module.css';

export default function OurDaySection({ customFont }) {
  return (
    <section className={styles.wrapper} id='our-day'>
      <div className={styles.container}>
        <h1 className={`${styles.title} ${customFont.className}`}>Saturday, 2 <span className='text-primary'>December</span> 2024</h1>
        <div className={styles.counter}>
          <div className={styles.item}>
            <p className={styles.number}>00</p>
            <h1 className={styles.string}>Day</h1>
          </div>
          <div className={styles.item}>
            <p className={styles.number}>00</p>
            <h1 className={styles.string}>Hour</h1>
          </div>
          <div className={styles.item}>
            <p className={styles.number}>00</p>
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
