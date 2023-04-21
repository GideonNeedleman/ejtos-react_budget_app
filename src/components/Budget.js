import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		if (val>20000) {
            alert("You cannot set a budget larger than 20,000")
        } else if(val<totalExpenses) {
			alert("You cannot reduce the budget that is already allocated!");
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	}
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input style={{width: '150px'}} type="number" name="" id="" step="10" value={budget} onChange={(event)=>changeBudget(event.target.value)}/></span>
        </div>
    );
};
export default Budget;