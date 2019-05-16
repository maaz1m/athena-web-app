import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import firebase from '../firebase'
import * as router from '../router'
import Link from '@material-ui/core/Link';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

 

class YourUniversities extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      tileData: [],
      present: false,
    }
    // var fb = firebase.auth()

    // if(fb){
    //   var user = fb.currentUser
    //   if(user){
    //     firebase.database().ref('user/'+ user.uid + '/universities')
    //     .once('value').then(snapshot =>{
    //       const data = snapshot.val()
    //       var temp = []
    //       for(var key in data)
    //       {
    //         temp.push({
    //            img: data[key].img,
    //            title: data[key].name,
    //          })
    //       }
    //       console.log(temp)
    //       if(temp.length > 0){
    //         this.setState({tileData: temp, present: true})
    //       }
    //     }).catch(error =>{})        
    //   }      
    // }



    firebase.database().ref('uni') 
      .once('value').then(snapshot =>{
        const data = snapshot.val()
        var temp = []
        for(var key in data)
        {
          temp.push({
             img: data[key].img,
             title: data[key].name,
           })
        }
        this.setState({tileData: temp, present: true})
      }).catch(error =>{
        console.log(error)
    })


  }

  render() {
    const { classes } = this.props;
    if(this.state.present){      
      return (
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            </GridListTile>
            {this.state.tileData.map(tile => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  actionIcon={
                    <IconButton className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      );
    }else{
      return (
        <div>
          <Link  component = 'h5' variant = 'h5' onClick = {router.renderSearchUniversityPage}>
            Add here
          </Link>
        </div>
      )
    }
  }

}

YourUniversities.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(YourUniversities);
