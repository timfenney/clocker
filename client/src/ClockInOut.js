import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import IntegrationReactSelect from './IntegrationReactSelect';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const buttonLabelForPerson = (person) => {
  if (!person) {
    return 'Clock In / Out';
  }
  if (person.clocked_in) {
    return 'Clock Out';
  } else {
    return 'Clock In';
  }
};

const actionDescriptionForPerson = (person) => {
  if (!person) {
    return 'Start typing a name and choose a person to begin.';
  }
  if (person.clocked_in) {
    return `${person.name} is currently clocked in. Clock ${person.name} out?`;
  } else {
    return `${person.name} is currently clocked out. Clock ${person.name} in?`;
  }
}

const clockInOut = (url, options, callback) => {
  window.fetch(url, options)
      .then(response => response.json())
      .then(data => {
          callback(data.person);
      })
      .catch(error => console.log(error));
}

class ClockInOut extends React.Component {
  constructor(props) {
    super(props);
    this.myClockInOut = this.myClockInOut.bind(this);
  }

  myClockInOut() {
    const { person, onSelectPerson } = this.props;
    const operation = person.clocked_in ? 'clock-out' : 'clock-in';
    const url = '/api/events';
    const options = {
      method: 'POST',
      body: JSON.stringify({
        event: {
          person_id: person.id,
          type: operation
        }
      }),
      headers: {'Content-Type': 'application/json'}
    };

    return clockInOut(url, options, onSelectPerson);
  };

  render() {
    const { person, classes, onSelectPerson, onViewLog } = this.props;
    return (
        <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Clock In / Out
            </Typography>
            <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
                <IntegrationReactSelect onSelectPerson={onSelectPerson} />
            </FormControl>
            <p>{actionDescriptionForPerson(person)}</p>
            <Button
                disabled={!person}
                onClick={this.myClockInOut}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
            { buttonLabelForPerson(person) }
            </Button>
              <Button
                onClick={onViewLog}
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                View Log
              </Button>
            </form>
        </Paper>
        </main>
    );
  }
}

ClockInOut.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClockInOut);