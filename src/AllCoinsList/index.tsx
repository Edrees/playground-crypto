import { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import fetchData from '../CoinsData/'
import './styles.scss';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: '880px',
  },
  tableHeader: {
    color: '#ffff99',
    fontWeight: 'bold',
  },
  coinIcon: {
    '& img': {
      width: theme.spacing(3),
    },
  },
  positive: {
    color: '#15ce34',
    fontWeight: 'bold',
  },
  negative: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
  lastColumn: {
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
  },
}));

const AllCoinsList = () => {
  const classes = useStyles();
  let [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(res => { setData(res.coins) })
  }, [])

  const columns = [
    {
      field: 'rank',
      headerName: 'Rank',
      headerClassName: classes.tableHeader,
      width: 90,
    },
    {
      field: 'name',
      headerName: 'Coin Name',
      headerClassName: classes.tableHeader,
      width: 150,
    },
    {
      field: 'icon',
      headerName: 'Icon',
      headerClassName: classes.tableHeader,
      width: 90,
      cellClassName: classes.coinIcon,
      renderCell: (params: any) => <img src={params.value} alt={params.value} />,
    },
    {
      field: 'symbol',
      headerName: 'Symbol',
      headerClassName: classes.tableHeader,
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      headerClassName: classes.tableHeader,
      width: 120,
      renderCell: (params: any) => (
        <strong>
          $
          {params.value > 0.09
            ? (Math.round(params.value * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2)
            : params.value.toFixed(6)}
        </strong>
      ),
    },
    {
      field: 'priceChange1h',
      headerName: '1H Report',
      headerClassName: classes.tableHeader,
      width: 150,
      renderCell: (params: any) =>
        params.value > 0 ? (
          <div className={classes.positive}>{params.value}%</div>
        ) : (
          <div className={classes.negative}>{params.value}%</div>
        ),
    },
    {
      field: 'priceChange1w',
      headerName: '1W Report',
      headerClassName: `${classes.tableHeader} ${classes.lastColumn}`,
      width: 150,
      renderCell: (params: any) =>
        params.value > 0 ? (
          <div className={classes.positive}>{params.value}%</div>
        ) : (
          <div className={classes.negative}>{params.value}%</div>
        ),
    },
  ];

  return (
    <div className={classes.root}>
      <DataGrid
        className="cs__table"
        pageSize={10}
        rowsPerPageOptions={[10, 50, 100]}
        rows={data}
        columns={columns}
        autoHeight
        hideFooterSelectedRowCount
      />
    </div>
  );
};

export default AllCoinsList;
