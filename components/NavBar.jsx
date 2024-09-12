import React from 'react';
import Link from 'next/link';
import styles from '@/styles/NavBar.module.css';
import { navBars } from '@/config';
import useToggle from '@/hook/useToggle';

export default function NavBar() {
  const pathName = useToggle();
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles['nav-list']}>
          {
            navBars.map((item, index) => (
              <Link 
                key={index} 
                href={item.path} 
                className={`${styles.item} 
                ${pathName === item.path ? styles['item-active'] : ''}`}
              >
                <li>{item.name}</li>
              </Link>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
