import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const Search = () => {
  const { searchUser, clearUser, users, alertSearch } = useContext(
    GlobalContext
  );

  const [change, setChange] = useState('');

  function handleChange(event) {
    setChange(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (change === '') alertSearch(' Please type a username');
    else {
      searchUser(change);
      setChange('');
    }
  }
  function handleClick() {
    clearUser();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className='search'
          type='text'
          placeholder='Search Users...'
          value={change}
        />
        <br />
        <button
          style={{
            backgroundColor: 'black',
            fontSize: '20px',
            width: '100%',
            color: 'white',
          }}
        >
          Search
        </button>
      </form>
      {!users.length > 0 ? (
        <button
          id='clear'
          onClick={handleClick}
          style={{
            marginTop: '20px',
            backgroundColor: 'grey',
            fontSize: '20px',
            width: '100%',
            color: 'black',
            border: 'none',
            display: 'none',
          }}
        >
          Clear
        </button>
      ) : (
        <button
          id='clear'
          onClick={handleClick}
          style={{
            marginTop: '20px',
            backgroundColor: 'grey',
            fontSize: '20px',
            width: '100%',
            color: 'black',
            border: 'none',
          }}
        >
          Clear
        </button>
      )}
    </div>
  );
};
export default Search;
