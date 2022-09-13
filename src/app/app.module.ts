import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { AddExpenseFormComponent } from './components/add-expense-form/add-expense-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExpensesListComponent,
    AddExpenseFormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
