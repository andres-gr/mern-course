import React, {
  FC,
  FormEvent,
  useMemo,
} from 'react'
import { useParams } from 'react-router-dom'
import Button from 'Components/Button'
import Input from 'Components/Input'
import useForm from 'Hooks/useForm'
import { PLACES } from 'Utils/mockStore'
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from 'Utils/validators'
import { Form } from '../styles'

interface UpdatePlaceParams {
  placeId: string
}

const UpdatePlace: FC<{}> = () => {
  const params = useParams<UpdatePlaceParams>()

  const place = useMemo(() => PLACES.find(({ id }) => id === params.placeId), [params.placeId])

  const {
    handleInput,
    state,
  } = useForm(() => {
    if (!place) return
    return {
      inputs: {
        description: {
          isValid : !!place.description,
          value   : place.description || '',
        },
        title: {
          isValid : !!place.title,
          value   : place.title,
        },
      },
      isValid: true,
    }
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('place update', state)
  }

  if (!place) {
    return (
      <div className="center">
        <h2>No place found</h2>
      </div>
    )
  }

  return (
    <Form onSubmit={ handleSubmit }>
      <Input
        errorMessage="Add a title"
        id="title"
        isValid={ state.inputs.title.isValid }
        label="Title"
        placeholder="Title"
        validators={ [VALIDATOR_REQUIRE()] }
        value={ state.inputs.title.value }
        onInput={ handleInput }
      />
      <Input
        errorMessage="Add a description"
        id="description"
        isValid={ state.inputs.description.isValid }
        label="Description"
        placeholder="Description"
        type="textarea"
        validators={ [VALIDATOR_MINLENGTH(5)] }
        value={ state.inputs.description.value }
        onInput={ handleInput }
      />
      <Button
        disabled={ !state.isValid }
        type="submit"
      >
        UPDATE PLACE
      </Button>
    </Form>
  )
}

export default UpdatePlace
