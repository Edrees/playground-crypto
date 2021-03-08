import { NavLink } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { tabBarItems } from './TabBarItems';

const useStyles = makeStyles((theme: Theme) => ({
  toolbarLink: {
    color: '#ffffff',
    textDecoration: 'none',
    '&.active': {
      textDecoration: 'underline',
    },
  },
}));

const TabBar = () => {
  const classes = useStyles();

  return (
    <>
      {tabBarItems.map((item) => (
        <NavLink exact key={item.name} to={item.path} className={classes.toolbarLink}>
          {item.name}
        </NavLink>
      ))}
    </>
  );
};

export default TabBar;
