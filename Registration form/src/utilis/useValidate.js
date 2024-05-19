import React from "react";

const useValidate = (values) => {
  
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.lstName) {
    errors.lstName = "Required";
  }
  if (!values.address1) {
    errors.address1 = "Required";
  }
  if (!values.city) {
    errors.city = "Required";
  }
  if (!values.state) {
    errors.state = "Required";
  }
  if (!values.pinCode) {
    errors.pinCode = "Required";
  }
  if (!values.phNumber) {
    errors.phNumber = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.grdClg) {
    errors.grdClg = "Required";
  }
  if (!values.grdCource) {
    errors.grdCource = "Required";
  }
  if (!values.interClg) {
    errors.interClg = "Required";
  }
  if (!values.skills) {
    errors.skills = "Required";
  }
  if (!values.resume) {
    errors.resume = "Required";
  }

  return errors;
};

export default useValidate;
