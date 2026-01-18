import React from 'react'

const Counts = ({ label, count }) => {
  return (
    <div className='text-center'>
      <strong>{count}</strong>
      <p>{label}</p>
    </div>
  );
};

export default Counts