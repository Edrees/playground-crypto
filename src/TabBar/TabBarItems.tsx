interface TabBarItemProps {
  path: string;
  name: string;
}

export const tabBarItems: Array<TabBarItemProps> = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/filtered',
    name: 'Selected',
  },
];