import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { InputComponent } from './main/input/input.component';
import { ListComponent } from './main/list/list.component';
import { DetailsComponent } from './main/details/details.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, MainComponent, InputComponent, ListComponent, DetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
