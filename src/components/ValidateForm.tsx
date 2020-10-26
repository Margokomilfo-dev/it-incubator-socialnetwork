export const required = (value: string) => (value ? undefined : `The field is required`)
export const maxLength = (max: number) => (value: string) =>
    value && value.length < max ? undefined : `Max length is ${max} symbols!`
export const minMaxLength = (min: number, max: number) => (value: string) =>
    value && (value.length > min && value.length < max)  ? undefined : `Required min - ${min}, max - ${max} symbols`
// @ts-ignore
export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)