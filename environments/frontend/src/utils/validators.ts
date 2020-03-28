export interface Validator {
  type: ValidatorTypes
  val?: number
}

enum ValidatorTypes {
  EMAIL = 'EMAIL',
  FILE = 'FILE',
  MAX = 'MAX',
  MAXLENGTH = 'MAXLENGTH',
  MIN = 'MIN',
  MINLENGTH = 'MINLENGTH',
  REQUIRE = 'REQUIRE',
}

interface ValidatorFn {
  (val?: number): Validator
}

const VALIDATOR_REQUIRE: ValidatorFn = () => ({ type: ValidatorTypes.REQUIRE })

const VALIDATOR_FILE: ValidatorFn = () => ({ type: ValidatorTypes.FILE })

const VALIDATOR_MINLENGTH: ValidatorFn = val => ({
  type: ValidatorTypes.MINLENGTH,
  val,
})

const VALIDATOR_MAXLENGTH: ValidatorFn = val => ({
  type: ValidatorTypes.MAXLENGTH,
  val,
})

const VALIDATOR_MIN: ValidatorFn = val => ({
  type: ValidatorTypes.MIN,
  val,
})

const VALIDATOR_MAX: ValidatorFn = val => ({
  type: ValidatorTypes.MAX,
  val,
})

const VALIDATOR_EMAIL: ValidatorFn = () => ({ type: ValidatorTypes.EMAIL })

const validate = (value: string, validators: Validator[]): boolean => {
  const valid = validators.reduce((
    prev,
    {
      type,
      val,
    },
  ) => {
    let isValid = prev
    if (type === ValidatorTypes.REQUIRE) {
      isValid = isValid && value.trim().length > 0
    }
    if (type === ValidatorTypes.MINLENGTH && val) {
      isValid = isValid && value.trim().length >= val
    }
    if (type === ValidatorTypes.MAXLENGTH && val) {
      isValid = isValid && value.trim().length <= val
    }
    if (type === ValidatorTypes.MIN && val) {
      isValid = isValid && +value >= val
    }
    if (type === ValidatorTypes.MAX && val) {
      isValid = isValid && +value <= val
    }
    if (type === ValidatorTypes.EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value)
    }
    return isValid
  }, true)
  return valid
}

export {
  validate,
  VALIDATOR_EMAIL,
  VALIDATOR_FILE,
  VALIDATOR_MAX,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MIN,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  ValidatorTypes,
}
