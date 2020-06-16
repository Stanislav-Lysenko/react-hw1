import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line
import App from './App';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line
const presidentsArray = ['George Washington', 'John Adams', 'Thomas Jefferson', 'James Madison', 'James Monroe',
'John Quincy Adams', 'Andrew Jackson', 'Martin Van Buren', 'William Henry Harrison', 'John Tyler', 'James K. Polk', 'Zachary Taylor',
'Millard Fillmore', 'Franklin Pierce', 'James Buchanan'
];

  const listUI = <ul key="1">
    <li>George Washington</li>
    <li>John Adams</li>
    <li>Thomas Jefferson</li>
  </ul>

  const listUInumeric = <ol key="2" start="4">
    <li>James Madison</li>
    <li>James Monroe</li>
    <li>John Quincy Adams</li>
  </ol>

  const renderUnnumericList = () => {
    const styles = {
      backgroundColor: '#ddd',
      paddingTop: '1em',
      paddingBottom: '1em',
      fontWeight: 'bold',
    }

    const presidentsArray = [
      'Andrew Jackson', 'Martin Van Buren', 'William Henry Harrison'
    ];

    return (
      <ul key="4">
        {presidentsArray.map((president)=> (
          <li key={president} style={styles}>{president}</li>
        ))}
      </ul>
    )
  }

  const renderOddList = () => {
    const fullName = (president) => {
      return `${president.firstName} ${president.lastName}`
    }

    const presidentsArray = [
      {firstName: 'John', lastName: 'Tyler', presidentIndex: 10},
      {firstName: 'James', lastName: 'Polk', presidentIndex: 11},
      {firstName: 'Millard', lastName: 'Taylor', presidentIndex: 12},
      {firstName: 'Zachary', lastName: 'Fillmore', presidentIndex: 13},
    ];

    return (
      <ul key='5'>
        {presidentsArray.filter((president) => president.presidentIndex % 2 !== 0)
          .map(president => <li key={president.presidentIndex}>{fullName(president)}</li>
        )}
      </ul>
    )
  }



ReactDOM.render([
  listUI,
  listUInumeric,
  renderUnnumericList(),
  renderOddList(),
],

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
