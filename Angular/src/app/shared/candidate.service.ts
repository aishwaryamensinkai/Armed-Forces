import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { Candidate } from "./candidate.model";

@Injectable({
  providedIn: "root",
})
export class CandidateService {
  candidate: Candidate[];
  selectedCandidate: Candidate = {
    name: "",
    age: null,
    qualification: "",
    height: null,
    weight: null,
    gender: "",
    category: "",
    typeOfForce: "",
  };

  noAuthHeader = { headers: new HttpHeaders({ NoAuth: "True" }) };

  constructor(private http: HttpClient) {}

  //HttpMethods

  postCandidate(candidate: Candidate) {
    return this.http.post(
      environment.apiBaseUrl + "/sregister",
      candidate,
      this.noAuthHeader
    );
  }

  getCandidateProfile() {
    return this.http.get(environment.apiBaseUrl + "/candidateProfile");
  }
}
