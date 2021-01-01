import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { BookComponent } from './book/book.component';
import { TypeMemberComponent } from './type-member/type-member.component';
import { MemberComponent } from './member/member.component';
import { ConfigurationReturnComponent } from './configuration-return/configuration-return.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { ConfigurationSMSComponent } from './configuration-sms/configuration-sms.component';
import { DailyBookComponent } from './daily-book/daily-book.component';
import { ContactComponent } from './contact/contact.component';
import { RequiredBookComponent } from './required-book/required-book.component';
import { PenaltyComponent } from './penalty/penalty.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigurationComponent } from './configuration/configuration.component';

const routes:Routes=[
  {path:'book',component:BookComponent},
  {path:'type',component:TypeMemberComponent},
  {path:'category',component:CategoryComponent},
  {path:'member',component:MemberComponent},
  {path:'return',component:ReturnBookComponent},
  {path:'member',component:MemberComponent},
  {path:'dailybook',component:DailyBookComponent},
  {path:'contact',component:ContactComponent},
  {path:'requiredbook',component:RequiredBookComponent},
  {path:'penalty',component:PenaltyComponent},
  {path:'configuration',component:ConfigurationComponent},
  {path:'configurationreturn',component:ConfigurationReturnComponent},
  {path:'configurationsms',component:ConfigurationSMSComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'**',redirectTo:'dashboard',pathMatch:'full'}]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BookComponent,
    TypeMemberComponent,
    MemberComponent,
    ConfigurationReturnComponent,
    ReturnBookComponent,
    ConfigurationSMSComponent,
    DailyBookComponent,
    ContactComponent,
    RequiredBookComponent,
    PenaltyComponent,
    CategoryComponent,
    DashboardComponent,
    ConfigurationComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
