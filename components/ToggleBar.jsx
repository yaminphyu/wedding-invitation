import React, { useContext } from 'react';
import useToggle from '@/hook/useToggle';
import styles from '@/styles/ToggleBar.module.css';
import { navBars } from '@/config';
import { MobileToggleContext } from '@/context/MobileToggleContext';
import { scroller } from 'react-scroll';
import { useRouter } from 'next/router';

export default function ToggleBar() {
    const router = useRouter();
    
    const { pathName, toggleTop } = useToggle();

    const { toggle } = useContext(MobileToggleContext);

    const handleScrollTo = (path) => {
        scroller.scrollTo(path, {
            smooth: true,
            duration: 500,
            offset: -50,
        });
  
      path === 'top' ? router.push('/') : router.push(`/#${path}`);
    }

    return (
        <div className={`${styles.wrapper} ${toggle == null ? '!hidden' : (toggle ? 'animate-slide-in' : 'animate-slide-out')}`} style={{top: toggle ? toggleTop : '0px'}}>
            <div className={styles.container}>
                <ul className={styles['item-list']}>
                    {
                        navBars.map((item, index) => (
                            <button 
                                key={index}
                                onClick={() => handleScrollTo(item.path)}
                            >
                                <li 
                                    className={`${styles.item} ${pathName === item.path ? styles['item-active'] : ''}`}
                                >{item.name}</li>
                            </button>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
