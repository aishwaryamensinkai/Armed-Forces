import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CandidateService } from "../shared/candidate.service";
import { Candidate } from "../shared/candidate.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-candidate",
  templateUrl: "./candidate.component.html",
  styleUrls: ["./candidate.component.css"],
})
export class CandidateComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(
    public candidateService: CandidateService,
    private router: Router
  ) {}

  ngOnInit() {}

  refreshStudentsList() {
    this.candidateService.getCandidateProfile().subscribe((res) => {
      this.candidateService.candidate = res as Candidate[];
    });
  }

  onSubmit(form: NgForm) {
    this.candidateService.postCandidate(form.value).subscribe(
      (res) => {
        this.showSucessMessage = true;
        setTimeout(() => (this.showSucessMessage = false), 10000);
        this.resetForm(form);
      },
      (err) => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join("Invalid Age or Height");
        } else this.serverErrorMessages = "Something went wrong.";
      }
    );
  }

  resetForm(form: NgForm) {
    this.candidateService.selectedCandidate = {
      name: "",
      age: null,
      qualification: "",
      height: null,
      weight: null,
      gender: "",
      category: "",
      typeOfForce: "",
    };
    form.resetForm();
    this.serverErrorMessages = "";
  }
}
