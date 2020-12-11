import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ToDoComponent } from './to-do/to-do.component';


const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
  {path:'',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:"list",component:ToDoComponent},

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
