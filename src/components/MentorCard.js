import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const styles = theme => ({
  card: {
    maxWidth: 400,
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  media: {
    height: 140,
  },
});


class MentorCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {

      open : false,
      data : this.props.data
    }
    this.handleClickOpen = this.handleClickOpen.bind(this)
  }

  handleClickOpen = () => {
      this.setState({ open: true });
    };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(){
    const { classes } = this.props;
    return (
      <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="http://www.jennehill.com/images/medium/bfde189db9dad542cc54cac29d6160dc-800x500.jpg"
            title="Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.data.name}
            </Typography>
            <Typography gutterBottom variant="p" component="h3" color='default'>
              {this.state.data.uni}
            </Typography>
            <Typography component="p">
              {this.state.data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={this.handleClickOpen} size="large" color="primary">
            Connect
          </Button>
        </CardActions>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Mentor Details"}</DialogTitle>
          <DialogContent>




          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
      </div>
    );
  }
}

MentorCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MentorCard);
