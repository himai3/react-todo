import React from 'react';

export const InCompleteArea = (props) => {
  const {
    incompleteTodos, 
    onClickComplete, 
    onClickDelete, 
    onClickEdit,
    onChangeEditText, 
    editing,
    editText} = props;

  const style = {
    backgroundColor: '#c6ffe2',
    width: '400px',
    minHeight: '200px',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px'
  };
  return (
    <div style={style}>
    <p className='title'>未完了のTODO</p>
    <ul>
      {incompleteTodos.map((todo,index) => {
        return (
          <div key={todo} className='list-row'>
            <li>
              {editing > 0 && index === editing && (
              <input value={editText} onChange={onChangeEditText} />
            )} {todo}</li>
            <button onClick={() => onClickComplete(index)}>完了</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
            <button onClick={() => onClickEdit(index)}>編集</button>
          </div>
        );
      })}
    </ul>
  </div>
  );
};