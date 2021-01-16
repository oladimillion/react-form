import React from 'react'
import { FormContext } from '../Context'

export const useFormContext = () => {
  return React.useContext(FormContext)
}
