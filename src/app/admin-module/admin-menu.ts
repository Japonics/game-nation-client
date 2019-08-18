import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'NAV.DASHBOARD',
    icon: 'shopping-cart-outline',
    link: '/admin',
    home: true,
  },
  {
    title: 'NAV.MANAGEMENT',
    group: true,
  },
  {
    title: 'NAV.GAMES',
    icon: 'layers-outline',
    children: [
      {
        title: 'NAV.MANAGE',
        link: '/admin/games',
        icon: 'settings-outline'
      }
    ],
  },
  {
    title: 'NAV.CATEGORIES',
    icon: 'grid-outline',
    children: [
      {
        title: 'NAV.MANAGE',
        link: '/admin/categories',
        icon: 'settings-outline'
      }
    ],
  },
  {
    title: 'NAV.USERS',
    icon: 'people-outline',
    children: [
      {
        title: 'NAV.MANAGE',
        link: '/admin/users',
        icon: 'settings-outline'
      },
      {
        title: 'NAV.ADMINS',
        link: '/admin/users/admins',
        icon: 'person-outline'
      }
    ],
  },
  {
    title: 'NAV.ORDERS',
    icon: 'cube-outline',
    children: [
      {
        title: 'NAV.MANAGE',
        link: '/admin/orders',
        icon: 'settings-outline'
      }
    ],
  },
];
