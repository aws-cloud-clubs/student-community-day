import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className='w-screen h-screen flex pt-14 relative'>
      <Image
        src='/images/hero-object.png'
        alt='animation object '
        width={1920}
        height={1080}
        className='absolute top-0 left-0 z-0 w-screen h-screen z-1 animate-bounce max-md:hidden'
        objectFit={"contain"}
      />
      <Image
        src={"/images/hero-bg.png"}
        alt='background image'
        width={1920}
        height={1080}
        className='md:w-screen md:h-screen max-md:h-1/2'
        objectFit={"contain"}
      />
    </div>
  );
};

export default HeroSection;
