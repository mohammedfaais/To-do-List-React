import React, { useEffect, useState } from 'react';
import { Button, TextField, Grid, Input } from '@material-ui/core';
import { db } from './services/firebase';
import firebase from 'firebase';

// import firebase from './firebase';

const Todo = () => {
  const [todo, todoValue] = useState([]);
  const [input, inputValue] = useState('');

  useEffect(() => {
    // db.collection('todos').onSnapshot((snapshot) => {
    //   console.log(snapshot.docs.map((doc) => doc.data()));
    // todoValue(snapshot.docs.map((doc) => doc.data().todo))
    // });
    db.collection('todos').onSnapshot((snapshot) => {
      todoValue(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);
  // useEffect(() => {
  //   db.collection('todos')
  //     .orderBy('timestamp', 'desc')
  //     .onSnapshot((snapshot) => {
  //       todoValue(snapshot.docs.map((doc) => doc.data().todo));
  //     });
  // }, []);

  const inputSubmit = (e) => {
    e.preventDefault();
    // todoValue([...todo, input]);
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    inputValue('');
  };

  // const inputSubmit = (e) => {
  //   e.preventDefault();
  //   todoValue([...todo, input]);
  //   inputValue('');
  // };

  return (
    <div>
      <h1>To-Do List</h1>
      <form>
        <TextField
          value={input}
          onChange={(e) => inputValue(e.target.value)}
          id='standard-basic'
          label='Add a List'
        />
        <Button
          type='submit'
          onClick={inputSubmit}
          variant='contained'
          color='secondary'
        >
          Add To DO
        </Button>
      </form>
      <ul>
        {todo.map((todos) => (
          <li>{todos}</li>
        ))}
        {/* <li>Work-out</li>
        <li>Coding</li>
        <li>Eating</li> */}
      </ul>
    </div>
  );
};

export default Todo;
