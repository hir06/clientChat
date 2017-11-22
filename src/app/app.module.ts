import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { ContactComponent } from './contact/contact.component';

import { FormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';
const myRoots: Routes = [
  { path: '', component: ContactComponent },
  { path: 'register', component: ChatComponent }
];
@NgModule({
  declarations: [
  AppComponent,
  ChatComponent,
  ContactComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule,FormsModule,
    // AppRoutingModule,
    RouterModule.forRoot(myRoots)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
