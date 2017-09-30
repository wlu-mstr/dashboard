import { Routes, RouterModule }  from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SellerBusinessComponent } from './components/seller-business/seller-business.component';
import { CanActivateGuard } from './shared/routerControl/can-activate-guard';
import { PhoneDetailsComponent } from './components/phone-details/phone-details.component';
import { SearchDetailsComponent } from './components/search-details/search-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { MyClusterComponent } from './components/my-cluster/my-cluster.component';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './pages/login.component';

const rootRouterConfig: Routes = [

  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'content',
    component: FullLayoutComponent,
    canActivate: [CanActivateGuard],
    children: [
      {
        path: '', //  总揽
        component: DashboardComponent
      },
      {
        path: 'mymirror', //我的镜像
        component: SellerBusinessComponent,
        canActivate: [CanActivateGuard],
      }
      ,
      {
        path: 'basemirror', //基础镜像
        component: PhoneDetailsComponent,
        canActivate: [CanActivateGuard],
      },
      {
        path: 'configmanager',
        component: SearchDetailsComponent,
        canActivate: [CanActivateGuard],
      },
      {
        path: 'mycluster',
        component: MyClusterComponent,
        canActivate: [CanActivateGuard],
      },
      {
        path: 'loadbalance',
        component: LoadBalanceComponent,
        canActivate: [CanActivateGuard],
      }
    ]
  }
  //,
  //{
  //  path: 'login',
  //  // redirectTo:'login',
  //  loadChildren: 'app/pages/pages.module.ts#PagesModule'
  //}
];

export const RootRouterModule = RouterModule.forRoot(rootRouterConfig);
