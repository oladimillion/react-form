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
import { Form, Field, SubmitButton } from '@oladimillion/react-form'


const validationRules = {
  text: {
    validation: ['required'],
    message: {
      required: 'This text field is required'
    }
  },
}

const initialValues = {
  text: 'react form',
}

const MyForm = () => {

  const onSubmit = async ({ values, errors, submitting, resetForm, setFormError, setFormValue }) => {
    // perform async action here
  }

  return (
    <Form 
      onSubmit={onSubmit}
      validationRules={validationRules}
      initialValues={initialValues}
    >
      <Field type='text' label='Text Field' name='text' placeholder='Text field' />
      ...
      <SubmitButton>Save</SubmitButton>
    </Form>
  )
}
```

## API

- [`Form`](#form-)
- [`Field`](#field-)
- [`FieldArray`](#fieldarray-)

### `<Form />`

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

  Called when submit event is triggered.

- `validationRules: object` 

  Custom validation rules for form fields.

  [Validatorjs](https://github.com/mikeerickson/validatorjs) is used under the hood for the form validation.

  ```js
    const validationRules = {
      email: {
        validation: ['required', 'email'],
        message: {
          required: 'The email field is required',
          email: 'The email format is invalid'
        }
      }
    }
  ```

- `initialValues: object` 

  Defining initial value for form fields

- `readOnly: boolean` 

  form can be made read only by setting `readOnly` to `true`

### `<Field />`

`Field` hooks up inputs to the form state using the name attribute.

```js
    import { Field } from '@oladimillion/react-form'

    ...
    <Field type='password' label='Password' name='password' />
    ...
```

#### Field props

- `name: string` **required**

  `Field` name in the form state.

- `type: string` 

  Input types, which can be `text`, `textarea`, `select`, `checkbox`, `radio`, `switch`, `email`, `url`, `password`, `file`, or `number`.


- `placeholder: string` 

  Placeholder text for `text`, `textarea`, `email`, `url`, `select`, `password` and `number` input types.

- `label: string` 

  `Field` label.

- `renderLabel: function` 

  **Label** can be customized with `renderLabel` function.

  ```js
      <Field 
        renderLabel={() => <label>My label</label>}
        ...
      />
  ```

- `renderErrorMessage: function` 

  **Error message** can be customized with `renderErrorMessage` function. It takes `errors: array` as argument.

  ```js
      <Field 
        renderErrorMessage={({ errors }) => errors.map(error => <span>{error}</span>)}
        ...
      />
  ```

- `options: array` 

  `radio` and `select` input types recieves `options` props to render choices. `options` is a list of objects containing `text: string` and `value: number|boolean|string`.

  ```js
      // radio input type
      <Field 
        label='Radio Field'
        options={[{ text: 'Yes', value: 'yes' }, {text: 'No', value: 'no' }]} 
        type='radio' 
        name='radio'
      />
  ```

  ```js
      // select input type
      <Field 
        label='Select Field'
        options={[{ text: 'Good', value: 3 }, { text: 'Better', value: 2 }, { text: 'Best', value: 1 }]} 
        type='select' 
        name='select2'
        placeholder='Placeholder Text'
      />
  ```

- `as: ReactElement` 
  
  Input fields are rendered using [Semantic UI React](https://react.semantic-ui.com/) components. But with `as` prop, custom input field can be rendered instead.

  ```js
      const TextArea = (props) => <textarea {...props} row={3} placeholder='description...' />

      <Field 
        label='Text area'
        name='textarea'
        as={TextArea}
      />
  ```

### `<FieldArray />`

Groups of `Field` can be rendered using `FieldArray`.

Each `Field` in a `FieldArray` must have a name composed from the _parent name_, _field index_ and _field name_. eg. `group.1.email`

```js
    import { Field, FieldArray } from '@oladimillion/react-form'

    ...
    <FieldArray name='fieldArray' label='Field Array'>
      {({ values, add, remove }) => (
        <FieldArray.Item mb={2}>
          {values.map((_, index) => (
            <FieldArray.Item key={index}>
              <FieldArray.RemoveButton onClick={() => remove(index)} />
              <Field type='textarea' label='TextArea Field' name={`fieldArray.${index}.textarea`} />
              <FieldArray.Divider />
            </FieldArray.Item>
          ))}
          <FieldArray.AddButton onClick={add} />
        </FieldArray.Item>
      )}
    </FieldArray>
    ...
```

#### FieldArray props

- `name: string` **required**

  `FieldArray` name in the form state.

- `label: string` 

  `FieldArray` label.

- `render: function` 

  `render` function takes `values: array`, `add: function` and `remove: functon` arguments. `values` holds the items' value, `add` function adds a new item to the array items, and `remove` function removes a child from the array items using its index.

```js
    <FieldArray 
      ...
      render={({ values, add, remove }) => (...)}
    />
```

- `children: function` 

  Same as `render` prop, but the function is passed as children.

```js
    <FieldArray 
      ...
    >
      {({ values, add, remove }) => (...)}
    </FieldArray>
```

