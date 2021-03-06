import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AgmCoreModule } from '@agm/core';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';
import { TabsPage } from '../pages/tabs/tabs';
import { Aayam19Page } from '../pages/aayam19/aayam19';
import { RulesPage } from '../pages/aayam19/rules/rules';
import { RegisterPage } from '../pages/aayam19/register/register';
import { PrizesPage } from '../pages/aayam19/prizes/prizes';
import { FaqPage } from '../pages/aayam19/faq/faq';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Clue0aPage } from '../pages/aayam19/clue0a/clue0a';
import { Clue0bPage } from '../pages/aayam19/clue0b/clue0b';
import { Clue1Page } from '../pages/aayam19/clue1/clue1';
import { Clue2Page } from '../pages/aayam19/clue2/clue2';
import { Clue3Page } from '../pages/aayam19/clue3/clue3';
import { Clue4Page } from '../pages/aayam19/clue4/clue4';
import { Clue5Page } from '../pages/aayam19/clue5/clue5';
import { Clue6Page } from '../pages/aayam19/clue6/clue6';
import { CluebombPage } from '../pages/aayam19/cluebomb/cluebomb';
import { CountDown } from 'ng4-date-countdown-timer';
import { Welcome } from '../pages/welcome/welcome';
import { AuthProvider } from '../providers/auth/auth';
import { EnterTeamPage } from '../pages/aayam19/enter-team/enter-team';
import { MainPage } from '../pages/main/main';
import { MoviesPage } from '../pages/aayam19/movies/movies';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AteaminfoPage } from '../pages/ateaminfo/ateaminfo';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { VerificationPage } from '../pages/aayam19/verification/verification';
import { SecondqrPage } from '../pages/secondqr/secondqr';
import { ThirdqrPage } from '../pages/thirdqr/thirdqr';
import { FourthqrPage } from '../pages/fourthqr/fourthqr';
import { FifthqrPage } from '../pages/fifthqr/fifthqr';
import { SixthqrPage } from '../pages/sixthqr/sixthqr';
import { FuelPage } from '../pages/aayam19/fuel/fuel';
import { PaymentConfirmPage } from '../pages/payment-confirm/payment-confirm';
import { StartPage } from '../pages/start/start';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    TabsPage,
    Aayam19Page,
    RulesPage,
    RegisterPage,
    PrizesPage,
    FaqPage,
    Clue0aPage,
    Clue0bPage,
    Clue1Page,
    Clue2Page,
    Clue3Page,
    Clue4Page,
    Clue5Page,
    Clue6Page,
    CluebombPage,
    CountDown,
    Welcome,
    EnterTeamPage,
    MainPage,
    MoviesPage,
    AteaminfoPage,
    QrcodePage,
    VerificationPage,
    SecondqrPage,
    ThirdqrPage,
    FourthqrPage,
    FifthqrPage,
    SixthqrPage,
    FuelPage,
    PaymentConfirmPage,
    StartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB64xfKyWJlIc-1wtjw9F5dJ4foGwI6M5g'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage,
    TabsPage,
    Aayam19Page,
    RulesPage,
    RegisterPage,
    PrizesPage,
    FaqPage,
    Clue0aPage,
    Clue0bPage,
    Clue1Page,
    Clue2Page,
    Clue3Page,
    Clue4Page,
    Clue5Page,
    Clue6Page,
    CluebombPage,
    CountDown,
    Welcome,
    MoviesPage,
    EnterTeamPage,
    MainPage,
    AteaminfoPage,
    QrcodePage,
    VerificationPage,
    SecondqrPage,
    ThirdqrPage,
    FourthqrPage,
    FifthqrPage,
    SixthqrPage,
    FuelPage,
    PaymentConfirmPage,
    StartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    BarcodeScanner
  ]
})
export class AppModule {}
