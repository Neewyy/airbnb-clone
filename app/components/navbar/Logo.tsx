'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();

    return (
       <Image 
            src="/images/airbnb.svg"
            alt="logo"
            width={100}
            height={50}
        />
    )
}

export default Logo;