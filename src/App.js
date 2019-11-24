import React, { useState } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import RenderList from './components/RenderList'
import FormAddCurr from './components/FormAddCurrencies'
import FormValue from './components/FormValue'
import './styles.css'

const request = axios.create({
  baseURL: "https://api.exchangeratesapi.io/",
})

const App = () => {
  const [reference] = useState("USD")
  const [value, setValue] = useState(10)
  const [list, setList] = useState([])
  const [isAdd, setIsAdd] = useState(false)
  const [selectedCurr, setSelectedCurr] = useState(null)

  const onClickAdd = () => {
    setIsAdd(true)
  }

  const onChangeAddCurr = (event) => {
    setSelectedCurr(event.target.value)
  }

  const onClickMinus = (row) => {
    const newList = list.filter(val => {
      return val.currency !== row.currency
    })

    setList(newList)
  }

  const onChangeValue = e => {
    console.log(e)
    setValue(e.target.value)
  }

  const onSubmit = async () => {
    const result = await request.get('/latest', {
      params: {
        base: reference,
        symbols: selectedCurr
      }
    })

    const newList = list
    newList.push({
      currency: selectedCurr,
      value: result.data.rates[selectedCurr]
    })

    setList(newList)
    setIsAdd(false)
    setSelectedCurr(null)
  }

  return (
    <div className="body">
      <div className="content" >
        <div className="content-header" >
          <Grid container spacing={3} >
            <Grid className="content-header-upper" item md={12} >
              USD - United States Dollars
            </Grid>
          </Grid>
          <Grid container spacing={3} >
            <Grid item md={6} >
              USD
            </Grid>
            <Grid className="text-right" item md={6} >
              <FormValue value={value} onChange={onChangeValue} />
            </Grid>
          </Grid>
        </div>
        <div className="content-body" >
          <RenderList list={list} value={value} onClickMinus={onClickMinus} />
        </div>
        <div className="content-footer" >
          {isAdd ? (
            <FormAddCurr value={selectedCurr} onChange={onChangeAddCurr} onSubmit={onSubmit} list={list} />
          ) : (
            <Button onClick={onClickAdd} variant="outlined" color="default" fullWidth >
              (+) Add More Currencies
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
