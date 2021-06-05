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
- [`useField`](#usefield)
- [`useFormContext`](#useformcontext)

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

- `onSubmit(Object: { values: object, errors: objects, submitting: boolean, resetForm: function, setFormError: function, setFormValue: function })` **required**

  Called when submit event is triggered.

  - `values: object`
    
    Key-value pair of field names and values.

  - `errors: object`
    
    Key-value pair of field names and errors.

  - `submitting: boolean`
    
    `true` when form is submitting.

  - `setFormValue(values: object, useInitialValues: boolean): void`
    
    Updates the form state with `values`. 

  - `setFormError(errors: object, useInitialErrors: boolean): void`
    
    Updates the form state with `errors`. 

  - `resetForm(): void`
    
    Resets the form state. 


- `validationRules: object` 

  Allows validation form fields.

  [Validatorjs](https://github.com/mikeerickson/validatorjs) is used in the form validation.

  ```js
    const validationRules = {
      email: {
        validation: 'required|email', // validation in string format
      }
    }

    const validationRules = {
      email: {
        validation: ['required', 'email'], // validation in array format
      }
    }

    // custom validation message
    const validationRules = {
      email: {
        validation: ['required', 'email'],
        message: {
          required: 'Email field is required',
          email: 'Email is provided is invalid',
        }
      }
    }

    /* `depend` manages the dependency of a field on other fields */
    // depend as a function
    const validationRules = {
      email: {
        ...
        depend: (values, fieldName, fieldIndex) => {
          // `values` is the fields value in the form state
          // `fieldName` is the field name the depend is running against.
          // `fieldIndex` is the index of field in a field array. null for a non-array field.

          // perform your check here 
          // return a boolean value (true or false)
        }
      }
    }

    // depend as a object
    const validationRules = {
      email: {
        ...
        depend: { field1: 'value1', field2: 'value2' } // email is dependent on field1 and field2
      }
    }

    // depend as a string
    const validationRules = {
      email: {
        ...
        depend: 'field1' // email is dependent on field1
      }
    }

    // depend as a boolean
    const validationRules = {
      email: {
        ...
        depend: true // `false` will hide email field 
      }
    }
  ```

  Validation rule for a [`FieldArray`](#fieldarray-) using **dot** notation

  ```js
    const validationRules = {
      fieldArray.*.email: {
        validation: ['required', 'email'],
      }
    }
  ```

- `initialValues: object` 

  Defining initial value for form fields

- `readOnly: boolean` 

  `Form` can be made read only by setting `readOnly` prop to `true`

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

  `label` can be customized using the `renderLabel` prop.

  ```js
      <Field 
        renderLabel={() => <label>My label</label>}
        ...
      />
  ```

- `renderErrorMessage(Object: { errors: array }): ReactComponent<array>` 

  Field's error messages can be customized using the `renderErrorMessage` prop.

  ```js
      <Field 
        renderErrorMessage={({ errors }) => errors.map(error => <span>{error}</span>)}
        ...
      />
  ```

- `options: array` 

  `radio` and `select` input types recieves `options` prop to render choices. `options` is a list of `text: string` and `value: number|boolean|string` object.

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

- `as: ReactComponent` 
  
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

Each `Field` in a `FieldArray` must have a **name** composed from the _FieldArray name_, _field index_ and _field name_. eg. `group.1.email`

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

- `render(object: { value: array, add: function, remove: function }): ReactComponent` 

  `values` holds the items' value, `add(value: any): void` adds a new item to the array fields, and `remove(index: integer): void` removes an item from the array fields using its index.

```js
    <FieldArray 
      ...
      render={({ values, add, remove }) => (...)}
    />
```

- `children(object: { value: array, add: function, remove: function }): ReactComponent` 

  Same as `render` prop, but the function is passed as children.

```js
    <FieldArray 
      ...
    >
      {({ values, add, remove }) => (...)}
    </FieldArray>
```

### `useField`

`useField` is a custom react hook that let you hook up to the form state using the field name.

```js
    import { useField, Form } from '@oladimillion/react-form'

    const CustomField = () => {
      const name = 'text'
      const { value, onChange, onBlur, required, readOnly } = useField(name)
      return (
        <div>
          <label>Field label</label>
          <input 
            value={value} 
            onChange={onChange} 
            onBlur={onBlur} 
            required={required} 
            disabled={readOnly} 
            name={name} 
            type='text' 
          />
        </div>
      )
    }

    const MyForm = () => {
      const onSubmit = () => {}

      return (
        <Form onSubmit={onSubmit}>
          <CustomField />
          ...
        </Form>
      )
    }
```

#### useField returned props

- `value: any` 

  Field's value.

- `error: array` 

  Field's validation error.

- `onChange(e: ChangeEvent): void` 

  Change event handler.

- `handleChange(e: ChangeEvent): void` 

  Change event handler.

- `onBlur(e: BlurEvent): void` 

  Blur event handler.

- `setValue(value: any): void` 

  Set the field's value.

- `setError(error: string): void` 

  Set the field's error.


### `useFormContext`

`useFormContext` is a custom react hook that let you hook up to the form state.

```js
    import { useFormContext } from '@oladimillion/react-form'

    const formContext = useFormContext()
```

#### useFormContext returned props

- `values: object` 

  Form fields' value.

- `errors: object` 

  Form fields' validation error.

- `handleSubmit(e: SubmitEvent): void` 

  Submit event handler.

- `handleChange(e: ChangeEvent): void` 

  Change event handler.

- `onBlur(e: BlurEvent): void` 

  Blur event handler.

- `setFieldValue(fieldName: string, fieldValue: any): void` 

  Set the field's value.

- `setFieldError(fieldName: string, fieldError: string): void` 

  Set the field's error.

- `setSubmitting(submitting: boolean): void` 

  Set `submitting` to `true` or `false`.

- `resetForm(): void`
    
  Resets the form state. 

- `submitting: boolean`
    
  `true` when form is submitting.
    
- `dirty: boolean`

  `true` when form is dirty.
    
- `readOnly: boolean`

  `true` when form is read only.

- `setFormValue(values: object, useInitialValues: boolean): void`
  
  Updates the form state with `values`. 

- `setFormError(errors: object, useInitialErrors: boolean): void`
  
  Updates the form state with `errors`. 

