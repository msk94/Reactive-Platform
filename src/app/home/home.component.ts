import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { tokenReference } from '@angular/compiler';
// import { Data } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  obj: any = [];
  showList: boolean = false;
  public showIndividual: any = [];
  
  constructor(private testService: TestService) {} 

  ngOnInit() {
    this.getCode();
  }

  getCode(){
    return this.testService.getJSON()
    .subscribe((data) => this.obj = data);
    // .subscribe(data => console.log(data));
  }

  toggle(index: number){
    // this.showList = ! this.showList;

    // if (index === 1) {
      // this.showList = true;
      this.showIndividual = this.obj.members[index].activity_periods;
      // console.log('indivuals list', this.showIndividual);
      // this.obj.members[2].activity_periods.style.display = "none";
    // }
    // if (index === 1){
    //   this.obj.members[index + 1].activity_periods.style.display = "none";
    // }



  //   if(this.showList){
  //     this.btnName = 'hide';
  //   }
  //   else{
  //     this.btnName = 'show';
  //   }
  }

}
