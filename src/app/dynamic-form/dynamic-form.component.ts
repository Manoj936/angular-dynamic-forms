import { Component, Input, OnInit } from "@angular/core";
import { FormInterface, formControlsInterface } from "../models/from.interface";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.scss"],
})
export class DynamicFormComponent implements OnInit {
  @Input() form: FormInterface;

  dynamicFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.form);
    if (this.form && this.form.formControls) {
      const formGroup: any = {};
      if (this.form && this.form.formControls) {
        this.form.formControls.forEach((control) => {
          const validatorArray = []
          if (control && control.validators) {
            control.validators.forEach((val)=>{
              if (val.validatorName === 'required') validatorArray.push(Validators.required);
              if (val.validatorName === 'email') validatorArray.push(Validators.email);
              if (val.validatorName === 'minlength') validatorArray.push(Validators.minLength(val.minLength));
              if (val.validatorName === 'pattern') validatorArray.push(Validators.pattern(val.pattern));
              if (val.validatorName === 'maxlength') validatorArray.push(Validators.maxLength(val.maxLength));
            })

          }
          formGroup[control.name] = [control.value || '', validatorArray];
        });
      }
      this.dynamicFormGroup = this.fb.group(formGroup);
      console.log(this.dynamicFormGroup);
    }
  }
  onSubmit() {
    if (this.dynamicFormGroup.valid) {
      console.log("Form values:", this.dynamicFormGroup.value);
    }
  }

  resetForm() {
    this.dynamicFormGroup.reset();
  }

  getErrorMessage(control : formControlsInterface){
   const myControls = this.dynamicFormGroup.get(control.name);
   let errorMsg  = '';
   control.validators.forEach((val)=>{
    if(myControls.hasError(val.validatorName as string)){
      errorMsg = val.message as string
     
    }
   })
   return errorMsg
  }
}
