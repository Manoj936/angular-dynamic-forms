import { FormInterface } from "../models/from.interface";

 /*
 
 This configuration takes form title , btn names , 
 label and form control names , bootstrap class , 
 type , and validation props
 
 */
export const registerFormConfig: FormInterface = {
  formTitle: "Gym Registration Form",
  saveBtnTitle: "Confirm Registration",
  resetBtnTitle: "Reset",
  formControls: [
    {
      name: "firstName",
      label: "First name",
      value: "",
      placeholder: "",
      class: "col-md-6",
      type: "text",
      validators: [
        {
          validatorName: "minlength",
          minLength: 5,
          message: "First Name should be atleast 5 characters",
        },
        {
          validatorName: "required",
          message: "First Name is Required",
        },
      ],
    },
    {
      name: "lastName",
      label: "Last name",
      value: "",
      placeholder: "",
      class: "col-md-6",
      type: "text",
      validators: [
        {
          validatorName: "minlength",
          minLength: 5,
          message: "Last Name should be atleast 5 characters",
        },
        {
          validatorName: "required",
          message: "Last Name is Required",
        },
      ],
    },
    {
      name: "aboutyou",
      label: "Tell Us Something",
      value: "",
      placeholder: "",
      class: "col-md-12",
      type: "textarea",
      validators: [
        {
          validatorName: "minlength",
          minLength: 50,
          message: "minimum 50 characters",
        },
        {
          validatorName: "required",
          message: "About you is required",
        },
      ],
    },
  ],
};
