import Image from "next/image";
import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <div id='hero' className='w-screen h-screen flex relative'>
      <Image
        src='/assets/images/hero-object.png'
        alt='animation object'
        width={1280}
        height={720}
        className='absolute top-0 left-0 z-0 w-screen h-screen z-1 animate-bounce max-md:hidden'
      />
      {/* MEMO Typo bg image에서 분리하기*/}
      <Image
        priority
        src={"/assets/images/hero-bg.png"}
        alt='background image'
        width={1280}
        height={720}
        className='md:w-screen md:h-screen max-md:h-1/2'
      />
    </div>
  );
};
