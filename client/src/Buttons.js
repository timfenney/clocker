import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function Buttons(props) {
    const { classes, handleClick } = props;
    return (
      <div>
        <Fab onClick={handleClick} variant="extended" aria-label="Delete" className={classes.fab}>
          <ArrowBackIcon className={classes.extendedIcon} />
          Go Back
        </Fab>
      </div>
    );
  }
  
  Buttons.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Buttons);