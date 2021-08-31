// import React, { useState } from 'react';
// import { Button, TextField, Grid } from '@material-ui/core';
// import '@fontsource/roboto';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// const Todo = () => {
//   const [todo, inputAdd] = useState();
//   const addTodo = (e) => {
//     console.log('clicked');
//   };
//   const classes = useStyles();
//   const [checked, setChecked] = React.useState([0]);
//   const []

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };
//   // console.log();
//   return (
//     <div className='App'>
//       <h1>To-Do List</h1>
//       <form noValidate autoComplete='off'>
//         <TextField id='standard-basic' label='Add a List' />
//         {/* <input value={todo} onChange={(e) => inputAdd(e.target.value)} /> */}
//         {/* <button onClick={addTodo}>Add To-do</button> */}
//         <Button onClick={addTodo} variant='contained' color='secondary'>
//           Add To-do
//         </Button>
//       </form>
//       <Grid
//         container
//         spacing={0}
//         direction='column'
//         alignItems='center'
//         justify='center'
//         // style={{ minHeight: '100vh' }}
//       >
//         <List className={classes.root}>
//           {['work-out', 'coding', 'eating', 'sleeping'].map((value) => {
//             const labelId = `checkbox-list-label-${value}`;

//             return (
//               <ListItem
//                 key={value}
//                 role={undefined}
//                 dense
//                 button
//                 onClick={handleToggle(value)}
//               >
//                 <ListItemIcon>
//                   <Checkbox
//                     edge='start'
//                     checked={checked.indexOf(value) !== -1}
//                     tabIndex={-1}
//                     disableRipple
//                     inputProps={{ 'aria-labelledby': labelId }}
//                   />
//                 </ListItemIcon>
//                 <ListItemText id={labelId} primary={` ${value}`} />
//                 <ListItemSecondaryAction>
//                   <IconButton edge='end' aria-label='comments'>
//                     <DeleteIcon className={classes.icon} />
//                   </IconButton>
//                 </ListItemSecondaryAction>
//               </ListItem>
//             );
//           })}
//         </List>
//       </Grid>
//     </div>
//   );
// }

// export default Todo;
