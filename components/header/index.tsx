import React from "react";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const Header: React.FC = () => {
  return (
    <header className='w-full flex justify-center'>
      <div className='max-w-[1440px] w-full h-14 flex justify-between items-center'>
        <b>ACC SCD 2024</b>
        <nav>
          <ul className='flex space-x-10 text-md font-medium'>
            <li>
              <a href='#'>발표/프로그램</a>
            </li>
            <li>
              <a href='#'>위치</a>
            </li>
            <li>
              <a href='#'>이벤트</a>
            </li>
          </ul>
        </nav>
        <button className='flex items-center gap-x-0.5 border border-gray-300 rounded-full py-1.5 px-3'>
          <ArrowTopRightOnSquareIcon className='w-3.5 h-3.5' />
          <span className='text-xs'>발표 지원하기</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
