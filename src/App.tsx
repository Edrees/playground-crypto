import React from 'react';
import DataGridComponent from './DataGridComponent/';
import { makeStyles } from '@material-ui/core/styles';
import './App.scss';

const useStyles = makeStyles({
  root: {
    color: "#fff"
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className="cs__header">Crypto Currencies</header>
      <DataGridComponent />
    </div>
  );
}

export default App;
