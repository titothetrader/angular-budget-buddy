import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/interfaces/expense';
import { BudgetService } from 'src/app/services/budget-service.service';

@Component({
  selector: 'expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css'],
})
export class ExpensesListComponent implements OnInit {
  expensesList: Expense[] = [];

  constructor(private Budget: BudgetService) {}

  ngOnInit(): void {
    this.expensesList = this.Budget.expenses;
  }
}
