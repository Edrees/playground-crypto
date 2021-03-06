import { NavLink } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { tabBarItems } from './TabBarItems';

const useStyles = makeStyles((theme: Theme) => ({
  tabBlock: {
    width: '100%',
    maxWidth: '880px',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
  },
  tabBarLink: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    marginLeft: theme.spacing(1),
    border: '1px solid #e0e0e0',
    borderRadius: "4px 4px 0 0",
    color: '#999',
    textDecoration: 'none',
    '&.active': {
      color: '#111',
    },
  },
}));

const TabBar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.tabBlock}>
      {tabBarItems.map((item) => (
        <NavLink exact key={item.name} to={item.path} className={classes.tabBarLink}>
          {item.name}
        </NavLink>
      ))}
    </Box>
  );
};

export default TabBar;
