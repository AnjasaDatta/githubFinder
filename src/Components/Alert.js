import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
const Alert = () => {
  const { alert } = useContext(GlobalContext);
  return (
    alert !== null && (
      <div className='alert'>
        <div className=' alert-light'>
          <i className='fas fa-info-circle'> {alert}</i>
        </div>
      </div>
    )
  );
};
export default Alert;
