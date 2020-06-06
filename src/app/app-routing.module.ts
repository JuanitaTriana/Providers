import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { AddSubsidiaryComponent } from './add-subsidiary/add-subsidiary.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-provider',
    component: AddProviderComponent
  },
  {
    path: 'add-subsidiary',
    component: AddSubsidiaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
