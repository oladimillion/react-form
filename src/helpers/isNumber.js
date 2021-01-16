import check from "check-types"; 

export const isNumber = (value) => check.number(Number(value))
