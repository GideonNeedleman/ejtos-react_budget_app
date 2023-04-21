import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget } = useContext(AppContext);
    const handleChange = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: budget,
        });
    }
    let newBudget = 2000;

    return (
        <div className='alert alert-secondary'>
            {/* <span>Budget: £{budget}</span> */}
            <label htmlFor="bud">£</label>
            <input type="number" name="bud" id="bud" defaultValue="200" step={10} onChange={handleChange}/>
            {/* this isn't working, reference how to enter allocation in AllocationForm.js line 68 */}
        </div>
    );
};
export default Budget;