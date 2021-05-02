import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TabBar from './TabBar';
import AllCoinsList from './AllCoinsList/';
import SelectedCoinsList from './SelectedCoinsList';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    minHeight: theme.spacing(8),
    fontSize: 'calc(10px + 2vmin)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Container className={classes.root} maxWidth="lg">
        <header className={classes.header}>Crypto Currencies</header>
        <TabBar />
        <Switch>
          <Route exact path="/">
            <AllCoinsList />
          </Route>
          <Route path="/filtered">
            <SelectedCoinsList />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
