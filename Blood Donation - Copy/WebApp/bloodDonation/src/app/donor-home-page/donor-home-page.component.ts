import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DonorInformationService } from '../service/donor-information.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-donor-home-page',
  templateUrl: './donor-home-page.component.html',
  styleUrls: ['./donor-home-page.component.scss'],
})
export class DonorHomePageComponent implements OnInit {
  public dataSource = new MatTableDataSource<any>([]);
  public displayedColumns: string[] = [
    'recipient_name',
    'recipient_email',
    'blood_group',
    'accept',
    'reject',
  ];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private router: Router,
    private donorInformationService: DonorInformationService
  ) {}

  ngOnInit(): void {
    const email = localStorage.getItem('email');
    this.donorInformationService.requestTableInfo(email).subscribe(
      (res) => {
        this.dataSource.data = res.data;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Error fetching request table info:', error);
      }
    );
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  changeStatus(status: string, element: any) {
    const updatedElement = { ...element, status: status };
    this.donorInformationService
      .updateDonationStatus(updatedElement)
      .subscribe({
        next: (response) => {
          if (response.status) {
            console.log('Status updated successfully:', response.msg);
            window.location.reload();
          } else {
            console.error('Failed to update status:', response.msg);
          }
        },
        error: (err) => {
          console.error('Error updating status:', err);
        },
      });
  }
}
