/* eslint-disable react/jsx-key */
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Gallery.module.css';
import { galleryImages } from '@/config';

export default function GallerySection({ customFont }) {
    return (
        <section className={styles.wrapper} id='gallery'>
            <div className={styles.container}>
                <h1 className={`${styles.title} ${customFont.className}`}>Gallery</h1>
                {
                    galleryImages.map((images, i) => {
                        return (
                            <div className={styles['image-container']} key={i}>
                                {
                                    images.map((image, index) => {
                                        return (
                                            <Image 
                                                key={index}
                                                src={`${image.src}?random=${Math.floor(Math.random() * 100)}`} 
                                                alt={image.alt} 
                                                width={300} 
                                                height={300} 
                                                quality={90} 
                                                priority 
                                                className={styles.image} 
                                                onMouseDown={() => handleMouseDown(image.src)}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
