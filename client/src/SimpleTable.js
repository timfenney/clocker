import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

function SimpleTable(props) {
    const { classes, events } = props;
    const maybeEvents = events || [];
    // const { classes } = props;
    // const events = [
    //     {
    //         id: 1,
    //         person_id: 1,
    //         type: "clock-in",
    //         created_at: "2019-03-06T01:44:20.753Z",
    //         updated_at: "2019-03-06T01:44:20.753Z",
    //         person: {
    //             id: 1,
    //             name: "Emily",
    //             type: "teacher",
    //             created_at: "2019-03-06T01:44:20.692Z",
    //             updated_at: "2019-03-06T01:44:20.692Z",
    //             clocked_in: false
    //         }
    //     },
    //     {
    //         id: 2,
    //         person_id: 1,
    //         type: "clock-out",
    //         created_at: "2019-03-06T01:44:20.756Z",
    //         updated_at: "2019-03-06T01:44:20.756Z",
    //         person: {
    //             id: 1,
    //             name: "Emily",
    //             type: "teacher",
    //             created_at: "2019-03-06T01:44:20.692Z",
    //             updated_at: "2019-03-06T01:44:20.692Z",
    //             clocked_in: false
    //         }
    //     },
    //     {
    //         id: 3,
    //         person_id: 1,
    //         type: "clock-in",
    //         created_at: "2019-03-06T01:44:20.758Z",
    //         updated_at: "2019-03-06T01:44:20.758Z",
    //         person: {
    //             id: 1,
    //             name: "Emily",
    //             type: "teacher",
    //             created_at: "2019-03-06T01:44:20.692Z",
    //             updated_at: "2019-03-06T01:44:20.692Z",
    //             clocked_in: false
    //         }
    //     }
    // ];

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {maybeEvents.map(e => (
            <TableRow key={e.id}>
              <TableCell component="th" scope="row">
                {e.id}
              </TableCell>
              <TableCell align="right">{e.type}</TableCell>
              <TableCell align="right">{e.created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);