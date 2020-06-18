import React from 'react';
import ReactDOM from 'react-dom';
import { fetchData } from './fetchData';
import Moment from 'moment';
import './index.css';
// eslint-disable-next-line
import App from './App';
import * as serviceWorker from './serviceWorker';

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

  const eventsList = () => {
    const events = fetchData();
    const eventsParsed = JSON.parse(events);

    const sortByDate = (eventA, eventB) => {
      return Date.parse(eventA.date) - Date.parse(eventB.date);
    }

    const getDayPeriod = (hours) => {
      if (hours >= 5 && hours < 11 ) {
        return 'Утро';
      }
      if (hours >= 11 && hours < 17 ) {
        return 'День';
      }
      if (hours >= 17 && hours < 21 ) {
        return 'Вечер';
      } else {
        return 'Ночь';
      }
    }
    return (
      <ul key='6'>
        {eventsParsed.sort(sortByDate)
          .map((event) => (
            //{Date.parse(event.date) < new Date? <li key={event.id} style='color: gray'> : <li key={event.id}>}
            <li key={event.id}>
              <p><a href={'https://www.facebook.com/events/' + event.id} rel="noopener noreferrer" target="_blank">{event.title}</a></p>
              <p>{getDayPeriod((new Date(Date.parse(event.date))).getHours())}, {Moment(event.date).format('L , hh:mm:ss')}</p>
              <p>{event.place}</p>
            </li>)
          )}
      </ul>
    )
  }



ReactDOM.render([
  listUI,
  listUInumeric,
  renderUnnumericList(),
  renderOddList(),
  eventsList(),
],

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
