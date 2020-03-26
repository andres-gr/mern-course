import React from 'react'
import styled from '@emotion/styled'
import Input from 'Components/Input'

const Form = styled.form`
  background: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  list-style: none;
  margin: 0 auto;
  max-width: 40rem;
  padding: 1rem;
  width: 90%;
`

const NewPlace = () => (
  <Form>
    <Input
      id="title"
      label="Title"
      placeholder="Title"
    />
  </Form>
)

export default NewPlace
