import React from 'react'
import './header.css'

const Header = ({totalIncome}) => {
  return (
    <header>
        <h1 className="header">Income Tracker</h1>
        <h1 className="total-income">{totalIncome} €</h1>
    </header>
  )
}

export default Header