import React, { useContext, useEffect } from 'react';
import { FaBars, FaXmark  } from "react-icons/fa6";
import styles from '@/styles/Header.module.css'
import { MobileToggleContext } from '@/context/MobileToggleContext';

export default function Header() {
    const { toggle, setToggle } = useContext(MobileToggleContext);

    const handleChangeToggle = () => {
        setToggle(!toggle);
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div>
                    <h1 className={styles['left-text']}>Kaung <span className='text-primary'>&</span> Hanny</h1>
                </div>
                <div className={styles['right-div']}>
                    <h1 className={styles['right-text']}>Saturday, 2 <span className='text-primary'>December</span> 2024</h1>
                </div>
                <div className={styles['menu-icon-div']}>
                    {
                        toggle ? 
                            <FaXmark
                                className={styles['menu-icon']}
                                onClick={handleChangeToggle}
                            />
                        :   <FaBars 
                                className={styles['menu-icon']}
                                onClick={handleChangeToggle}
                            />
                    }
                </div>
            </div>
        </section>
    )
}
