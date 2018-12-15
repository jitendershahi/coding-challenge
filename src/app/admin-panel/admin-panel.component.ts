import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  admin_data: any;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.dataService.getData()
      .subscribe((res:any) => {
        if(res.status == "success"){
          this.admin_data = res.data
        }
      })
  }

  editData(){

  }

  deleteData(){
  }

}
