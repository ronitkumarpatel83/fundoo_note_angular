import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { GetNoteComponent } from './components/get-note/get-note.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    GetNoteComponent,
    ArchiveComponent,
    TrashComponent,
    CreatenoteComponent,
    DisplaynoteComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,AppRoutingModule,FlexLayoutModule,MatSidenavModule,
    BrowserAnimationsModule,MatFormFieldModule,MatToolbarModule,
    MatInputModule,MatCheckboxModule,ReactiveFormsModule,MatIconModule,
    HttpClientModule,MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
