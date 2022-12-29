import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PressComponent } from './press/press-list/press.component';
import { DieComponent } from './die/die-card/die.component';
import { JacketMakerComponent } from './jacket-maker/jacket-maker-card/jacket-maker.component';
import { BookComponent } from './book/book-card/book.component';
import { SoftwareComponent } from './software/software.component';
import { KitComponent } from './kit/kit.component';
import { PressListItemComponent } from './press/press-list-item/press-list-item.component';
import { DieListComponent } from './die/die-list/die-list.component';
import { JacketMakerListComponent } from './jacket-maker/jacket-maker-list/jacket-maker-list.component';
import { BookCardListComponent } from './book/book-list/book-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PressComponent,
    DieComponent,
    JacketMakerComponent,
    BookComponent,
    KitComponent,
    PressListItemComponent,
    DieListComponent,
    JacketMakerListComponent,
    BookCardListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HeroComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'presses', component: PressComponent},
      {path: 'dies', component: DieListComponent},
      {path: 'jacket-makers', component: JacketMakerListComponent},
      {path: 'books', component: BookCardListComponent},
      {path: 'software', component: SoftwareComponent},
      {path: 'kits', component: KitComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
