import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Organization } from 'app/modals/organization.modals';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganizationshowService {
  private organization : Organization[] = [];
  private postsUpdated = new Subject<Organization[]>();
  ApiUrl = require('../proxy.config.json');
  constructor(private http: HttpClient) { }
  
  getOrganization()
  {
   this.http.get<{ message: string; data: any }>(this.ApiUrl.routeUrl.URL + '/orgview')
   .pipe( 
     map (postData => {
    return postData.data.map(post => {
      console.log(post);
      return {
          orgName: post.name,
          orgAddress: post.address,
          orgCity : post.city,
          orgState : post.state,
          orgZip : post.zip,
          orgPhone1 : post.phone1,
          orgPhone2 : post.phone2,
          orgEmail : post.email,
          Id : post.id
      };
    });
  })
)
.subscribe(transformedPosts => {
  console.log(transformedPosts);
  this.organization = transformedPosts;
  console.log(this.organization);
  this.postsUpdated.next([...this.organization]);
});
}
getPostUpdateListener() {
  return this.postsUpdated.asObservable();
}
}