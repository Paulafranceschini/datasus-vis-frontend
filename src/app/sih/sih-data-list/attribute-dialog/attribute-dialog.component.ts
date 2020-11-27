import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';

@Component({
    selector: 'attribute-dialog',
    templateUrl: './attribute-dialog.component.html',
    styleUrls: ['./attribute-dialog.component.css'] 
})
export class AttributeDialogComponent implements OnInit {

    form: FormGroup;
    description:string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<AttributeDialogComponent>){}
        //@Inject(MAT_DIALOG_DATA) {description,longDescription,
        //    category}:Course ) {

        //this.description = description;


        //this.form = fb.group({
         //   description: [description, Validators.required],
         //   category: [category, Validators.required],
         //   releasedAt: [moment(), Validators.required],
         //   longDescription: [longDescription,Validators.required]
        //}
        //)};

    

    ngOnInit() {

    }


    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

}