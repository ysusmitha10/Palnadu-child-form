import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';
//import { User } from './user';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _enrollService: EnrollService) { }
  
  Details: any;
  Child: any;
  aadhar: any;
  AAdhar: any;
  School: any;
  childwork = false;
  MotherWork = false;
  FatherWork = false;
  ReligionType = false;
  fatherwork = "Labour";
  StudiedClass = "";
  SchoolJoined="";
  Aadharno = "";
  Aadhar="";
  info: any;

  Yes() {
    this.Child = true;
    if(this.SchoolJoined == "Joined"){
      this.School={
        SchoolJoined:this.SchoolJoined,
        StudiedClass:this.StudiedClass,
      }
    }
    else{
      this.School={
        SchoolJoined:this.SchoolJoined,
        StudiedClass:this.SchoolJoined,
      }
    }
  }
  No() {
    this.Child = false;
  }
  AAdharYes() {
    this.aadhar = true;
    if(this.Aadhar=="Yes"){
      this.AAdhar={
        Aadhar:this.Aadharno,
      }
    }
    else{
      this.AAdhar={
        Aadhar:this.Aadhar,
      }
    }
  }
  AAdharNo() {
    this.aadhar = false;
  }
  
  
  
  



  onSubmit(form: any) {
    console.log(form);
     
    this.Details.Name = form.Name;
    this.Details.Age = form.Age;
    this.Details.Gender =form.Gender;
    this.Details.Father_Name = form.FatherName;
    this.Details.Mother_Name = form.MotherName;
    this.Details.Guardian = form.Guardian;
    this.Details.Father_Work = form.Father_Work;
    this.Details.Mother_Work = form.Mother_Work;
    this.Details.Cast = form.Cast;
    this.Details.Religion = form.Religion;
    this.Details.Type_of_Work = form.Type_of_Work;
    this.Details.ClasstobeAdmitted = form.ClasstobeAdmitted;
    this.Details.Nearest_School = form.NearestSchool;
    this.Details.SchoolAddress = form.SchoolAddress;
    this.Details.LivingRequirements = form.LivingRequirements;
    this.Details.Ration = form.Ration;
    this.Details.Physicallyhandycapped = form.Physicallyhandycapped;
    this.Details.MentallyRetired = form.MentallyRetired;
    this.Details.DeafandDumb = form.DeafandDumb;
    this.Details.InheritedDisabilities = form.InheritedDisabilities;
    this.Details.PovertyandMalnutration = form.PovertyandMalnutration;
    console.log(this.Details);
    // this._enrollService.enroll(this.Details).subscribe(
    //   data = > console.log('Success',data),
    //   error = > console.error('error',error)
    // )
  }
  ngOnInit(): void {
  }
}