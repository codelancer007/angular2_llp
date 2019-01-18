import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user-info/:id', component: UserDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    UsersComponent,

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
