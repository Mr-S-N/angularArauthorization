import {Component, OnInit} from '@angular/core';
import {JsonPlaceHolderService} from '../services/json-place-holder.service';
import {gotojs} from 'goto-js';
import {Router} from '@angular/router';
import {EmpType} from '../Emp/Type';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  curent = 0;
  p = true;
  n = false;
  mess = '';
  maxPAge = 0;
  curentpage = 0;
  showEdit = false;
  dep = [];
  amount = 0;
  e = [];

  constructor(private  ja: JsonPlaceHolderService, private router: Router) {
  }

  Standart() {
    this.ja.getSome(this.curent).subscribe((res) => {
      this.e = res;
      this.xz();
    });
    this.ja.getAmount().subscribe((res) => {
      this.amount = res;
      this.maxPAge = Math.ceil(this.amount / 4);
      console.log(this.maxPAge);
    });
  }

  ngOnInit() {
    this.Standart();
  }

  EditSend(fromReg) {
    console.log(fromReg.value);
    this.ja.postEdit(fromReg.value).subscribe((res) => {
    });
    this.Standart();
    window.location.reload();

  }

  Edit() {
    this.showEdit = true;
  }

  serch(name) {
    console.log(name.value);
    this.ja.postSerch(name.value).subscribe((res) => {
      if (res !== false) {
        this.e = res as EmpType[];
        this.mess = '';
      } else {
        this.mess = 'nan';
      }
    });
  }

  xz() {
    this.ja.getDep().subscribe((res) => {
      this.dep = res;
    });
  }

  Delete(id) {
    this.ja.postDel(id).subscribe((res) => {
    });
    window.location.reload();
  }

  cancel() {
    this.showEdit = false;
  }

  prev() {
    if ((this.curent - 4) >= 0) {
      this.curent -= 4;
      this.curentpage -= 1;
      this.Standart();
      this.n = false;
      if (this.curent === 0) {
        this.p = true;
      }
    }
  }

  next() {
    if ((this.curent + 4) <= this.amount) {
      this.curent += 4;
      this.curentpage += 1;

      this.Standart();

      this.p = false;
      if (this.curentpage === this.maxPAge - 1) {
        this.n = true;
      }
    }
  }
}
