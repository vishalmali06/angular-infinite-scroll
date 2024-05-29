import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  posts: any[] = [];
  displayedColumns: string[] = ['id', 'title', 'body'];
  page = 1;
  limit = 20;
  loading = false;

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    if (this.loading) return;

    this.loading = true;
    this.tableService.getPosts(this.page, this.limit).subscribe(
      data => {
        this.posts = [...this.posts, ...data];
        this.page++;
        this.loading = false;
      },
      error => {
        console.error('Error fetching posts', error);
        this.loading = false;
      }
    );
  }

  onScroll(): void {
    this.loadPosts();
  }
}
