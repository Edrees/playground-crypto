import React from 'react';
import Box from '@material-ui/core/Box';
import DataGridComponent from './DataGridComponent/';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#282c34",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    minHeight: theme.spacing(8),
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} px={2}>
      <header className={classes.header}>Crypto Currencies</header>
      <DataGridComponent />
    </Box>
  );
}

export default App;
