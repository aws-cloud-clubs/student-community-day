import Image from "next/image";
import React from "react";

import { prefix } from "@/constants";

export const HeroSection: React.FC = () => {
  return (
    <div id='hero' className='w-screen flex relative'>
      <Image
        src={`${prefix}/assets/images/object.png`}
        alt='animation object'
        width={1920}
        height={1080}
        className='absolute top-0 left-0 z-0 w-screen h-full z-1 animate-bounce object-cover'
      />
      <Image
        priority
        src={`${prefix}/assets/images/background.png`}
        alt='background image'
        width={1920}
        height={1080}
        className='w-screen h-screen object-cover '
      />
      <Image
        priority
        src={`${prefix}/assets/images/typo.png`}
        alt='typo'
        width={797}
        height={364}
        className='absolute top-0 left-0 bottom-0 right-0 m-auto z-20 object-contain max-md:px-5'
      />
    </div>
  );
};
