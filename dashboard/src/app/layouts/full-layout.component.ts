import {Component, OnInit} from '@angular/core';
import {LayoutService} from './service/layout.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  providers: [LayoutService]
})
export class FullLayoutComponent implements OnInit {

  constructor(private layoutService: LayoutService, private router: Router) {
  }

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {
  }

  layout() {
    this.layoutService.layout().subscribe(() => {
      this.router.navigateByUrl('/login');
    }, (error) => {
      console.log(error);
      this.router.navigateByUrl('/login');
    });
  }
}
