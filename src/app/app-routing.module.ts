import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoListComponent } from './component/repo-list/repo-list.component';
import { RepoElementComponent } from './component/repo-element/repo-element.component';

const routes: Routes = [
  {path: 'Repos/:page', component:RepoListComponent},
  {path: 'Repo/:id', component:RepoElementComponent},
  {path:'', redirectTo: 'Repos/1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
