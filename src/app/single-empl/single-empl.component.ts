import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmpType} from '../../Emp/Type';
import {Location} from '@angular/common';

@Component({
  selector: 'app-single-empl',
  templateUrl: './single-empl.component.html',
  styleUrls: ['./single-empl.component.css']
})
export class SingleEmplComponent implements OnInit {
  emp: EmpType;
  open = true;

  constructor(
    private  acRout: ActivatedRoute,
    private location: Location
  ) {
    this.open = true;
  }

  g() {
    this.open = false;
    this.location.go('');

  }

  ngOnInit() {

    this.acRout.queryParams.subscribe((p) => {
      this.open = true;
      this.emp = <EmpType>p;
    });
  }

}
