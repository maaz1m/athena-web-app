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





const obj = {
      'lums': {
        'name': 'Lahore University of Management Sciences',
        'fee': 320000,
        'city': 'Lahore',
        'country': 'Pakistan',
        'minSAT':  1200,
        'major': {
          'mgs': 'Managment Sciences',
          'acf': 'Accounting and Finace',
          'econmath': 'Economics and Maths',
          'cs': 'Computer Science',
          'ee': 'Electrical Engineering'
        },
        'img': 'https://marketing.lums.edu.pk/sites/all/themes/market/images/bansr.jpg'
      },

      'fast-nuces': {
        'name': 'FAST-National University of Computer and Emerging Sciences',
        'fee': 140000,
        'city': 'Islamabad',
        'country': 'Pakistan',
        'minSAT':  1100,
        'major': {
          'cs': 'Computer Science',
          'ee': 'Electrical Engineering'
        },
        'img': 'http://www.unimentor.net/wp-content/uploads/2016/10/Fast-Isljpg.jpeg'
      },

      'nust': {
        'name': 'National University of Science and Technology',
        'fee': 70000,
        'city': 'Islamabad',
        'country': 'Pakistan',
        'minSAT':  1100,
        'major': {
          'me': 'Mechanical Engineering',
          'ce': 'Chemical Engineering',
          'cs': 'Computer Science',
          'ee': 'Electrical Engineering'
        },
        'img': 'https://cdn-az.allevents.in/banners/780d997f186c250e5c2e58e42453a325'
      },

      'ned': {
        'name': 'NED University of Engineering and Technology',
        'fee': 35000,
        'city': 'Karachi',
        'country': 'Pakistan',
        'minSAT':  1100,
        'major': {
          'me': 'Mechanical Engineering',
          'ce': 'Chemical Engineering',
          'cs': 'Computer Science',
          'ee': 'Electrical Engineering'
        },
        'img': 'http://www.pak101.com/phototour/Karachi/pic00990_hkceo.jpg'
      },

      'uet': {
        'name': 'University of Engineering and Technology',
        'fee': 90000,
        'city': 'Lahore',
        'country': 'Pakistan',
        'minSAT':  1100,
        'major': {
          'me': 'Mechanical Engineering',
          'ce': 'Chemical Engineering',
          'cs': 'Computer Science',
          'ee': 'Electrical Engineering'
        },
        'img': 'https://i0.wp.com/academiamag.com/wp-content/uploads/2019/03/uet-lkaxclasxc-a.jpg?fit=1920%2C1280&ssl=1'
      },    

      'giki': {
        'name': 'Ghulam Ishaq Khan Institute',
        'fee': 270000,
        'city': 'Swabi',
        'country': 'Pakistan',
        'minSAT':  1200,
        'major': {
          'me': 'Mechanical Engineering',
          'ce': 'Chemical Engineering',
          'cs': 'Computer Science',
          'ee': 'Electrical Engineering'
        },
        'img': 'http://nspire.com.pk/wp-content/uploads/2015/09/giki.jpg'
      },

      'iba': {
        'name': 'Institute of Business Administration',
        'fee': 150000,
        'city': 'Karachi',
        'country': 'Pakistan',
        'minSAT':  1200,
        'major': {
          'bba': 'Bachelors in Business Administration',
          'mba': 'Masters in Business Administration',
          'acf': 'Accounting and Finace',
          'cs': 'Computer Science'
        },
        'img': 'https://cdc.iba.edu.pk/images/img-campus.jpg'
      },

      'hu': {
        'name': 'Habib University',
        'fee': 450000,
        'city': 'Karachi',
        'country': 'Pakistan',
        'minSAT':  1150,
        'major': {
          'bba': 'Bachelors in Business Administration',
          'cs': 'Computer Science',
          'ce': 'Chemical Engineering'
        },
        'img': 'https://cdn-images-1.medium.com/max/1600/1*nxSOyBGWCvsc1r3EXpcELg.jpeg'
      },

      'iu': {
        'name': 'Iqra University',
        'fee': 40000,
        'city': 'Karachi',
        'country': 'Pakistan',
        'minSAT':  1000,
        'major': {
          'bba': 'Bachelors in Business Administration',
          'mba': 'Masters in Business Administration',
          'acf': 'Accounting and Finace',
          'econ': 'Economics'
        },
        'img': 'http://www.entireeducation.com/wp-content/uploads/2012/06/q2.jpg'
      },

      'ucp': {
        'name': 'University College Punjab',
        'fee': 120000,
        'city': 'Lahore',
        'country': 'Pakistan',
        'minSAT':  1050,
        'major': {
          'bba': 'Bachelors in Business Administration',
          'mba': 'Masters in Business Administration',
          'acf': 'Accounting and Finace',
          'econ': 'Economics'
        },
        'img': 'https://dailytimes.com.pk/assets/uploads/2017/12/21/UCP-University-of-Central-Punjab.jpg'
      },

      'qau': {
        'name': 'Quaid-i-Azam University',
        'fee': 80000,
        'city': 'Islamabad',
        'country': 'Pakistan',
        'minSAT':  1050,
        'major': {
          'bba': 'Bachelors in Business Administration',
          'mba': 'Masters in Business Administration',
          'acf': 'Accounting and Finace',
          'econ': 'Economics',
          'llb': 'Bachelor of Law'
        },
        'img': 'https://www.samaa.tv/wp-content/uploads/2017/10/892026-QuaidiAzam_University_Entrance-1432557039-640x382.jpg'
      },

      'pieas': {
        'name': 'Pakistan Institute of Engineering and Applied Sciences',
        'fee': 150000,
        'city': 'Islamabad',
        'country': 'Pakistan',
        'minSAT':  1250,
        'major': {
          'me': 'Mechanical Engineering',
          'ce': 'Chemical Engineering',
          'cs': 'Computer Science',
          'ee': 'Electrical Engineering'
        },
        'img':'http://www.entireeducation.com/wp-content/uploads/2011/11/PIEAS2.jpg'
      },

      'aku': {
        'name': 'Agha Khan University',
        'fee': 900000,
        'city': 'Karachi',
        'country': 'Pakistan',
        'minSAT':  1400,
        'major': {
          'mbbs': 'Medicinae Baccalaureus, Baccalaureus Chirurgiaehe',
          'bds': 'Bachelor of Dental Surgery'
        },
        'img': 'https://warwick.ac.uk/fac/sci/med/about/centres/cahrd/slums/partners/pakistan/aku.jpg?maxWidth=341&maxHeight=227'
      },  

  
      'duhs': {
        'name': 'Dow University of Health Sciences',
        'fee': 550000,
        'city': 'Karachi',
        'country': 'Pakistan',
        'minSAT':  1300,
        'major': {
          'mbbs': 'Medicinae Baccalaureus, Baccalaureus Chirurgiaehe',
          'bds': 'Bachelor of Dental Surgery'
        },
        'img': 'https://www.duhs.edu.pk/images/dmc12.jpg'
      },  

}   


let id = 0;
function createData(name, fee, city, country, img) {
  id += 1;
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
    for (var key in this.props.data) {
      rows.push(createData(obj[key].name,obj[key].fee,obj[key].city,obj[key].country,obj[key].img))          
    }
    return (
      <main className={classes.main}>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="left">Fee</TableCell>
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
                  <TableCell align="left"> {row.fee}</TableCell>
                  <TableCell align="left"> {row.city}</TableCell>
                  <TableCell align="left"> {row.country}</TableCell>
                   <TableCell padding="checkbox">
                            <Checkbox/>
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
