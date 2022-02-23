import React from "react";

const IncomeForm = () => {
  return (
    <>
      <form action='submit' className='income-form'>
        <input type='text' name='subject' placeholder='Description of Income' />
        <input type='number' name='amount' placeholder='0,00 €' />
        <input type='date' name='date' />
        <button type='submit'>Add New Income</button>
      </form>
    </>
  );
};

export default IncomeForm;
