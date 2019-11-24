import React from 'react'
import Grid from '@material-ui/core/Grid';
import NumberFormat from 'react-number-format';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { description } from '../vals'

const RenderList = ({ list, value, onClickMinus }) => {
  if (list.length) {
    return (
      <div >
        {list.map(element => (
          <Grid key={element.currency} className="content-body-list" container >
            <Grid className="content-body-list-left" item md={10} >
              <Grid container >
                <Grid item md={6} >
                  {element.currency}
                </Grid>
                <Grid className="text-right" item md={6} >
                  <NumberFormat
                    value={element.value * value}
                    displayType="text"
                    decimalScale={4}
                    decimalSeparator="."
                    thousandSeparator=","
                  />
                </Grid>
              </Grid>
              <Grid container >
                <Grid className="content-body-list-desc" item md={12} >
                  {description[element.currency]}
                </Grid>
              </Grid>
              <Grid container >
                <Grid className="content-body-list-desc" item md={12} >
                  1 USD ={' '}
                  <NumberFormat
                    value={element.value}
                    prefix={`${element.currency} `}
                    decimalScale={4}
                    decimalSeparator="."
                    thousandSeparator=","
                    displayType="text"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid className="content-body-list-right" item md={2} >
              <IconButton size="small" onClick={() => onClickMinus(element)} aria-label="delete">
                (-)
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </div>
    )
  }

  return (
    <div className="no-data" >
      NO DATA
    </div>
  )
}

export default RenderList