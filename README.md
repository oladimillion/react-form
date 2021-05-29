# react-form

Fast and easy way to create form in React

## Installation

### Using npm

```bash
npm install @oladimillion/react-form
```

### Using yarn

```bash
yarn add @oladimillion/react-form
```

## Basic Usage

```js
import { Form Field, Action } from '@oladimillion/react-form'


const validationRules = {
  text: {
    validation: ['required'],
    message: {
      required: 'This text field is required'
    }
  }
}

const initialValues = {
  text: 'react form',
}

const MyForm = () => {

  const onSubmit = async ({ values, errors, submitting, resetForm, setFormError, setFormValue }) => {
    // perform async action
  }

  return (
    <Form 
      onSubmit={onSubmit}
      validationRules={validationRules}
      initialValues={initialValues}
    >
      <Field type='text' label='Text Field' name='text' placeholder='Text field' />
      <Action primary>Save</Action>
    </Form>
  )
}
```

## API

### `<Form />`

```js 
import { Form } from '@oladimillion/react-form'
```

Form handles the form's validation, change and submit events.

```js
    <Form 
      onSubmit={onSubmit}
      validationRules={validationRules}
      initialValues={initialValues}
      readOnly={false}
    >
      ...
    </Form>
```

#### Form props

- `onSubmit: function` **Required**

  it's called when submit event is triggered 

- `validationRules: object` 

  form fields can have custom validation rules.

  [Validatorjs](https://github.com/mikeerickson/validatorjs) is used under the hood for the form validation.

  ```js
    const validationRules = {
      email: {
        validation: ['required', 'email'],
        message: {
          required: 'The email field is required'
          email: 'The email format is invalid'
        }
      }
    }
  ```

- `initialValues: object` 

  form fields can have initial value defined

- `readOnly: boolean` 

  form can be made read only by setting `readOnly` to `true`

### `<Field />`

```js 
import { Field } from '@oladimillion/react-form'
```

Field hooks up inputs to the form state using the name attribute.

```js
    <Field type='password' label='Password' name='password' />
```

#### Field props

- `name: string` **Required**

  field's name in the form state.

- `type: string` 

  input type, which can be `text`, `textarea`, `select`, `checkbox`, `radio`, `switch`, `email`, `url`, `password`, `file`, or `number`.


- `placeholder: string` 

  placeholder text for `text`, `textarea`, `email`, `url`, `password` and `number` input types.









