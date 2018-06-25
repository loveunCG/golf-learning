import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningSystemRoutingModule } from './learning-system-routing.module';
import { LearningSystemComponent } from './learning-system.component';
import { HeaderComponent } from '../header/header.component';
import { HeaderNavigationComponent } from '../header/header-navigation/header-navigation.component';
import { HeaderPrimaryComponent } from '../header/header-primary/header-primary.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardMenuComponent } from '../dashboard/dashboard-menu/dashboard-menu.component';
import { DashboardSidebarComponent } from '../dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardContentComponent } from '../dashboard/dashboard-content/dashboard-content.component';
import { AcademyComponent } from '../academy/academy.component';
import { AdacemyMenuComponent } from '../academy/adacemy-menu/adacemy-menu.component';
import { AcademyIntroductionComponent } from '../academy/academy-introduction/academy-introduction.component';
import { AcademyBallFlightComponent } from '../academy/academy-ball-flight/academy-ball-flight.component';
import { AcademySwingFirstComponent } from '../academy/academy-swing-first/academy-swing-first.component';
import { AcademySwingSecondComponent } from '../academy/academy-swing-second/academy-swing-second.component';
import { AcademyAnatomyComponent } from '../academy/academy-anatomy/academy-anatomy.component';
import { AcademyCourseManagementComponent } from '../academy/academy-course-management/academy-course-management.component';
import { AcademyShotShapingComponent } from '../academy/academy-shot-shaping/academy-shot-shaping.component';
import { AcademyMentalComponent } from '../academy/academy-mental/academy-mental.component';
import { AcademyStatisticsComponent } from '../academy/academy-statistics/academy-statistics.component';
import { ForumComponent } from '../forum/forum.component';
import { SkillComponent } from '../skill/skill.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { VlogComponent } from '../vlog/vlog.component';
import { StoreComponent } from '../store/store.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CourseComponent } from '../course/course.component';
import { AcademyShortModule } from '../academy/academy-short-game/academy-short.module';
import { ForumSidebarComponent } from '../forum/forum-sidebar/forum-sidebar.component';
import { ForumContentComponent } from '../forum/forum-content/forum-content.component';
import { ForumMenuComponent } from '../forum/forum-menu/forum-menu.component';
import { StatisticsMenuComponent } from '../statistics/statistics-menu/statistics-menu.component';
import { StatisticsOverviewComponent } from '../statistics/statistics-overview/statistics-overview.component';
import { StatisticsRoundsComponent } from '../statistics/statistics-rounds/statistics-rounds.component';
import { MessageModule } from '../message/message.module';

@NgModule({
    imports: [
        CommonModule,
        LearningSystemRoutingModule,
        MessageModule,
        AcademyShortModule,
        NgCircleProgressModule.forRoot({
          percent: 100,
          radius: 29,
          outerStrokeWidth: 16,
          innerStrokeWidth: 8,
          outerStrokeColor: '#78C000',
          innerStrokeColor: '#C7E596',
          animationDuration: 300,
    })
    ],
    declarations: [
        LearningSystemComponent,
        HeaderComponent,
        HeaderNavigationComponent,
        HeaderPrimaryComponent,
        DashboardComponent,
        DashboardMenuComponent,
        DashboardSidebarComponent,
        DashboardContentComponent,
        AcademyComponent,
        AdacemyMenuComponent,
        AcademyIntroductionComponent,
        AcademyBallFlightComponent,
        AcademySwingFirstComponent,
        AcademySwingSecondComponent,
        AcademyAnatomyComponent,
        AcademyCourseManagementComponent,
        AcademyShotShapingComponent,
        AcademyMentalComponent,
        AcademyStatisticsComponent,
        ForumComponent,
        SkillComponent,
        StatisticsComponent,
        VlogComponent,
        StoreComponent,
        CourseComponent,
        ForumSidebarComponent,
        ForumContentComponent,
        ForumMenuComponent,
        StatisticsMenuComponent,
        StatisticsOverviewComponent,
        StatisticsRoundsComponent,
    ]
})
export class LearningSystemModule { }
