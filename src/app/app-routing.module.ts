import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../service/AuthGuard/auth-guard.service';
import { RoleGuardServiceService } from '../service/RoleGuardService/role-guard-service.service';

import { WelcomeComponent } from './welcome/welcome.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FourOhFourComponent } from './fourohfour/fourohfour.component';
import { AccountComponent } from './account/account.component';
import { CommandHistoryComponent } from './command-history/command-history.component';
import { BasketComponent } from './basket/basket.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ContactComponent } from './contact/contact.component';
import { TiquetOverviewComponent } from './tiquet-overview/tiquet-overview.component';
import { ContactViewerComponent } from './contact-viewer/contact-viewer.component';
import { HeartComponent } from './heart/heart.component';
import { MailConfirmComponent } from './mail-confirm/mail-confirm.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'product/:id_category', component: ProductListComponent},
  {path: 'product/:id_category/:id_product', component: ProductComponent},
  {path: 'account-settings', canActivate: [AuthGuardService], component: AccountComponent},
  {path: 'my-products', canActivate: [AuthGuardService], component: CommandHistoryComponent},
  {path: 'basket', canActivate: [AuthGuardService], component: BasketComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'mail_confirmation', component: MailConfirmComponent},
  {path: 'mail_confirmation/:confirm_token', component: MailConfirmComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'create-product', canActivate: [AuthGuardService], component: CreateProductComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'tiquet_overview', canActivate: [RoleGuardServiceService], data: {expectedRole: 'admin'}, component: TiquetOverviewComponent},
  {path: 'contact-details/:id_contact', canActivate: [RoleGuardServiceService], data: {expectedRole: 'admin'}, component: ContactViewerComponent},
  {path: 'my-favorites', canActivate: [AuthGuardService], component: HeartComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'}
  ///about-us
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
