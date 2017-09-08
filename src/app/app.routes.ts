import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductService } from './product.service';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { CollectionComponent } from './collection/collection.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdvertsComponent } from './adverts/adverts.component';
import { DesignComponent } from './design/design.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { NewsletterSimpleComponent } from './newsletter-simple/newsletter-simple.component';
import { OpinionComponent } from './opinion/opinion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductSimpleComponent } from './product-simple/product-simple.component';
import { TopBrandsComponent } from './top-brands/top-brands.component';
import { SharpenYourLookComponent } from './sharpen-your-look/sharpen-your-look.component';
import { ProductSingleComponent } from './product-single/product-single.component';
import { AdvertOneComponent } from './advert-one/advert-one.component';
import { AdvertTwoComponent } from './advert-two/advert-two.component';
import { AdvertThreeComponent } from './advert-three/advert-three.component';
import { Error404Component } from './error-404/error-404.component';
import { CollectionSingleComponent } from './collection-single/collection-single.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ProductComponent } from './product/product.component';

export const router: Routes = [
{ path: 'contact', component: ContactComponent },
{ path: 'collection', component: CollectionComponent },
{ path: 'product', component: ProductComponent },
{ path: 'homepage', component: HomepageComponent },
{ path: '', pathMatch: 'full', redirectTo: 'homepage' },
{ path: '**', component: Error404Component }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);