import React from 'react'
import { Form as BaseForm, Field, Action, FieldArray } from '@oladimillion/react-form'
import { countries } from '../consts'


const validationRules = {
  text: {
    validation: 'required',
    message: {
      required: 'The field is required'
    }
  },
  password: {
    validation: 'required|min:3',
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
      required: 'The field is required'
    }
  },
  'fieldArray.*.number': {
    validation: 'required',
    message: {
      required: 'The field is number'
    }
  },
  'fieldArray.*.myemail': {
    validation: 'email|required',
    message: {
      required: 'The field is required',
    }
  },
}

export const Form = () => {

  // const onSubmit = async () => { }
  const onSubmit = async (args) => { 
    console.log(args)
  }

  const initialValues = {
    email: 'test@email.com',
    number: '123349823983928',
    password: '123349823983928',
    select: 'af',
    file_multiple: ['https://google.com', 'https://wikipedia.com']
  }

  return (
    <BaseForm 
      onSubmit={onSubmit}
      validationRules={validationRules}
      initialValues={initialValues}
      readOnly={true}
    >
      <Field type='test' label='Unsupported' name='test' />
      <Field type='text' label='Text Field' name='text' placeholder='Text field' />
      <Field type='password' label='Password Field' name='password' />
      <Field type='url' label='Url Field' name='url' />
      <Field type='email' label='Email Field' name='email' />
      <Field type='file' label='File Field' name='file' />
      <Field type='file' label='Multi-File Field' name='file_multiple' multiple />
      <FieldArray name='fieldArray' label='Field Array'>
        {({ values, add, remove }) => (
          <FieldArray.Item mb={2}>
            {values.map((_, index) => (
              <FieldArray.Item key={index}>
                <FieldArray.RemoveButton onClick={() => remove(index)} />
                <Field type='textarea' label='TextArea Field' name={`fieldArray.${index}.textarea`} />
                <Field type='number' label='Number Field' name={`fieldArray.${index}.number`} />
                <Field type='email' label='Email Field' name={`fieldArray.${index}.myemail`} />
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
      <Action primary>Save</Action>
    </BaseForm>
  )
}

