import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { RestService } from '../../services/rest.service';
@Component({
  selector: 'app-sih-data-list',
  templateUrl: './sih-data-list.component.html',
  styleUrls: ['./sih-data-list.component.css']
})


export class SihDataListComponent implements OnInit {

  data: any;
  form: FormGroup;

  constructor(private rs: RestService, private dialog: MatDialog, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      atributos: this.formBuilder.array([])
    })
  }



  ngOnInit() {


    this.rs.listarAtributos()
      .subscribe
      (
        (response) => {

          this.data = response;
          console.log(this.data)

        },
        (error) => {
          console.log("No Data Found" + error);
        }
      )

  }

  onCheckboxChange(e) {
    const atributosSelecionados: FormArray = this.form.get('atributos') as FormArray;

    if (e.target.checked) {
      atributosSelecionados.push(new FormControl(e.target.value));
    } else {
      const index = atributosSelecionados.controls.findIndex(x => x.value === e.target.value);
      atributosSelecionados.removeAt(index);
    }
  }

  submit() {
    console.log(this.form.value);
  }




}

