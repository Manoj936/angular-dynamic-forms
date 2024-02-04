export interface FormInterface{
  formTitle: string,
  saveBtnTitle:string,
  resetBtnTitle: string,
  formControls: formControlsInterface []
}

export interface formControlsInterface {
    name?: string
    label?: string
    value?: string
    options?: OptionsInterface[]
    radioOptions? : string[]
    placeholder?: string
    class?: string
    type?: string
    validators?: ValidatorsInterface[]
  }

  export interface ValidatorsInterface {
    validatorName?: string
    pattern?: string
    message?: string
    maxLength?:number
    minLength?:number
  }
  interface OptionsInterface {
    id?: number
    value?:string
  }