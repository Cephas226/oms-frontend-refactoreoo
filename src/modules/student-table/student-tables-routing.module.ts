/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
 

/* Containers */
import * as tablesContainers from './containers';

/* Guards */
import * as tablesGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';
import { StudentTablesModule } from './student-tables.module';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: tablesContainers.StudentTablesComponent,
        data: {
            title: 'OMS',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Students table',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [StudentTablesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class StudentTablesRoutingModule {}
