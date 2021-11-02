import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ChallangeService } from 'src/app/shared/services/challange.service';

@Component({
  selector: 'app-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.css']
})
export class RecentWorkComponent implements OnInit {
  modalData :any;
  challanges:any;
  constructor(private modalService: NgbModal,private challageServ:ChallangeService) { }

  ngOnInit() {
    this.challanges=this.challageServ.getChallanges();
  }
  open(content,data) {
    this.modalService.open(content, { size: 'lg', scrollable: true  });
    this.modalData=data;
  }

  
}
