import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { AddSubsidiaryComponent } from './add-subsidiary/add-subsidiary.component';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';


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
  },
  {
    path: 'providers-list',
    component: ProvidersListComponent
  },
  {
    path: 'inventory-table',
    component: InventoryTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
