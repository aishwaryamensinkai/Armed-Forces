// built-in
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
// components
import { AppComponent } from "./app.component";
//routes
import { appRoutes } from "./routes";
import { FirstpageComponent } from "./firstpage/firstpage.component";
import { CandidateComponent } from './candidate/candidate.component';
import { ViewcandidateComponent } from './viewcandidate/viewcandidate.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    ViewcandidateComponent,
    FirstpageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
