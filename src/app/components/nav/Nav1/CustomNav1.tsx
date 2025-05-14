/*
|-----------------------------------------
| setting up CustomNav1 for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: tecmart-template, May, 2025
|-----------------------------------------
*/

import CustomLink from '@/app/components/nav/CustomLink';

const CustomNav1 = () => {
  type links = {
    name: string;
    url: string;
  }[];
  const links: links = [
    { name: 'Home', url: '/' },
    { name: 'Become a Seller', url: '/login' },
    { name: 'Login to Seller', url: '/login' },
  ];

  return (
    <nav className="w-full flex gap-4 items-center justify-center text-center px-4 bg-slate-700 text-slate-400">
      <div className="w-full lg:w-7xl flex gap-4 items-center justify-end text-center px-4">
        {links.map((i, idx) => (
          <CustomLink i={i} key={i.name + idx} />
        ))}
      </div>
    </nav>
  );
};
export default CustomNav1;
