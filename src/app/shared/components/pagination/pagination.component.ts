import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UtilsService } from '../feed/services/utils.service';

@Component({
  selector: 'mc-pagination',
  standalone: true,
  templateUrl: './pagination.component.html',
  imports: [CommonModule, RouterLink],
})
export class PaginationComponent implements OnInit {
  @Input() total: number = 0;
  @Input() limit: number = 10;
  @Input() url: string = '';
  @Input() currentPage: number = 1;
  utilsService = inject(UtilsService);

  pagesCount: number = 1;
  pages: number[] = [];

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
    console.log(this.limit);
    this.pages =
      this.pagesCount > 0 ? this.utilsService.range(1, this.pagesCount) : [];
    console.log(this.pages);
  }
}
