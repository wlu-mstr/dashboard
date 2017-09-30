import { Routes, RouterModule }  from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout.component';

import { MyImageComponent } from './components/image-center/my-image/my-image.component';
import { CreateImageComponent } from './components/image-center/create-image/create-image.component';
import { CanActivateGuard } from './shared/routerControl/can-activate-guard';
import { BaseImageComponent } from './components/image-center/base-image/base-image.component';
import { ConfigManagerComponent } from './components/cluster-center/config-manager/config-manager.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoadBalanceComponent } from './components/cluster-center/load-balance/loadbalance.component';
import { MyClusterComponent } from './components/cluster-center/my-cluster/my-cluster.component';
import { CreateConfigComponent } from './components/cluster-center/create-config/create-config.component';


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
        path: 'myImage', //我的镜像
        component: MyImageComponent,
        canActivate: [CanActivateGuard],
      },
      {
        path: 'createImage', //我的镜像-- 创建新镜像
        component: CreateImageComponent,
        canActivate: [CanActivateGuard],
      }
      ,
      {
        path: 'baseImage', //基础镜像
        component: BaseImageComponent,
        canActivate: [CanActivateGuard],
      },
      {
        path: 'configManager',  //配置管理
        component: ConfigManagerComponent,
        canActivate: [CanActivateGuard],
      },
      {
        path: 'createConfig',  //配置管理--创建新配置
        component: CreateConfigComponent,
        canActivate: [CanActivateGuard],
      },
      {
        path: 'myCluster',  //我的集群
        component: MyClusterComponent,
        canActivate: [CanActivateGuard],
      },
      {
        path: 'loadBalance', //负载均衡
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
