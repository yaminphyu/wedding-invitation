import React, { useContext } from 'react';
import Link from 'next/link';
import useToggle from '@/hook/useToggle';
import styles from '@/styles/ToggleBar.module.css';
import { navBars } from '@/config';
import { MobileToggleContext } from '@/context/MobileToggleContext';

export default function ToggleBar() {
    const pathName = useToggle();

    const { toggle } = useContext(MobileToggleContext);

    return (
        <div className={`${styles.wrapper} ${toggle == null ? '!hidden' : (toggle ? 'animate-slide-in' : 'animate-slide-out')}`}>
            <div className={styles.container}>
                <ul className={styles['item-list']}>
                    {
                        navBars.map((item, index) => (
                            <Link href={item.path} key={index}>
                                <li 
                                    className={`${styles.item} ${pathName === item.path ? styles['item-active'] : ''}`}
                                >{item.name}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
