import React from 'react'
import { CssBaseline, Grid } from '@mui/material'

import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import Login from './components/login'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={4}>
          <Map />
        </Grid>
      </Grid>
      <Login />
    </>
  )
}

export default App
