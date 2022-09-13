import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget-service.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totalExpense: number = 0;
  budget: number = 5000;
  percentage: number = 0;

  constructor(private Budget: BudgetService) {}

  ngOnInit(): void {
    this.Budget.totalExpense.subscribe((newTotal) => {
      this.updateTotal(newTotal);
    });
  }

  updateTotal(newTotal: number) {
    this.totalExpense = newTotal;
    this.percentage = Math.ceil((newTotal / this.budget) * 100);
  }
}
