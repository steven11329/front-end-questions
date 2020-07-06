import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../assets/css/Question1.css';

const defaultData = [{ name: 'input1' }, { name: 'input2' }];

let count = 2;
const code = `
const defaultData = [{ name: 'input1' }, { name: 'input2' }];

let count = 2;

function Question1() {
  const [data, setData] = useState(defaultData);

  function addData() {
    setData([{ name: \`input\${count + 1}\` }, ...data]);
    count += 1;
  }

  const items = data.map((d, index) => (
    <Item key={\`item-\${index}\`} name={d.name} />
  ));

  return (
    <div className="Question1">
      Q1
      {items}
      <button type="button" onClick={addData}>
        Add a input
      </button>
    </div>
  );
}

function Item({ name }) {
  return (
    <div className="form-group">
      <label htmlFor={\`item-\${name}\`}>{name}</label>
      <div id={\`item-\${name}\`}>
        <input type="text" className="form-control" />
      </div>
    </div>
  );
}
`;

function Question1() {
  const [data, setData] = useState(defaultData);

  function addData() {
    setData([{ name: `input${count + 1}` }, ...data]);
    count += 1;
  }

  const items = data.map((d, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Item key={`item-${index}`} name={d.name} />
  ));

  return (
    <div className="Question1">
      <h1>Q1</h1>
      {items}
      <button type="button" onClick={addData}>
        Add a input
      </button>
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

function Item({ name }) {
  return (
    <div className="form-group">
      <label htmlFor={`item-${name}`}>{name}</label>
      <div id={`item-${name}`}>
        <input type="text" className="form-control" />
      </div>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Question1;
