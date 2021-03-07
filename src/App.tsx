import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DataGridComponent from './DataGridComponent/';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  appBar: {
    backgroundColor: 'inherit',
    maxWidth: '880px',
    boxShadow: 'none',
  },
  title: {
    flexGrow: 1,
  },
  toolbarLink: {
    color: '#ffffff',
    textDecoration: 'none',
    '&.active': {
      textDecoration: 'underline',
    },
  },
  tab: {
    opacity: '1',
  },
  header: {
    minHeight: theme.spacing(8),
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Box className={classes.root} px={2}>
        <header className={classes.header}>Crypto Currencies</header>
        <AppBar position="static" className={classes.appBar}>
          <Tabs>
            <Tab label={
              <NavLink exact to="/" className={classes.toolbarLink}>
                Home
              </NavLink>
            }
              className={classes.tab}
            />
            <Tab label={
              <NavLink to="/selected" className={classes.toolbarLink}>
                Selected Coins
              </NavLink>
            }
              className={classes.tab}
            />
          </Tabs>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <DataGridComponent />
          </Route>
          <Route path="/selected">Where are you now?</Route>
        </Switch>
      </Box>
    </Router>
  );
};

export default App;
