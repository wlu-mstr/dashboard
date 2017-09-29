import { Routes, RouterModule }  from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SellerBusinessComponent } from './components/seller-business/seller-business.component';
import { CanActivateGuard } from './shared/routerControl/can-activate-guard';
import { PhoneDetailsComponent } from './components/phone-details/phone-details.component';
import { SearchDetailsComponent } from './components/search-details/search-details.component';
const rootRouterConfig: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'content',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate: [CanActivateGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
        data: {
          title: '首页'
        },
      },
      {
        path: 'sellerList',
        component: SellerBusinessComponent,
        data: {
          title: '整体统计报表'
        },
        canActivate: [CanActivateGuard],
      },
      {
        path: 'phoneDetails',
        component: PhoneDetailsComponent,
        data: {
          title: '来电明细报表'
        },
        canActivate: [CanActivateGuard],
      },
      {
        path: 'SearchDetails',
        component: SearchDetailsComponent,
        data: {
          title: '查询情况报表'
        },
        canActivate: [CanActivateGuard],
      }
    ]
  },
  {
    path: 'login',
    // redirectTo:'login',
    loadChildren: 'app/pages/pages.module.ts#PagesModule'
  }
];

export const RootRouterModule = RouterModule.forRoot(rootRouterConfig);
