import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  @Input() message: string
  @Input() type = "success"

  constructor(
    public modal: BsModalRef
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.modal.hide()
  }

}