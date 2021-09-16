import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { ApiService } from './api.service';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
const routes=[
  
  {path:'app',component:AppComponent}
]
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
