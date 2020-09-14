import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-repo-pagination',
  templateUrl: './repo-pagination.component.html',
  styleUrls: ['./repo-pagination.component.css']
})
export class RepoPaginationComponent implements OnInit {

  @Input() currentPage: number;
  @Output() changePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(page: number){
    this.changePage.emit(page);
  }

}
