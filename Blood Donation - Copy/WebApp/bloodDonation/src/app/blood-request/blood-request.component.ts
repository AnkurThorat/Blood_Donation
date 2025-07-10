import { Component, OnInit, ViewChild } from '@angular/core';
import { DonorInformationService } from '../service/donor-information.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-blood-request',
  templateUrl: './blood-request.component.html',
  styleUrls: ['./blood-request.component.scss'],
})
export class BloodRequestComponent implements OnInit {
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  public data: any;
  public displayedColumns: string[] = [
    'name',
    'email',
    'address',
    'blood_group',
    'blood_request',
    'blood_request_status',
  ];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private donorInformationService: DonorInformationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.donorInformationService.getDonorInfo().subscribe(
      (res) => {
        this.dataSource.data = res;

        const email = localStorage.getItem('email');
        this.donorInformationService.getRecipientStatusInfo(email).subscribe(
          (res) => {
            this.data = res.data;

            this.dataSource.data.forEach((obj1Item: any) => {
              let matchingObj2Item = this.data.find(
                (obj2Item: any) => obj2Item.donor_email === obj1Item.email
              );

              if (matchingObj2Item) {
                obj1Item.status = matchingObj2Item.status;

                if (
                  obj1Item.status === 'pending' ||
                  obj1Item.status === 'success' ||
                  obj1Item.status === 'rejected'
                ) {
                  obj1Item.isRequested = true;
                }
              }
            });

            console.log('Updated obj1 (dataSource):', this.dataSource.data);
            this.dataSource.paginator = this.paginator;
          },
          (error) => {
            console.error('Error fetching recipient status info:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching donor info:', error);
      }
    );
  }

  onBloodRequest(element: any) {
    let object: any = {
      donor_email: element.email,
      recipient_email: localStorage.getItem('email'),
      blood_group: element.blood_group,
      recipient_first_name: element.first_name,
      recipient_last_name: element.last_name,
    };

    this.donorInformationService.postRequestInfo(object).subscribe({
      next: (response) => {
 
        element.isRequested = true;
        element.status = 'pending'; 
        console.log('Blood request successfully made for:', element.email);
      },
      error: (error) => {
        console.error('Error making blood request:', error);
      },
    });
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
