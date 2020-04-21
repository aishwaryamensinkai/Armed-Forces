import { Routes } from "@angular/router";
import { CandidateComponent } from './candidate/candidate.component';
import { ViewcandidateComponent } from './viewcandidate/viewcandidate.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
export const appRoutes: Routes = [
  {
    path: "ssignup",
    component: CandidateComponent,
  },
  {
    path: "viewcandidates",
    component: ViewcandidateComponent,
  },
  {
    path: "firstpage",
    component: FirstpageComponent,
  },
  {
    path: "",
    redirectTo: "/firstpage",
    pathMatch: "full",
  },
];
