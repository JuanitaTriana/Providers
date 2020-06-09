import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { AddSubsidiaryComponent } from './add-subsidiary/add-subsidiary.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { DialogComponent } from './shared/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InventoryTableComponent,
    AddProviderComponent,
    AddSubsidiaryComponent,
    ShoppingCartComponent,
    NavBarComponent,
    ProvidersListComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
