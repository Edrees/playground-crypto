import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TabBar from './TabBar'
import DataGridComponent from './DataGridComponent/';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
        <TabBar />
        <Switch>
          <Route exact path="/">
            <DataGridComponent />
          </Route>
          <Route path="/filtered">Where are you now?</Route>
        </Switch>
      </Box>
    </Router>
  );
};

export default App;
