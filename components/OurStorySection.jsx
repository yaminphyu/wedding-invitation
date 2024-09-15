/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '@/styles/OurStory.module.css'
import Image from 'next/image';

export default function OurStorySection({ customFont }) {
    return (
        <section className={styles.wrapper} id='our-story'>
            <div className={styles.container}>
                <h1 className={`${customFont.className} ${styles.title}`}>Our Story</h1>
                <div className={styles['main-container']}>
                    {/* Timeline */}
                    <div className={styles['dot-line']}>
                        {/* Dot 1 - placed at 25% of the line */}
                        <div className={`${styles.dot} top-[30%]`}></div>
                        
                        {/* Dot 2 - placed at 50% of the line */}
                        <div className={`${styles.dot} top-[60%]`}></div>
                        
                        {/* Dot 3 - placed at 75% of the line */}
                        <div className={`${styles.dot} top-[90%]`}></div>
                    </div>

                    {/* First Meet */}
                    <div className={styles.item}>
                        <div className={styles['text-right-label']}>
                            <h2 className={`${styles['main-text']} ${customFont.className}`}>First Meet</h2>
                            <p className={styles['main-date']}>2012</p>
                            <p className={styles['main-para']}>
                                Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                            </p>
                        </div>
                        <div className={styles['main-image-part']}>
                            <div className={styles['image-container']}>
                                <Image src={`/first-meet.jpg`} alt="Kaung Htet Zaw" width={250} height={250} className={styles.image} />
                            </div>
                        </div>
                    </div>

                    {/* First Date */}
                    <div className={`${styles.item} ${styles['item-reverse']}`}>
                        <div className={styles['main-image-part']}>
                            <div className={styles['image-container']}>
                                <Image src={`/first-meet.jpg`} alt="Kaung Htet Zaw" width={250} height={250} className={styles.image} />
                            </div>
                        </div>
                        <div className={styles['text-left-label']}>
                            <h2 className={`${styles['main-text']} ${customFont.className}`}>First Date</h2>
                            <p className={styles['main-date']}>Tuesday, June 2nd, 2018</p>
                            <p className={styles['main-para']}>
                                Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                            </p>
                        </div>
                    </div>

                    {/* Marriage Proposal */}
                    <div className={styles.item}>
                        <div className={styles['text-right-label']}>
                            <h2 className={`${styles['main-text']} ${customFont.className}`}>Our Engagement</h2>
                            <p className={styles['main-date']}>Wednesday, March 3rd, 2024</p>
                            <p className={styles['main-para']}>
                                Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                            </p>
                        </div>
                        <div className={styles['main-image-part']}>
                            <div className={styles['image-container']}>
                                <Image src={`/first-meet.jpg`} alt="Kaung Htet Zaw" width={250} height={250} className={styles.image} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
