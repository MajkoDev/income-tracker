import React from "react";
import "./incomeform.css";

const IncomeForm = () => {
  return (
    <>
      <form action='submit' className='income-form'>
        <input 
          type='text' 
          name='subject' 
          className='input-subject' 
          placeholder='Description of Income' />
        <input 
          type='number' 
          name='amount' 
          className='input-amount' 
          placeholder='0,00 €' />
        <input 
          type='date' 
          name='date' 
          className='input-date' />
        <button
          type='submit'>Add New Income</button>
      </form>
    </>
  );
};

export default IncomeForm;
