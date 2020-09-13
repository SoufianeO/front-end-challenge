import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoListComponent } from './component/repo-list/repo-list.component';
import { RepoElementComponent } from './component/repo-element/repo-element.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    RepoElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
