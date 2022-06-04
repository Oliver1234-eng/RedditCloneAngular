import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { Zajednica } from 'src/app/model/zajednica';
import { ZajednicaService } from 'src/app/service/zajednica.service';
import { Korisnik } from 'src/app/model/korisnik';
import { KorisnikService } from 'src/app/service/korisnik.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empDetail !: FormGroup;
  empObj : Employee = new Employee();
  empList : Employee[] = [];

  communityDetail !: FormGroup;
  communityObj : Zajednica = new Zajednica();
  communityList : Zajednica[] = [];

  userDetail !: FormGroup;
  userObj : Korisnik = new Korisnik();
  userList : Korisnik[] = [];

  constructor(private formBuilder : FormBuilder, private empService : EmployeeService,
    private zajednicaService : ZajednicaService, private korisnikService : KorisnikService) { }

  ngOnInit(): void {

    this.getAllEmployee();
    this.getAllCommunity();
    this.getAllUser();

    this.empDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      salary: [''],
      email: ['']
    });  

    this.communityDetail = this.formBuilder.group({
      id : [''],
      imeZajednice : [''],
      opisZajednice: [''],
      pravilaZajednice: ['']
    });  

    this.userDetail = this.formBuilder.group({
      id : [''],
      korisnickoImeKorisnika : [''],
      lozinkaKorisnika: [''],
      emailKorisnika: [''],
      putanjaDoSlike: ['']
    }); 

  }

  addEmployee() {
    console.log(this.empDetail);
    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.salary = this.empDetail.value.salary;
    this.empObj.email = this.empDetail.value.email;

    this.empService.addEmployee(this.empObj).subscribe(res=>{
        console.log(res);
        this.getAllEmployee();
    },err=>{
        console.log(err);
    });

  }

  addCommunity() {
    console.log(this.communityDetail);
    this.communityObj.id = this.communityDetail.value.id;
    this.communityObj.imeZajednice = this.communityDetail.value.imeZajednice;
    this.communityObj.opisZajednice = this.communityDetail.value.opisZajednice;
    this.communityObj.pravilaZajednice = this.communityDetail.value.pravilaZajednice;

    this.zajednicaService.addCommunity(this.communityObj).subscribe(res=>{
        console.log(res);
        this.getAllCommunity();
    },err=>{
        console.log(err);
    });

  }

  addUser() {
    console.log(this.userDetail);
    this.userObj.id = this.userDetail.value.id;
    this.userObj.korisnickoImeKorisnika = this.userDetail.value.korisnickoImeKorisnika;
    this.userObj.lozinkaKorisnika = this.userDetail.value.lozinkaKorisnika;
    this.userObj.emailKorisnika = this.userDetail.value.emailKorisnika;
    this.userObj.putanjaDoSlike = this.userDetail.value.putanjaDoSlike;

    this.korisnikService.addUser(this.userObj).subscribe(res=>{
        console.log(res);
        this.getAllUser();
    },err=>{
        console.log(err);
    });

  }

  getAllEmployee() {
    this.empService.getAllEmployee().subscribe(res=>{
        this.empList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  getAllCommunity() {
    this.zajednicaService.getAllCommunity().subscribe(res=>{
        this.communityList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  getAllUser() {
    this.korisnikService.getAllUser().subscribe(res=>{
        this.userList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editEmployee(emp : Employee) {
    this.empDetail.controls['id'].setValue(emp.id);
    this.empDetail.controls['name'].setValue(emp.name);
    this.empDetail.controls['email'].setValue(emp.email);
    this.empDetail.controls['salary'].setValue(emp.salary);

  }

  editCommunity(zajednica : Zajednica) {
    this.communityDetail.controls['id'].setValue(zajednica.id);
    this.communityDetail.controls['imeZajednice'].setValue(zajednica.imeZajednice);
    this.communityDetail.controls['opisZajednice'].setValue(zajednica.opisZajednice);
    this.communityDetail.controls['pravilaZajednice'].setValue(zajednica.pravilaZajednice);

  }

  editUser(korisnik : Korisnik) {
    this.userDetail.controls['id'].setValue(korisnik.id);
    this.userDetail.controls['korisnickoImeKorisnika'].setValue(korisnik.korisnickoImeKorisnika);
    this.userDetail.controls['lozinkaKorisnika'].setValue(korisnik.lozinkaKorisnika);
    this.userDetail.controls['emailKorisnika'].setValue(korisnik.emailKorisnika);
    this.userDetail.controls['putanjaDoSlike'].setValue(korisnik.putanjaDoSlike);

  }

  updateEmployee() {

    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.salary = this.empDetail.value.salary;
    this.empObj.email = this.empDetail.value.email;

    this.empService.updateEmployee(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllEmployee();
    },err=>{
      console.log(err);
    })

  }

  updateCommunity() {

    this.communityObj.id = this.communityDetail.value.id;
    this.communityObj.imeZajednice = this.communityDetail.value.imeZajednice;
    this.communityObj.opisZajednice = this.communityDetail.value.opisZajednice;
    this.communityObj.pravilaZajednice = this.communityDetail.value.pravilaZajednice;

    this.zajednicaService.updateCommunity(this.communityObj).subscribe(res=>{
      console.log(res);
      this.getAllCommunity();
    },err=>{
      console.log(err);
    })

  }

  updateUser() {

    this.userObj.id = this.userDetail.value.id;
    this.userObj.korisnickoImeKorisnika = this.userDetail.value.korisnickoImeKorisnika;
    this.userObj.lozinkaKorisnika = this.userDetail.value.lozinkaKorisnika;
    this.userObj.emailKorisnika = this.userDetail.value.emailKorisnika;
    this.userObj.putanjaDoSlike = this.userDetail.value.putanjaDoSlike;

    this.korisnikService.updateUser(this.userObj).subscribe(res=>{
      console.log(res);
      this.getAllUser();
    },err=>{
      console.log(err);
    })

  }

  deleteEmployee(emp : Employee) {

    this.empService.deleteEmployee(emp).subscribe(res=>{
      console.log(res);
      alert('Employee deleted successfully');
      this.getAllEmployee();
    },err => {
      console.log(err);
    });

  }

  deleteCommunity(zajednica : Zajednica) {

    this.zajednicaService.deleteCommunity(zajednica).subscribe(res=>{
      console.log(res);
      alert('Community deleted successfully');
      this.getAllCommunity();
    },err => {
      console.log(err);
    });

  }

  deleteUser(korisnik : Korisnik) {

    this.korisnikService.deleteUser(korisnik).subscribe(res=>{
      console.log(res);
      alert('User deleted successfully');
      this.getAllUser();
    },err => {
      console.log(err);
    });

  }

}
