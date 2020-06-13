import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { TestService } from './test.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutesModule,
  ],
  providers: [
    TestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
