import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '80vH',
    width: '100%',
    maxWidth: '880px',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    border: '1px solid #ffffff',
    borderRadius: '4px',
    color: '#ffffff',
  },
}));

const SelectedListComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Hello World
    </div>
  );
}

export default SelectedListComponent;
