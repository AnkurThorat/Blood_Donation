import { Component, OnInit } from '@angular/core';
import { TotalBloodCountService } from '../service/total-blood-count.service';
import { DonorInformationService } from '../service/donor-information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public donor_information_Of_A_Positive: any[] = [];
  public donor_information_Of_A_Negative: any[] = [];
  public donor_information_Of_B_Positive: any[] = [];
  public donor_information_Of_B_Negative: any[] = [];
  public donor_information_Of_O_Positive: any[] = [];
  public donor_information_Of_O_Negative: any[] = [];
  public donor_information_Of_AB_Positive: any[] = [];
  public donor_information_Of_AB_Negative: any[] = [];
  public donorInfo: any[] = [];
  public totalReq: any[] = [];
  public getTotal: any[] = [];

  constructor(
    private totalBloodCountService: TotalBloodCountService,
    private donorInformationService: DonorInformationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.totalBloodCountService.getTotalBloodCountOfAPositive().subscribe(
      (res) => {
        this.donor_information_Of_A_Positive = res;
      },
      (error) => {
        console.error(error);
      }
    );

    this.totalBloodCountService.getTotalBloodCountOfANegative().subscribe(
      (res) => {
        this.donor_information_Of_A_Negative = res;
      },
      (error) => {
        console.error(error);
      }
    );

    this.totalBloodCountService.getTotalBloodCountOfBPositive().subscribe(
      (res) => {
        this.donor_information_Of_B_Positive = res;
      },
      (error) => {
        console.error(error);
      }
    );

    this.totalBloodCountService.getTotalBloodCountOfBNegative().subscribe(
      (res) => {
        this.donor_information_Of_B_Negative = res;
      },
      (error) => {
        console.error(error);
      }
    );

    this.totalBloodCountService.getTotalBloodCountOfOPositive().subscribe(
      (res) => {
        this.donor_information_Of_O_Positive = res;
      },
      (error) => {
        console.error(error);
      }
    );
    this.totalBloodCountService.getTotalBloodCountOfONegative().subscribe(
      (res) => {
        this.donor_information_Of_O_Negative = res;
      },
      (error) => {
        console.error(error);
      }
    );

    this.totalBloodCountService.getTotalBloodCountOfABPositive().subscribe(
      (res) => {
        this.donor_information_Of_AB_Positive = res;
      },
      (error) => {
        console.error(error);
      }
    );

    this.totalBloodCountService.getTotalBloodCountOfABNegative().subscribe(
      (res) => {
        this.donor_information_Of_AB_Negative = res;
      },
      (error) => {
        console.error(error);
      }
    );

    this.donorInformationService.getDonorInfo().subscribe(
      (res) => {
        this.donorInfo = res;
      },
      (error) => {
        console.error(error);
      }
    );

    this.donorInformationService.getTotal().subscribe(
      (res) => {
        this.getTotal = res;
      },
      (error) => {
        console.error(error);
      }
    );

    this.donorInformationService.getTotalReq().subscribe(
      (res) => {
        this.totalReq = res;
      },
      (error) => {
        console.error(error);
      }
    );

    this.donorInformationService.getTotalApv().subscribe(
      (res) => {
        this.donorInfo = res;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onLogout() {
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
  }
}
