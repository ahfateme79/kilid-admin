import { INavbarMenus } from '../interfaces/navbar-items.interface';

export const NavbarMenus: INavbarMenus[] = [
  {
    id: 0,
    name: 'Dashboard',
    icon: 'fa-table-columns',
    route: '/dashboard',
  },
  {
    id: 1,
    name: 'Users',
    icon: 'fa-user',
    route: '/users',
  },
  {
    id: 2,
    name: 'Account',
    icon: 'fa-briefcase',
    route: '/account',
  },
  {
    id: 3,
    name: 'Payroll',
    icon: 'fa-money-bill',
    route: '/payroll',
  },
  {
    id: 1,
    name: 'Checklist',
    icon: 'fa-table-list',
    route: '/checklist',
  },
];
