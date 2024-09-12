import React from 'react';
import styles from '@/styles/HeroSection.module.css';

export default function HeroSection({ customFont }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={`${styles['hero-text']} ${customFont.className}`}>We&apos;re getting married</h1>
        <div className='flex flex-row'>
          <div className='border-2 bg-yellow-100 w-[300px] h-[200px]'></div>
          <div className='border-2 bg-pink-200 w-[300px] h-[200px]'></div>
        </div>
      </div>
    </section>
  )
}
