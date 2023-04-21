import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

  const changeCurrency = (val)=>{
          dispatch({
              type: 'CHG_CURRENCY',
              payload: val,
          })
  }
    

  return (
    <div className='alert alert-secondary' style={{marginLeft: '1rem' , backgroundColor:'#00cc66', color:'white'}}> Currency 
      <select style={{border: 0, backgroundColor:'#00cc66', color:'white'}} name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="£">£ Pound</option>
        <option value="₹">₹ Rupee</option>
        <option value="€">€ Euro</option>
        <option value="CAD">$ Dollar</option>
      </select>	
    </div>
    );
};

export default Currency;