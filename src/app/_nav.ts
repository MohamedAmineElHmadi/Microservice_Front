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
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    name: 'Ratings',
    url: '/theme/typography',
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
  }
];
