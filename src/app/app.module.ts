
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CidLoadService } from './services/cid-load.service'
import { UfLoadService } from './services/uf-load.service'
import { MatDialogModule } from '@angular/material';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

export function loadCid(cidLoadService: CidLoadService) {
  return () => cidLoadService.load();
}

export function loadUf(ufLoadService: UfLoadService) {
  return () => ufLoadService.load();
}


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    NgbModule,
    FontAwesomeModule,
    MatDialogModule
  ],
  providers: [CidLoadService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadCid,
      multi: true,
      deps: [CidLoadService]
    }, UfLoadService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadUf,
      multi: true,
      deps: [UfLoadService]
    },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
   { provide: LOCALE_ID, useValue: 'pt' },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
