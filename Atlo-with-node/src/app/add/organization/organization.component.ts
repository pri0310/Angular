import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { OrganizationService } from '../../shared/organization.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  isLoading = false;
  message: string;
  orgForm: FormGroup;
  // let obj :ValidationError = JSON.parse(JSON.stringify(error.error));
  constructor(public orgService: OrganizationService,  private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.initForm();
  }
  onSubmit()
  { 
    if(this.orgForm.invalid)
    {
      this.isLoading=false;
    }
  else{
    // this.isLoading = true;
    console.log(this.orgForm.value);
    this.orgService.addOrganization(this.orgForm.value);
      // this.onCancel();
      }
  }

  public hasError = (controlName: string, errorName: string) => {
   return this.orgForm.controls[controlName].hasError(errorName);
  }

private initForm() {
  let orgName='';
  let orgAddress='';
  let orgCity='';
  let orgState='';
  let orgZip='';
  let orgPhone1='';
  let orgPhone2='';
  let orgEmail='';
  this.orgForm = new FormGroup({
    'orgName': new FormControl(orgName, Validators.required),
    'orgAddress': new FormControl(orgAddress, Validators.required),
    'orgCity': new FormControl(orgCity, Validators.required),
    'orgState': new FormControl(orgState, Validators.required),
    'orgZip': new FormControl(orgZip, Validators.compose([Validators.maxLength(7), Validators.required , Validators.pattern ("[0-9]*")])),
    'orgPhone1': new FormControl(orgPhone1,Validators.compose([Validators.required, Validators.maxLength(15),Validators.pattern ("[0-9]*")])),
    'orgPhone2': new FormControl(orgPhone2, Validators.compose([Validators.required, Validators.maxLength(15),Validators.pattern ("[0-9]*")])),
    'orgEmail': new FormControl(orgEmail, ([Validators.required, Validators.email]))
  });
}

onCancel()
{
  this.router.navigate(['../'], {relativeTo : this.route});
}


}
