import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { navBars } from '@/config';

export default function useToggle() {
    const router = useRouter();

    const [ pathName, setPathName ] = useState('/');
    const [toggleTop, setToggleTop] = useState('50px');
  
    useEffect(() => {
      navBars.map((item) => {
        if (router.asPath.includes(item.path)) {
          setPathName(item.path);
        }

        // if (router.asPath.includes('/')) {
        //   setToggleTop('50px');
        // }  
        
        // if (router.asPath.includes('/#our-day')) {
        //   setToggleTop('193px');
        // }
      })
    }, [router.asPath]);

    return {pathName, toggleTop};
}
