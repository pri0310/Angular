import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { OrganizationComponent } from 'app/add/organization/organization.component';
import { OrganizationshowComponent } from 'app/show/organizationshow/organizationshow.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'organization',        component: OrganizationComponent },
    { path: 'organization/view',        component: OrganizationshowComponent },
];
