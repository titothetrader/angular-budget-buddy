import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Expense } from 'src/app/interfaces/expense';
import { BudgetService } from 'src/app/services/budget-service.service';

@Component({
  selector: 'add-expense-form',
  templateUrl: './add-expense-form.component.html',
  styleUrls: ['./add-expense-form.component.css'],
})
export class AddExpenseFormComponent implements OnInit {
  newExpense: Expense = {
    category: '',
    description: '',
    amount: 0,
  };

  constructor(private Budget: BudgetService) {}

  ngOnInit(): void {}

  submitNewExpense(form: NgForm): void {
    this.Budget.addExpense({ ...this.newExpense });
    form.resetForm();
    this.newExpense = {
      category: '',
      description: '',
      amount: 0,
    };
  }
}
