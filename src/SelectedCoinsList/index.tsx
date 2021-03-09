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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '80vH',
    width: '100%',
    maxWidth: '880px',
    boxSizing: 'border-box',
    backgroundColor: 'inherit',
    border: '1px solid #ffffff',
    borderRadius: '4px',
    color: '#ffffff',
  },
  table: {
    backgroundColor: 'inherit',
  },
  tableCellHead: {
    color: '#ffff99',
    fontWeight: 'bold',
  },
  tableCell: {
    color: '#ffffff',
  },
  coinIcon: {
    width: theme.spacing(3),
  },
}));

const SelectedCoinsList = () => {
  const classes = useStyles();
  let [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchData().then((res) => {
      setData(res.coins);
    });
  }, []);

  const coinname = ['bitcoin', 'ethereum', 'litecoin', 'nem', 'stellar'];

  data.filter((coin) => coinname.includes(coin.id)).map((coin) => console.log(coin));

  return (
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
            .filter((coin) => coinname.includes(coin.id))
            .map((coin) => (
              <TableRow key={coin.id}>
                <TableCell className={classes.tableCell} align="center">
                  {coin.rank}
                </TableCell>
                <TableCell className={classes.tableCell}>{coin.name}</TableCell>
                <TableCell className={classes.tableCell}>
                  <img src={coin.icon} alt={coin.id} className={classes.coinIcon} />
                </TableCell>
                <TableCell className={classes.tableCell}>{coin.symbol}</TableCell>
                <TableCell className={classes.tableCell}>
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
  );
};

export default SelectedCoinsList;
