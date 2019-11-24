import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { currencies } from '../vals'

const FormAddCurrencies = ({ value, onChange, onSubmit, list }) => {
  const newCurrencies = currencies.filter(val => {
    let flag = true
    list.forEach(element => {
      if (element.currency === val) {
        flag = false
      }
    })

    return flag
  })

  console.log(newCurrencies)

  return(
    <Grid container >
      <Grid item md={8} spacing={2} >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          fullWidth
          value={value}
          onChange={onChange}
        >
          {newCurrencies.map(currency => (
            <MenuItem key={currency} value={currency}>{currency}</MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item md={4} >
        <Button onClick={onSubmit} variant="outlined" color="default" fullWidth >
          Submit
        </Button>
      </Grid>
    </Grid>
  )
}

export default FormAddCurrencies
