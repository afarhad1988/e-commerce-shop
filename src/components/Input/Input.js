import React from 'react'
import styled from 'styled-components'

const InputElement = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
`
const InputGroup = styled.div`
  margin-bottom: 20px;
`
const Input = ({ formik, id, type, placeholder }) => (
  <div>
    <InputGroup>
      <InputElement
        placeholder={placeholder}
        type={type}
        id={id}
        {...formik.getFieldProps(id)}
      />
      {formik.touched[id] && formik.errors[id] ? (
        <div>{formik.errors[id]}</div>
      ) : null}
    </InputGroup>
  </div>
)

export default Input
