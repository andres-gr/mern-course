import React, { FormEvent } from 'react'
import useForm from 'Hooks/useForm'
import Input from 'Components/Input'
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from 'Utils/validators'
import Button from 'Components/Button'
import { Form } from '../styles'

const NewPlace = () => {
  const {
    handleInput,
    state,
  } = useForm()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('form submit', state)
  }

  return (
    <Form onSubmit={ handleSubmit }>
      <Input
        errorMessage="Add a title"
        id="title"
        label="Title"
        placeholder="Title"
        validators={ [VALIDATOR_REQUIRE()] }
        onInput={ handleInput }
      />
      <Input
        errorMessage="Add a description, min 5"
        id="description"
        label="Description"
        placeholder="Description"
        type="textarea"
        validators={
          [
            VALIDATOR_REQUIRE(),
            VALIDATOR_MINLENGTH(5),
          ]
        }
        onInput={ handleInput }
      />
      <Input
        errorMessage="Add a valid address"
        id="address"
        label="Address"
        placeholder="Address"
        validators={ [VALIDATOR_REQUIRE()] }
        onInput={ handleInput }
      />
      <Button
        disabled={ !state.isValid }
        type="submit"
      >
        ADD PLACE
      </Button>
    </Form>
  )
}

export default NewPlace
