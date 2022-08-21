import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { GetAgePipe } from './get-age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent,
    GetAgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GetAgePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
