import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './modules/auth.module#AuthModule' },
    { path: 'dashboard', loadChildren: './modules/dashboard.module#DashboardModule' },
]

export const appRoutingProviders: any[] = [];
export const appRoutes: any = RouterModule.forRoot(routes, { useHash: false });