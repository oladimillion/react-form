const commonStyle = `
  border: 1px solid transparent !important;
  color: rgba(0,0,0,.87);
  opacity: 1 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;

  &:-internal-autofill-selected {
    background-color: inherit;
  }

  &:-webkit-autofill {
    background-color: inherit;
  }
`

export const disabled = ({ disabled }) =>
  disabled &&
  `
  && input {
    ${commonStyle};
  }
  ${commonStyle};
`
