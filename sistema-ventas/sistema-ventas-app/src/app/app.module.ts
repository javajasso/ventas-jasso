import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { tokenInterceptor } from './shared/interceptors/token.interceptor';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([LoadingInterceptor, tokenInterceptor]),
      withFetch()
    )
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
