import React from 'react'

import Cards from './components/Cards/Cards'

import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.container}>
      <Cards label="# casos confirmados" value={9058687} />
      <Cards label="# casos ativos" value={857627} />
      <Cards label="# mortes" value={221547} />
      <Cards label="# recuperados" value={7979513} />
    </div>
  )
}

export default App
