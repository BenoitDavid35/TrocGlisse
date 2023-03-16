//AngularModules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { FilterService } from '../service/filterService/filter.service';

//modules
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FourOhFourComponent } from './fourohfour/fourohfour.component';
import { AccountComponent } from './account/account.component';
import { NavbarSettingsComponent } from './navbar-settings/navbar-settings.component';
import { CommandHistoryComponent } from './command-history/command-history.component';
import { BasketComponent } from './basket/basket.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { LocatorComponent } from './locator/locator.component';
import { ContactComponent } from './contact/contact.component';
import { TiquetOverviewComponent } from './tiquet-overview/tiquet-overview.component';
import { ContactViewerComponent } from './contact-viewer/contact-viewer.component';
import { HeartComponent } from './heart/heart.component';
import { AccountWidgetComponent } from './account-widget/account-widget.component';
import { MailConfirmComponent } from './mail-confirm/mail-confirm.component';

//services
import { EncrDecrService } from '../service/encrdecrService/encr-decr.service';
import { UploadService } from '../service/upload/upload.service';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    ProductComponent,
    ProductListComponent,
    FourOhFourComponent,
    AccountComponent,
    NavbarSettingsComponent,
    CommandHistoryComponent,
    BasketComponent,
    ConnexionComponent,
    CreateAccountComponent,
    CreateProductComponent,
    LocatorComponent,
    ContactComponent,
    TiquetOverviewComponent,
    ContactViewerComponent,
    HeartComponent,
    AccountWidgetComponent,
    MailConfirmComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EncrDecrService,
    UploadService,
    CookieService,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
