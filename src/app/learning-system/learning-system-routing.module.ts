import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningSystemComponent } from './learning-system.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AcademyComponent } from '../academy/academy.component';
import { AcademyShortGameComponent } from '../academy/academy-short-game/academy-short-game.component';
import { AcademyCourseManagementComponent } from '../academy/academy-course-management/academy-course-management.component';
import { ForumComponent } from '../forum/forum.component';
import { SkillComponent } from '../skill/skill.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { StatisticsOverviewComponent } from '../statistics/statistics-overview/statistics-overview.component';
import { StatisticsRoundsComponent } from '../statistics/statistics-rounds/statistics-rounds.component';
import { MessageComponent } from '../message/message.component';
import { VlogComponent } from '../vlog/vlog.component';
import { StoreComponent } from '../store/store.component';
import { CourseComponent } from '../course/course.component';
const routes: Routes = [
    {
        path: '',
        component: LearningSystemComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'academy',
                children: [
                    {
                        path: '',
                        component: AcademyComponent,
                    },
                    {
                        path: 'short-game',
                        component: AcademyShortGameComponent
                    },
                    {
                        path: 'course-management',
                        component: AcademyCourseManagementComponent
                    }
                ]
            },
            {
                path: 'skills',
                component: SkillComponent
            },
            {
                path: 'forum',
                component: ForumComponent
            },
            {
                path: 'statistics',
                children: [
                    {
                        path: '',
                        component: StatisticsComponent,
                    },
                    {
                        path: 'my-statistics',
                        component: StatisticsOverviewComponent
                    },
                    {
                        path: 'rounds',
                        component: StatisticsRoundsComponent
                    }
                ]
             },
            {
                path: 'messages',
                component: MessageComponent
            },
            {
                path: 'vlog',
                component: VlogComponent
            },
            {
                path: 'store',
                component: StoreComponent
            },
            {
                path: 'courseDetails/:id',
                component: CourseComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LearningSystemRoutingModule { }
