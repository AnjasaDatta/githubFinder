import React from 'react';
const RepoItem = ({ repo }) => {
  return (
    <div className='card text-center'>
      <p>{repo}</p>
    </div>
  );
};

export default RepoItem;
