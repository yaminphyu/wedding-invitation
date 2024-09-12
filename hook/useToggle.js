import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { navBars } from '@/config';

export default function useToggle() {
    const router = useRouter();

    const [ pathName, setPathName ] = useState('/');
  
    useEffect(() => {
      navBars.map((item) => {
        if (router.asPath.includes(item.path)) {
          setPathName(item.path);
        }
      })
    }, [router.asPath]);

    return pathName;
}
