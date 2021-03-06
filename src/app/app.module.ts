import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { I18nCountrySelectModule } from 'ngx-i18n-country-select';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { SidebarModule } from 'ng-sidebar';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService, ClaimService, BigchanDbService, OothService, VoteService, MongoService,SwarmService } from './_services/index';
import { HomeComponent } from './home/index';
import { ChainPostComponent } from './ChainPost/chainpost.component';
import { PostComponent } from './Post/Post.component';
import { PostListingsComponent } from './Post-listings/Post-listings.component';
import { PostDetailsComponent } from './Post-Detail/Post-detail.component';
import { PostSideNavComponent } from './Post-Side-nav-bar/Post-side-nav.component';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

// import { MetaCoinService, Web3Service } from '../services/services';
import { ClaimComponent } from './claim/claim.component';
// import { ContractComponent } from './contract/contract.component';
import { SideNavComponent } from './side-nav/side-nav.component'
import { Globals } from './globals'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ClaimDetailComponent } from './claim-detail/claim-detail.component';
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
// this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { MomentModule } from 'angular2-moment';
import { LandingComponent } from './landing/landing.component';
import { ListingsComponent } from './listings/listings.component';
import { ModalContent } from './modal/modal.component';
import { ProfileComponent } from './profile/profile.component'; // optional, provides moment-style pipes for date formatting
import { ConfirmEqualValidatorDirective } from './_directives/confirm-equal-validator.directive';
import { Select2Module } from 'ng2-select2';
import { QuillModule } from 'ngx-quill';
//import { InputMaskModule } from 'ng2-inputmask';
import { TagInputModule } from 'ngx-chips';
import {  ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { NguCarouselModule } from '@ngu/carousel';
import { ActivationComponent } from './activation/activation.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SafePipe } from './_helpers/safe.pipe';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
// const SERVICES = [
//   MetaCoinService,
//   Web3Service,
// ]
@NgModule({
  imports: [
    BrowserModule,
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
     QuillModule,
      //InputMaskModule,
    FormsModule,
    HttpClientModule,
    routing,
    SidebarModule.forRoot(),
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    MomentModule,
    NgxQRCodeModule,
    NgIdleKeepaliveModule.forRoot(),
    I18nCountrySelectModule.forRoot(),
    Select2Module,
    LightboxModule,
    NguCarouselModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5IGhOP4Sk_MzGLLMtmmjdXNP1bN_3Y_g'
    }),
    AgmJsMarkerClustererModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    ChainPostComponent,
    PostComponent,
    PostListingsComponent,
    PostDetailsComponent,
    PostSideNavComponent,
    LoginComponent,

    RegisterComponent,
    ClaimComponent,
    // ContractComponent,
    SideNavComponent,
    TopNavComponent,
    ClaimDetailComponent,
    LandingComponent,
    ListingsComponent,
    ModalContent,
    ProfileComponent,
    ConfirmEqualValidatorDirective,
    ActivationComponent,
    SafePipe
  ],
  providers: [
    // SERVICES,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    ClaimService,
    BigchanDbService,
    OothService,
    Globals,
    VoteService,
    MongoService,
    SwarmService,
    // provider used to create fake backend
    fakeBackendProvider,
    Title
  ],
  entryComponents: [ModalContent],
  bootstrap: [AppComponent]
})

export class AppModule {


 }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
