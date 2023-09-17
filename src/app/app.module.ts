import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutoComponent } from './views/produto/produto.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { ProdutoListaComponent } from "./views/produto/produto-lista/produto-lista.component";
import { HttpClientModule } from '@angular/common/http';





@NgModule({
    declarations: [
        AppComponent,
        ProdutoComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatSnackBarModule,
        MatButtonModule,
        ProdutoListaComponent

    ]
})
export class AppModule { }
