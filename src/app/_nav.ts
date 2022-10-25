import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Services'
  },
  {
    name: 'Users',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    name: 'Articles',
    url: '/article',
    icon: 'icon-pencil'
  },
  {
    name: 'Rating',
    url: '/rating',
    icon: 'icon-pencil'
  },
  {
    name: 'Cours',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    name: 'Exam',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    name: 'Quiz',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    name: 'Commande',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    name: 'Feedback',
    url: '/feedback',
    icon: 'icon-pencil'
  }
];
