import { Routes } from '@/config/routes';
import { PaymentGateway } from '@/types';

export const siteSettings = {
  name: 'Template',
  description: '',
  logo: {
    url: '/logo.svg',
    alt: 'Template',
    href: '/',
    width: 128,
    height: 40,
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  product: {
    placeholderImage: '/product-placeholder.svg'
  },
  authorizedLinks: [
    { href: Routes.profile, label: 'Profile' },
    { href: Routes.orders, label: 'my orders' },
    { href: Routes.wishlists, label: 'my wishlist' },
    { href: Routes.checkout, label: 'menu checkout' },
  ],
  authorizedLinksMobile: [
    { href: Routes.profile, label: 'profile' },
    { href: Routes.orders, label: 'my orders' },
    { href: Routes.cards, label: 'my cards' },
    { href: Routes.wishlists, label: 'my wishlist' },
    { href: Routes.questions, label: 'my questions' },
    { href: Routes.refunds, label: 'my refunds' },
    { href: Routes.reports, label: 'my reports' },
    { href: Routes.checkout, label: 'checkout' },
    { href: Routes.changePassword, label: 'password' },
  ],
  dashboardSidebarMenu: [
    {
      href: Routes.profile,
      label: 'profile',
    },
    {
      href: Routes.changePassword,
      label: 'password',
    },
    {
      href: Routes.orders,
      label: 'orders',
    },
    {
      href: Routes.downloads,
      label: 'downloads',
    },
    {
      href: Routes.wishlists,
      label: 'my wishlist',
    },
    {
      href: Routes.questions,
      label: 'my questions',
    },
    {
      href: Routes.refunds,
      label: 'my-refunds',
    },
    {
      href: Routes.reports,
      label: 'my reports',
    },
    {
      href: Routes.cards,
      label: 'my cards',
      // MultiPayment: Make it dynamic or from mapper
      cardsPayment: [PaymentGateway.STRIPE],
    },
    {
      href: Routes.help,
      label: 'help',
    },
    {
      href: Routes.logout,
      label: 'logout',
    },
  ],
  sellingAdvertisement: {
    image: {
      src: '/selling.png',
      alt: 'Selling Advertisement',
    },
  },
  cta: {
    mockup_img_src: '/mockup-img.png',
    play_store_link: '/',
    app_store_link: '/',
  },
  footer: {
    copyright: {
      name: 'Template, Inc',
      href: 'https://dumy.io/',
    },
    address: '2429 River Drive, Suite 35 Cottonhall, CA 2296 United Kingdom',
    email: 'dummy@dummy.com',
    phone: '+1 256-698-0694',
    menus: [
      {
        title: 'Explore',
        links: [
          {
            name: 'About Us',
            href: '/',
          },
          {
            name: 'Sitemap',
            href: '/',
          },
          {
            name: 'Bookmarks',
            href: '/',
          },
          {
            name: 'Sign join',
            href: '/',
          },
        ],
      },
      {
        title: 'customer service',
        links: [
          {
            name: 'Faq Help',
            href: Routes.help,
          },
          {
            name: 'Returns',
            href: '/',
          },
          {
            name: 'Accessibility',
            href: '/',
          },
          {
            name: 'Contact-us',
            href: Routes.contactUs,
          },
          {
            name: 'Store Pickup',
            href: '/',
          },
        ],
      },
      {
        title: 'our information',
        links: [
          {
            name: 'privacy update',
            href: Routes.privacy,
          },
          {
            name: 'terms condition',
            href: Routes.terms,
          },
          {
            name: 'return policy',
            href: '/',
          },
          {
            name: 'sitemap',
            href: '/',
          },
        ],
      },
    ],
    payment_methods: [
      {
        img: '/payment/master.png',
        url: '/',
      },
      {
        img: '/payment/skrill.png',
        url: '/',
      },
      {
        img: '/payment/paypal.png',
        url: '/',
      },
      {
        img: '/payment/visa.png',
        url: '/',
      },
      {
        img: '/payment/discover.png',
        url: '/',
      },
    ],
  },
};
