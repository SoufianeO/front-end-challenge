import { Component, OnInit, Input } from '@angular/core';
import { Repo } from 'src/app/model/repo';

@Component({
  selector: 'app-repo-element',
  templateUrl: './repo-element.component.html',
  styleUrls: ['./repo-element.component.css']
})
export class RepoElementComponent implements OnInit {
@Input() repository: Repo;
  constructor() { }

  ngOnInit(): void {
  }

}
