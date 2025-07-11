/*
|-----------------------------------------
| setting up Nav for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: tecmart-template, May, 2025
|-----------------------------------------
*/

'use client';

import CustomNav1 from '@/app/components/nav/Nav1/CustomNav1';
import CustomNav2 from '@/app/components/nav/Nav2/CustomNav2';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const path = usePathname();
  const isDashboard = path.split('/')[1] === 'dashboard';
  console.log('isDashboard', isDashboard);
  const isFixedToTop = true;
  return (
    <>
      {isDashboard && process.env.development !== 'true' && <CustomNav1 />}
      {isFixedToTop ? (
        <div className="sticky top-0 z-50 w-full bg-opacity-60 md:bg-opacity-40 backdrop-blur bg-slate-100 border-b-1">
          <div className="mx-auto max-w-7xl flex flex-col px-4 text-slate-700">
            <CustomNav2 />
          </div>
        </div>
      ) : (
        <CustomNav2 />
      )}
    </>
  );
};
export default Nav;
