import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';


import { TypeMemberComponent } from './modules/typemember/type-member/type-member.component';
import { MemberComponent } from './modules/memberr/member/member.component';

import { ReturnBookComponent } from './modules/return-book/return-book.component';

import { RequiredBookComponent } from './modules/required-book/required-book.component';
import { PenaltyComponent } from './modules/penalty/penalty.component';
import { BookComponent } from './modules/book/book/book.component';
import { AddTypeMemberComponent } from './modules/typemember/add-type-member/add-type-member.component';
import { AddBookComponent } from './modules/book/add-book/add-book.component';
import { EditBookComponent } from './modules/book/edit-book/edit-book.component';
import { AddCategoryComponent } from './modules/category/add-category/add-category.component';
import { CategoryComponent } from './modules/category/category/category.component';
import { EditCategoryComponent } from './modules/category/edit-category/edit-category.component';
import { ConfigurationReturnComponent } from './modules/configuration-return/configuration-return.component';
import { ConfigurationSMSComponent } from './modules/configuration-sms/configuration-sms.component';
import { ContactComponent } from './modules/contact/contact.component';
import { DailyBookComponent } from './modules/daily-book/daily-book.component';
import { AddMemberComponent } from './modules/memberr/add-member/add-member.component';
import { EditMemberComponent } from './modules/memberr/edit-member/edit-member.component';
import { ConfigurationComponent } from './modules/shared/configuration/configuration.component';
import { DashboardComponent } from './modules/shared/dashboard/dashboard.component';
import { EditTypeMemberComponent } from './modules/typemember/edit-type-member/edit-type-member.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './template/footer/footer.component';
import { TopbarComponent } from './template/topbar/topbar.component';
import { ModalMemberComponent } from './modules/memberr/modal-member/modal-member.component';
import { ModalTypeMemberComponent } from './modules/typemember/modal-type-member/modal-type-member.component';
import { ModalBookComponent } from './modules/book/modal-book/modal-book.component';
import { ModalCategoryComponent } from './modules/category/modal-category/modal-category.component';
import { StatisticsBookComponent } from './modules/book/statistics-book/statistics-book.component';
import { StatisticMemberComponent } from './modules/memberr/statistic-member/statistic-member.component';


const routes: Routes = [
  { path: 'book', component: BookComponent },
  { path: 'type', component: TypeMemberComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'member', component: MemberComponent },
  { path: 'return', component: ReturnBookComponent },
  { path: 'member', component: MemberComponent },
  { path: 'dailybook', component: DailyBookComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'requiredbook', component: RequiredBookComponent },
  { path: 'penalty', component: PenaltyComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'configurationreturn', component: ConfigurationReturnComponent },
  { path: 'configurationsms', component: ConfigurationSMSComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }]


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
    ConfigurationComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    EditBookComponent,
    AddBookComponent,
    AddTypeMemberComponent,
    EditTypeMemberComponent,
    EditMemberComponent,
    AddMemberComponent,
    FooterComponent,
    TopbarComponent,
    ModalMemberComponent,
    ModalTypeMemberComponent,
    ModalBookComponent,
    ModalCategoryComponent,
    StatisticsBookComponent,
    StatisticMemberComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
