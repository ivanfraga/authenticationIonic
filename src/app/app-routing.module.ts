import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'turista/:id',
    loadChildren: () => import('./dashboard/turista/turista.module').then( m => m.TuristaPageModule)
  },
  {
    path: 'encargado/:id',
    loadChildren: () => import('./dashboard/encargado/encargado.module').then( m => m.EncargadoPageModule)
  },
  {
    path: 'admin/:id',
    loadChildren: () => import('./dashboard/admin/admin.module').then( m => m.AdminPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
