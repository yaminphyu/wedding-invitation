import React from 'react';
import styles from '@/styles/NavBar.module.css';
import { navBars } from '@/config';
import useToggle from '@/hook/useToggle';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';

export default function NavBar() {
  const router = useRouter();

  const { pathName } = useToggle();

  const handleScrollTo = (path) => {
    scroller.scrollTo(path, {
      smooth: true,
      duration: 500,
      offset: -50,
    });

    path === 'top' ? router.push('/') : router.push(`/#${path}`);
  }
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles['nav-list']}>
          {
            navBars.map((item, index) => (
              <button 
                key={index}  
                className={`${styles.item} ${pathName === item.path ? styles['item-active'] : ''}`}
                onClick={() => handleScrollTo(item.path)}
              >
                <li>{item.name}</li>
              </button>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
