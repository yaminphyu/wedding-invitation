import React from 'react';
import styles from '@/styles/HeroSection.module.css'
import Image from 'next/image';

export default function HeroSection({ customFont }) {
  return (
    <section className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={`${customFont.className} ${styles['hero-text']}`}>We&apos;re getting married</h1>
          <div className={styles['main-part']}>
            <div className={styles.main}>
              <div>
                <h1 className={`${customFont.className} ${styles.title}`}>Kaung Htet Zaw</h1>
              </div>
              <div>
                <Image src={`/kaung.jpg`} alt='Kaung Htet Zaw' width={100} height={100} className='rounded-full' />
              </div>
            </div>
            <div className={styles.main}>
              <div>
                <Image src={`/hanny.jpg`} alt='Hanny Zaw Win' width={100} height={100} className='rounded-full' />
              </div>
              <div>
                <h1 className={`${customFont.className} ${styles.title}`}>Hanny Zaw Win</h1>
              </div>
            </div>
          </div>
          <div className={styles.heart}>
            <Image src={`/heart.png`} alt='Wedding' width={100} height={100} className='rounded-3xl' />
          </div>
        </div>
    </section>
  )
}
