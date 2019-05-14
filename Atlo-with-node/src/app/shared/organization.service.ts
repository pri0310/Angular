import { Injectable } from '@angular/core';
import { Organization } from '../modals/organization.modals';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from './alert.service';


@Injectable({
  providedIn: 'root'

})
export class OrganizationService {
  private organization: Organization [] = [ new  Organization ( null , '', '', '', '', null, null, null, '')];
  ApiUrl = require('../proxy.config.json');
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  addOrganization(orgUnit: Organization)
  {
    this.http
       .post<{message: string, result: string , data:number}>(this.ApiUrl.routeUrl.URL+ '/addorg', orgUnit).subscribe(res => {
         console.log(res);
        if(res.data )
        {
          console.log(res.data);
          this.organization.push(orgUnit);
          alert(JSON.stringify(res.message));
        }
        else {
           alert(JSON.stringify(res.message));
          // this.router.navigate(['/organization']);
          }
       });
    }

   
  }