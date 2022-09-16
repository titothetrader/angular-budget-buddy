import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from '../interfaces/expense';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  expenses: Expense[] = [
    { category: 'Utilities', description: 'Electric bill', amount: 100 },
    { category: 'Travel', description: 'Maryland', amount: 450 },
    { category: 'Fun', description: 'RHCP Concert', amount: 100 },
  ];
  

  private _totalExpense = new BehaviorSubject(0);
  readonly totalExpense = this._totalExpense.asObservable();

  constructor() {}

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
    this._totalExpense.next(this.getCurrentTotal() + expense.amount);
  }

  getCurrentTotal(): number {
    return this._totalExpense.getValue();
  }
}
