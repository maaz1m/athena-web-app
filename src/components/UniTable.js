import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';



function createData(name, fee, city, country, img, id) {
  return { id, name, fee, city, country,img};
}




const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 7,
    marginRight: theme.spacing.unit * 7,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 'auto',
      marginLeft: 'auto',
      marginRight: '20px',
    },
  },

  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },

  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },

});


class UniTable extends React.Component{


  render(){
    const { classes } = this.props;
    const rows = []
    var data = this.props.data
    for (var key in data) {
      rows.push(createData(data[key].name,data[key].fee,data[key].city,data[key].country,data[key].img, key))          
    }
    return (
      <main className={classes.main}>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="left">Fee/year</TableCell>
                <TableCell align="left">City</TableCell>
                <TableCell align="left">Country</TableCell>
                <TableCell padding="checkbox" align="left">Add to Favorites</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
              {rows.map(row => (
                <TableRow key={row.id}>
                 
                <TableCell padding="none"><Avatar src={row.img} className={classes.avatar} /></TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left"> {'Rs' + row.fee}</TableCell>
                  <TableCell align="left"> {row.city}</TableCell>
                  <TableCell align="left"> {row.country}</TableCell>
                   <TableCell padding="checkbox">
                            <Checkbox onClick = {()=>this.props.add(row.id)}/>
                    </TableCell>
                </TableRow>
             
              ))}
            </TableBody>
          </Table>
        </Paper>  
      </main>
    );
  }
}




UniTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UniTable);
