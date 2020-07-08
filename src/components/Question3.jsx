import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { addItemToArray } from '../actions/Question3Action';

const question3ComponentCode = `// Question3.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToArray } from '../actions/Question3Action';

let count = 2;

function Question3() {
  const dispatch = useDispatch();
  const list = useSelector(store => store.question3);
  const itemComponents = list.map((item, index) => (
    <li key={\`item-\${index}\`}>{item.name}</li>newState
    newState
    newState
  ));

  function addItem() {
    console.log('addItem click');
    count += 1;
    dispatch(
      addItemToArray({
        name: \`item\${count}\`,
      })
    );
  }

  return (
    <div className="Question3">
      <button type="button" onClick={addItem}>
        Add item
      </button>
      <ul>{itemComponents}</ul>
    </div>
  );
}

export default Question3;
`;
const question3ActionCode = `// Question3Action.js
import { QUESTION3_ADD_ITEM_TO_LIST } from '../types';

export const addItemToArray = item => {
  return { type: QUESTION3_ADD_ITEM_TO_LIST, item };
};

export default {
  addItemToArray,
};

`;
const question3ReducerCode = `// Question3Reducer.js
import { QUESTION3_ADD_ITEM_TO_LIST } from '../types';

const INITIAL_STATE = { list: [{ name: 'item1' }, { name: 'item2' }] };

export default function (state = INITIAL_STATE, action) {
  const newState = state;
  switch (action.type) {
    case QUESTION3_ADD_ITEM_TO_LIST:
      newState.list.push(action.item);
      return newState;
    default:
      return state;
  }
}
`;

let count = 2;

function Question3() {
  const dispatch = useDispatch();
  const list = useSelector(store => store.question3);
  const itemComponents = list.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={`item-${index}`}>{item.name}</li>
  ));

  function addItem() {
    console.log('addItem click');
    count += 1;
    dispatch(
      addItemToArray({
        name: `item${count}`,
      })
    );
  }

  return (
    <div className="Question3">
      <h1>Q3</h1>
      <button type="button" onClick={addItem}>
        Add item
      </button>
      <ul>{itemComponents}</ul>
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {question3ComponentCode}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {question3ActionCode}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {question3ReducerCode}
      </SyntaxHighlighter>
    </div>
  );
}

export default Question3;
