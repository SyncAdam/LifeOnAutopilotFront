import { Routes } from '@angular/router';
import { Calendar } from '../pages/calendar/calendar';
import { Home } from '../pages/home/home';
import { Finance } from '../pages/finance/finance';
import { Meals } from '../pages/meals/meals';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'Home', component: Home },
    { path: 'Calendar', component: Calendar },
    { path: 'Finance', component: Finance },
    { path: 'Meals', component: Meals }
];
