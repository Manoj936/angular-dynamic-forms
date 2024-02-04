import { FormInterface } from "../models/from.interface";

 /*

 This configuration takes form title , btn names , 
 label and form control names , bootstrap class , 
 type , and validation props
 
 */
export const registerFormConfig: FormInterface = {
  formTitle: "Registration Form",
  saveBtnTitle: "Confirm Registration",
  resetBtnTitle: "Reset",
  formControls: [
    {
      name: "firstName",
      label: "First name *",
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
      label: "Last name *",
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
      name: "gender",
      label: "Gender *",
      value: "",
      placeholder: "",
      class: "col-md-6",
      type: "radio",
      radioOptions: ["male" , "female"],
      validators: [
       
        {
          validatorName: "required",
          message: "Gender is Required",
        },
      ],
    },
    {
      name: "isCredit",
      label: "Are you a credit user *",
      value: "",
      placeholder: "",
      class: "col-md-6",
      type: "radio",
      radioOptions: ["Yes" , "No"],
      validators: [
       
        {
          validatorName: "required",
          message: "Option is Required",
        },
      ],
    },
    {
      name: "cycle",
      label: "Select your billing cycle *",
      value: "",
      placeholder:"Select your billing cycle " ,
      class: "col-md-6",
      type: "select",
      options: [{id:1 , value:'1-15' }, {id:2 , value:'16-30'}, {id:3 , value:'1-30'}],
      validators: [
       
        {
          validatorName: "required",
          message: "please select one option is Required",
        },
      ],
    },
    {
      name: "contact",
      label: "Your Mobile number *",
      value: "",
      class: "col-md-6",
      type: "text",
      validators: [
       
        {
          validatorName: "required",
          message: "please select one option is Required",
        },
        {
          validatorName: "pattern",
          pattern: '[0-9]{10}',
          message: "Mobile number is invalid",
        },
      ],
    },
    {
      name: "aboutyou",
      label: "Tell Us Something *",
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
