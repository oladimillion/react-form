import React from 'react';
import { FormContext } from '../Context';
export var useFormContext = function useFormContext() {
  return React.useContext(FormContext);
};