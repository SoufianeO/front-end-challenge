import { Component, OnInit, Input } from '@angular/core';
import { Repo } from 'src/app/model/repo';
import {Router, ActivatedRoute, Params } from '@angular/router';
import {DataService} from '../../service/data.service'

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  repositories: Repo[] = [];
  page: number;
  constructor(private data:DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.page = +params.page;
      this.repositories = this.data.getRepositoriesArray(this.page);
    });
  }
  onChangePage(event: number){
    this.router.navigate(['/Repositories', event]);
  }

}
