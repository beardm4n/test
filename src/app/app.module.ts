import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AllComponentComponent } from './all-component/all-component.component';
import { DescriptionComponent } from './description/description.component';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { LogInToRegisterComponent } from './log-in-to-register/log-in-to-register.component';
import { ModalComponent } from './modal/modal.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { TrackCardComponent } from './track-card/track-card.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponentComponent,
    DescriptionComponent,
    ExchangeRatesComponent,
    LogInToRegisterComponent,
    ModalComponent,
    MusicPlayerComponent,
    TrackCardComponent,
    UserComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AllComponentComponent } ,
      { path: 'component/:componentId', component: DescriptionComponent },
      { path: 'player', component: MusicPlayerComponent },
      { path: 'login', component: LogInToRegisterComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
