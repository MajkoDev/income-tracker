import React, { useRef } from "react";
import "./incomeform.css";

const IncomeForm = ({ income, setIncome }) => {
  const subject = useRef(null);

  const price = useRef(null);
  const date = useRef(null);

  const AddIncome = (e) => {
    e.preventDefault();

    let d = date.current.value.split("-")
        let newD = new Date(d[0], d[1], d[2])

        setIncome([...income, {
            "subject": subject.current.value,
            "price": price.current.value,
            "date": newD.getTime()
        }])

        // Reset values
        subject.current.value = ""
        price.current.value = null
        date.current.value = null
  };


  return (
    <form className='income-form' onSubmit={AddIncome}>
      <input
        type='text'
        name='subject'
        id='subject'
        ref={subject}
        className='input-subject'
        placeholder='Description of Income'
      />

      <div>
        <input
          type='number'
          name='price'
          id='price'
          ref={price}
          className='input-price'
          placeholder='0,00 €'
        />
        <input
          type='date'
          name='date'
          id='date'
          ref={date}
          className='input-date'
        />
      </div>

      <button type='submit' className='btn-submit'>
        Add New Income
      </button>
    </form>
  );
};

export default IncomeForm;
