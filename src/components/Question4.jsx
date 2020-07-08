import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const question4ComponentCode = `// Question4.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function heavyProcess() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 200);
  });
}

function Question4() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    about: '',
  });

  async function handleOnChangeFormData(data) {
    await heavyProcess();
    setFormData(data);
  }

  return (
    <div className="Question4">
      <h1>Q4</h1>
      <Form formData={formData} onChange={handleOnChangeFormData} />
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {question4ComponentCode}
      </SyntaxHighlighter>
    </div>
  );
}

function Form({ formData, onChange }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [about, setAbout] = useState('');

  function handleOnChange(e) {
    const { name, value } = e.target;
    const data = {
      firstName,
      lastName,
      address,
      about,
      [name]: value,
    };

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'about':
        setAbout(value);
        break;
      default:
    }

    onChange(data);
  }

  useEffect(() => {
    setFirstName(formData.firstName);
    setLastName(formData.lastName);
    setAddress(formData.address);
    setAbout(formData.about);
  }, [formData]);

  return (
    <form>
      <div>
        <label htmlFor="firstName">
          {'First Name: '}
          <input
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleOnChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          {'Last Name: '}
          <input
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleOnChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="address">
          {'Address: '}
          <input
            id="address"
            name="address"
            value={address}
            onChange={handleOnChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="about">
          {'About: '}
          <input
            id="about"
            name="about"
            value={about}
            onChange={handleOnChange}
          />
        </label>
      </div>
    </form>
  );
}

export default Question4;
`;

function heavyProcess() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 200);
  });
}

function Question4() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    about: '',
  });

  async function handleOnChangeFormData(data) {
    await heavyProcess();
    setFormData(data);
  }

  return (
    <div className="Question4">
      <h1>Q4</h1>
      <Form formData={formData} onChange={handleOnChangeFormData} />
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {question4ComponentCode}
      </SyntaxHighlighter>
    </div>
  );
}

function Form({ formData, onChange }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [about, setAbout] = useState('');

  function handleOnChange(e) {
    const { name, value } = e.target;
    const data = {
      firstName,
      lastName,
      address,
      about,
      [name]: value,
    };

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'about':
        setAbout(value);
        break;
      default:
    }

    onChange(data);
  }

  useEffect(() => {
    setFirstName(formData.firstName);
    setLastName(formData.lastName);
    setAddress(formData.address);
    setAbout(formData.about);
  }, [formData]);

  return (
    <form>
      <div>
        <label htmlFor="firstName">
          {'First Name: '}
          <input
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleOnChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          {'Last Name: '}
          <input
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleOnChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="address">
          {'Address: '}
          <input
            id="address"
            name="address"
            value={address}
            onChange={handleOnChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="about">
          {'About: '}
          <input
            id="about"
            name="about"
            value={about}
            onChange={handleOnChange}
          />
        </label>
      </div>
    </form>
  );
}

Form.propTypes = {
  formData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    about: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Question4;
