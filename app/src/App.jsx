import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { InputTodo } from './components/inputTodo';
import { InCompleteArea } from './components/inCompleteArea';
import { CompleteArea } from './components/CompleteArea';

export const App = () => {
   const [editing, setEditing] = useState(-1);
   const [editText, setEditText] = useState ('');
   const [todoText, setTodoText] = useState('');
   const [incompleteTodos, setIncompleteTodos] = useState(['aaaa','iiii']);
   const [completeTodos, setCompleteTodos] = useState(['uuuu']);

   const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
   };

   const onChangeEditText = (event) => {
    setEditText(event.target.value);
   };

   const onClickAdd = () => {
     if (todoText === '') return;
     if (incompleteTodos.length >= 5){
       
     }
     const newTodos = [...incompleteTodos, todoText];
     setIncompleteTodos(newTodos);
     setTodoText('');
   };

   const onClickDelete = (index) => {
     //setIncompleteTodos(incompleteTodos);
     const newTodos = [...incompleteTodos];
     newTodos.splice(index,1);
     setIncompleteTodos(newTodos);
   };

   const onClickComplete = (index) => {
    const newInCompleteTodos = [...incompleteTodos];
    newInCompleteTodos.splice(index,1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
   };

   const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);
    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newInCompleteTodos);
    setCompleteTodos(newCompleteTodos);
   };

   const onClickEdit = (index) => {
    setEditing(index);
    setEditText(incompleteTodos[index]);
   };

   return (
    <>
      <InputTodo 
        todoText={todoText} 
        disabled={incompleteTodos.length >= 5} 
        onChange={onChangeTodoText} 
        onClick={onClickAdd} />
      {incompleteTodos.length >= 5 && (
         <p style={{color:"red"}}>登録できる件数は最大5件です</p>
      )}
      <InCompleteArea 
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete} 
        onClickEdit={onClickEdit} 
        onChangeEditText={onChangeEditText}
        editing={editing}
        editText={editText} />
      <CompleteArea completeTodos={completeTodos} onClickReturn={onClickReturn} />
    </>
   );
}
