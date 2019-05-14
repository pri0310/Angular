import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrganizationshowService } from 'app/shared/organizationshow.service';
import {Subscription} from 'rxjs';
import { Organization } from 'app/modals/organization.modals';

@Component({
  selector: 'app-organizationshow',
  templateUrl: './organizationshow.component.html',
  styleUrls: ['./organizationshow.component.scss']
})
export class OrganizationshowComponent implements OnInit , OnDestroy {
  organization: Organization[] = [];
  private postsSub: Subscription;
  
  constructor(private orgshowService: OrganizationshowService) { }
  ngOnInit() {
    this.orgshowService.getOrganization();
    this.postsSub = this.orgshowService.getPostUpdateListener()
      .subscribe((posts: Organization[]) => {
        this.organization = posts;
      });
    }

    ngOnDestroy() {
      this.postsSub.unsubscribe();
    }
  }
