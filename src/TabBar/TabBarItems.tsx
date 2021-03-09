interface TabBarItemProps {
  path: string;
  name: string;
}

export const tabBarItems: Array<TabBarItemProps> = [
  {
    path: '/',
    name: 'Coins with default grid filter',
  },
  {
    path: '/filtered',
    name: 'Coins with custom filter',
  },
];