import { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import fetchData from '../CoinsData/';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

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
    display: 'none',
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  table: {
    backgroundColor: 'inherit',
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
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    width: 250,
    '& li.Mui-selected': {
      backgroundColor: '#01b3e0',
      borderBottom: '1px solid #ffffff',
      color: '#ffffff',
    },
  },
}));

const SelectedCoinsList = () => {
  const classes = useStyles();
  const [data, setData] = useState<any[]>([]);
  const [selectedCoinList, setSelectedCoinList] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedCoinList(event.target.value as string[]);
  };

  useEffect(() => {
    fetchData().then((res) => {
      setData(res.coins);
    });
  }, []);

  return (
    <>
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
      <TableContainer className={classes.root} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
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
    </>
  );
};

export default SelectedCoinsList;
