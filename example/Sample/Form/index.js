import React from 'react'
import { Form as BaseForm, Field, SubmitButton, FieldArray } from '@oladimillion/react-form'
import { countries } from '../consts'


const validationRules = {
  text: {
    validation: ['required'],
    message: {
      required: 'This field is required'
    }
  },
  password: {
    validation: 'required|min:3',
  },
  confirm_password: {
    validation: 'same:password',
  },
  url: {
    validation: 'url',
  },
  file_multiple: {
    validation: 'required',
  },
  email: {
    validation: 'email',
  },
  'fieldArray.*.textarea': {
    validation: 'required',
    message: {
      required: 'This field is required'
    }
  },
  'fieldArray.*.number': {
    validation: 'required|numeric',
    message: {
      required: 'This field is number',
      numeric: 'This field expect a number value'
    }
  },
  'fieldArray.*.myemail': {
    validation: 'email',
    message: {
      required: 'This field is required',
      email: 'Invalid email provided',
    },
    depend: ({ fieldArray }, name, index) => {
      const { number } = fieldArray[index] || {}
      return number === '2'
    }
  },
  date: {
    validation: 'required'
  },
}

export const Form = ({ readOnly }) => {

  // const onSubmit = async () => { }
  const onSubmit = async (args) => { 
    console.log(args)
  }

  const initialValues = {
    email: 'test@email.com',
    number: '123349823983928',
    password: '123',
    select: 'af',
    file_multiple: ['https://google.com', 'https://wikipedia.com'],
    radio: 'yes',
    switch: true,
  }

  return (
    <BaseForm 
      onSubmit={onSubmit}
      validationRules={validationRules}
      initialValues={initialValues}
      readOnly={readOnly}
    >
      <Field type='test' label='Unsupported' name='test' />
      <Field type='text' label='Text Field' name='text' placeholder='Text field' />
      <Field type='password' label='Password Field' name='password' />
      <Field type='password' label='Confirm Password Field' name='confirm_password' />
      <Field type='url' label='Url Field' name='url' />
      <Field type='email' label='Email Field' name='email' />
      <Field useFileLink type='file' label='File Field' name='file' />
      <Field useFileLink type='file' label='Multi-File Field' name='file_multiple' multiple />
      <FieldArray name='fieldArray' label='Field Array'>
        {({ values, add, remove }) => (
          <FieldArray.Item mb={2}>
            {values.map((_, index) => (
              <FieldArray.Item key={index}>
                <FieldArray.RemoveButton onClick={() => remove(index)} />
                <Field type='textarea' label='TextArea Field' name={`fieldArray.${index}.textarea`} />
                <Field type='number' label='Number Field' name={`fieldArray.${index}.number`} />
                <Field type='email' label='Email Field' name={`fieldArray.${index}.myemail`} />
                <Field 
                  label='Radio Field'
                  options={[{ text: 'Yes', value: 'yes' }, {text: 'No', value: 'no' }]} 
                  type='radio' 
                  name={`fieldArray.${index}.radio`}                
                />
                <Field 
                  label='Switch Field'
                  type='switch' 
                  name={`fieldArray.${index}.switch`}                
                />
                <Field 
                  label='Checkbox Field'
                  type='checkbox' 
                  name={`fieldArray.${index}.checkbox`}                
                />
                <Field 
                  label='Select Field'
                  options={countries} 
                  type='select' 
                  name={`fieldArray.${index}.select`}                
                  placeholder='Select your country'
                />
                <FieldArray.Divider />
              </FieldArray.Item>
            ))}
            <FieldArray.AddButton onClick={add} />
          </FieldArray.Item>
        )}
      </FieldArray>
      <Field type='number' label='Number Field' name='number' />
      <Field 
        label='Select Field'
        options={countries} 
        type='select' 
        name='select'
        placeholder='Select your country'
      />
      <Field 
        label='Select Field'
        options={countries} 
        type='select' 
        name='select2'
        placeholder='Select your country'
      />
      <Field 
        label='Radio Field'
        options={[{ text: 'Yes', value: 'yes' }, {text: 'No', value: 'no' }]} 
        type='radio' 
        name='radio'
      />
      <Field 
        label='Switch Field'
        type='switch' 
        name='switch'
      />
      <Field 
        label='Checkbox Field'
        type='checkbox' 
        name='checkbox'
      />
      <Field 
        label='Date Field'
        type='date' 
        name='date'
      />
      <SubmitButton>Save</SubmitButton>
    </BaseForm>
  )
}

