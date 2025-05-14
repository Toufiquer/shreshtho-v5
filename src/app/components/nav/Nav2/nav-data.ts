/*
|-----------------------------------------
| setting up Data for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
const navData = {
  baseInfo: {
    firstName: 'Shreshtho',
    lastName: '.com',
  },
  about: {
    groupTitle: 'About',
    fullName: 'Shreshtho.com',
    // Description is a placeholder as specific details were not retrieved
    description: "Bangladesh's largest online shop offering a wide variety of products.",
    links: [
      {
        id: 1,
        title: 'About Us',
        url: '/about-us', // Assuming a standard URL structure
        description: 'Learn more about Shreshtho.com',
      },
      // Add other relevant about links if known, e.g., careers, terms of service
    ],
  },
  services: {
    groupTitle: 'Shop by Category', // Renamed to better fit e-commerce
    data: [
      {
        title: 'Fashion',
        href: '/category/fashion', // Assuming a standard URL structure
        description: 'Explore the latest fashion trends.',
      },
      {
        title: 'Cosmetics',
        href: '/category/cosmetics',
        description: 'Find a wide range of cosmetic products.',
      },
      {
        title: 'Jewellery',
        href: '/category/jewellery',
        description: 'Discover beautiful jewellery pieces.',
      },
      {
        title: 'Grocery & Food',
        href: '/category/grocery-food',
        description: 'Shop for your daily grocery needs.',
      },
      {
        title: 'Sports & Fitness',
        href: '/category/sports-fitness',
        description: 'Get your sports and fitness gear.',
      },
      {
        title: 'Home Appliances',
        href: '/category/home-appliances',
        description: 'Browse essential home appliances.',
      },
      {
        title: 'Electronics',
        href: '/category/electronics',
        description: 'Find the latest electronics.',
      },
      {
        title: 'Mobile Phones',
        href: '/category/mobile-phones',
        description: 'Shop for mobile phones and accessories.',
      },
      // Add more categories if known
    ],
  },
  othersLink: [
    // Assuming standard e-commerce links
    { id: 1, title: 'Contact Us', url: '/contact' }, // Assuming a standard URL structure
    { id: 2, title: 'FAQ', url: '/faq' }, // Common e-commerce link
  ],
};
export default navData;
