import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoListComponent } from './component/repo-list/repo-list.component';
import { RepoElementComponent } from './component/repo-element/repo-element.component';
import { RepoPaginationComponent } from './component/repo-pagination/repo-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    RepoElementComponent,
    RepoPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
