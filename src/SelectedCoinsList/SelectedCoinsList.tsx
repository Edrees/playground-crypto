import { useEffect, useState } from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import fetchData from '../CoinsData/';

const DRAWER_WIDTH = 180;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: '880px',
    boxSizing: 'border-box',
    backgroundColor: 'inherit',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  tableCellHead: {
    backgroundColor: '#01b3e0',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  coinIcon: {
    width: theme.spacing(3),
  },
  dropdownStyle: {
    maxHeight: '95%',
    width: 250,
    marginTop: theme.spacing(1),
    '& li.Mui-selected': {
      backgroundColor: '#01b3e0',
      borderBottom: '1px solid #ffffff',
      color: '#ffffff',
    },
  },
  filterIcon: {
    position: 'absolute',
    right: '10px',
  },
  hide: {
    display: 'none',
  },
  open: {
    display: 'block',
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    '& .MuiSelect-selectMenu': {
      lineHeight: '40px',
      whiteSpace: 'inherit',
    },
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}));

const SelectedCoinsList = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [data, setData] = useState<any[]>([]);
  const [selectedCoinList, setSelectedCoinList] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedCoinList(event.target.value as string[]);
  };

  useEffect(() => {
    fetchData().then((res) => {
      setData(res.coins);
    });
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        className={`${classes.filterIcon} ${open ? classes.hide : classes.open}`}
      >
        <MenuIcon />
      </IconButton>
      <TableContainer className={classes.root} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCellHead} width="40px" variant="head">
                Rank
              </TableCell>
              <TableCell className={classes.tableCellHead}>Coin Name</TableCell>
              <TableCell className={classes.tableCellHead}>Icon</TableCell>
              <TableCell className={classes.tableCellHead}>Symbol</TableCell>
              <TableCell className={classes.tableCellHead}>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .sort((a, b) => {
                if (a.rank < b.rank) {
                  return -1;
                }
                if (a.rank > b.rank) {
                  return 1;
                }
                return 0;
              })
              .filter((coin) => {
                if (selectedCoinList.length > 0) {
                  return selectedCoinList.includes(coin.id);
                } else {
                  return true;
                }
              })
              .map((coin) => (
                <TableRow key={coin.id}>
                  <TableCell align="center">{coin.rank}</TableCell>
                  <TableCell>{coin.name}</TableCell>
                  <TableCell>
                    <img src={coin.icon} alt={coin.id} className={classes.coinIcon} />
                  </TableCell>
                  <TableCell>{coin.symbol}</TableCell>
                  <TableCell>
                    <strong>
                      $
                      {coin.price > 0.09
                        ? (Math.round(coin.price * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2)
                        : coin.price.toFixed(6)}
                    </strong>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <FormControl className={classes.formControl}>
          <InputLabel id="multiple-coins-selector">Coin Filter</InputLabel>
          <Select
            labelId="multiple-coins-selector"
            id="multiple-coins"
            multiple
            value={selectedCoinList}
            onChange={handleChange}
            input={<Input />}
            MenuProps={{ classes: { paper: classes.dropdownStyle } }}
          >
            {data
              .sort((a, b) => {
                if (a.name < b.name) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              })
              .map((coin) => (
                <MenuItem key={coin.id} value={coin.id}>
                  {coin.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Drawer>
    </>
  );
};

export default SelectedCoinsList;
