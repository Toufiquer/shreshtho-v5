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
    lastName: '',
  },
  about: {
    groupTitle: 'About',
    fullName: 'Shreshtho',
    description: 'A digital online company to sell various products like cloth, computer, beauty, kids, and much more.',
    links: [
      {
        id: 1,
        title: 'Introduction',
        url: '/',
        description: 'We are a group of people to solve your problems',
      },
      {
        id: 2,
        title: 'Our Products',
        url: '/',
        description: 'We offer a wide range of products including cloth, computer, beauty, and kids items.',
      },
      {
        id: 3,
        title: 'More About Us',
        url: '/',
        description: 'Learn more about our company and our commitment to quality.',
      },
    ],
  },
  services: {
    groupTitle: 'Services',
    data: [
      {
        title: 'Cash on Delivery',
        href: '/',
        description: 'Enjoy the convenience of paying for your order upon delivery.',
      },
      {
        title: 'Best Products',
        href: '/',
        description: 'We are committed to providing you with the highest quality products.',
      },
      {
        title: 'Supports',
        href: '/',
        description: 'A modal dialog that interrupts the user with important content and expects a response.',
      },
      {
        title: 'Preview',
        href: '/',
        description: 'For sighted users to preview content available behind a link.',
      },
      {
        title: 'Indicator',
        href: '/',
        description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
      {
        title: 'Content',
        href: '/',
        description: 'Visually or semantically separates content.',
      },
      {
        title: 'Tabs',
        href: '/',
        description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      },
      {
        title: 'Information',
        href: '/',
        description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      },
    ],
  },
  othersLink: [
    { id: 1, title: 'Top Sells', url: '/top-sells' },
    { id: 2, title: 'Blog', url: '/blog' },
    { id: 3, title: 'Contact', url: '/contact' },
  ],
};
export default navData;
