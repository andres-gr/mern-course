import React, {
  FC,
  FormEvent,
  useContext,
  useState,
} from 'react'
import { css } from '@emotion/core'
import Card from 'Components/Card'
import Input from 'Components/Input'
import Button from 'Components/Button'
import useForm from 'Hooks/useForm'
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from 'Utils/validators'
import AuthContext from 'Api/context/auth'

const authCSS = css`
  margin: 7rem auto;
  max-width: 25rem;
  text-align: center;
  width: 90%;

  .header {
    color: white;
    text-align: center;
  }

  form {
    margin-bottom: 1rem;
  }
`

const Auth: FC = () => {
  const auth = useContext(AuthContext)

  const [
    login,
    setLogin,
  ] = useState(true)

  const {
    handleInput,
    handleUpdate,
    state,
  } = useForm({
    inputs: {
      email: {
        isValid : false,
        value   : '',
      },
      password: {
        isValid : false,
        value   : '',
      },
    },
    isValid: false,
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('login', state)
    auth.login()
  }

  const handleSwitch = () => {
    if (!login) {
      handleUpdate({
        inputs: {
          email    : state.inputs.email,
          password : state.inputs.password,
        },
        isValid: state.inputs.email.isValid && state.inputs.password.isValid,
      })
      return setLogin(prev => !prev)
    }
    handleUpdate({
      inputs: {
        ...state.inputs,
        name: {
          isValid : false,
          value   : '',
        },
      },
      isValid: false,
    })
    setLogin(prev => !prev)
  }

  return (
    <Card css={ authCSS }>
      <h2>Login required</h2>
      <hr />
      <form onSubmit={ handleSubmit }>
        {
          !login && (
            <Input
              errorMessage="Enter a valid name"
              id="name"
              label="Name"
              placeholder="Name"
              type="name"
              validators={ [VALIDATOR_REQUIRE()] }
              onInput={ handleInput }
            />
          )
        }
        <Input
          errorMessage="Enter a valid email"
          id="email"
          label="Email"
          placeholder="Email"
          type="email"
          validators={ [VALIDATOR_EMAIL()] }
          onInput={ handleInput }
        />
        <Input
          errorMessage="Enter a valid pass, min 5"
          id="password"
          label="Password"
          placeholder="Password"
          type="password"
          validators={ [VALIDATOR_MINLENGTH(5)] }
          onInput={ handleInput }
        />
        <Button
          disabled={ !state.isValid }
          type="submit"
        >
          { login ? 'LOGIN' : 'SIGNUP' }
        </Button>
      </form>
      <Button
        inverse
        onClick={ handleSwitch }
      >
        SWITCH TO { login ? 'SIGNUP' : 'LOGIN' }
      </Button>
    </Card>
  )
}

export default Auth
