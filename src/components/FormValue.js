import React from 'react'
import NumberFormat from 'react-number-format'
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'

const NumberFormatCustom = ({ inputRef, onChange, ...other }) => {
  console.log({ inputRef, onChange, ...other })
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        })
      }}
      thousandSeparator
      decimalScale={4}
      isNumericString
    />
  )
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

const FormValue = ({ value, onChange }) => {
  console.log({ value, onChange })
  return (
    <TextField
      value={value}
      onChange={onChange}
      id="formatted-numberformat-input"
      InputProps={{
        inputComponent: NumberFormatCustom  
      }}
    />
  )
}

export default FormValue