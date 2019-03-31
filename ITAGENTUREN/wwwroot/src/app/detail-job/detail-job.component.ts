import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-detail-job',
  templateUrl: './detail-job.component.html',
  styleUrls: ['./detail-job.component.css']
})
export class DetailJobComponent implements OnInit {
  jobid;
  constructor(  public ActivatedRoute: ActivatedRoute, private userService: UserService,) { 
    this.ActivatedRoute.params.subscribe(params => {
    this.jobid = params['id'];
     console.log("Jobid"+this.jobid)
    });
    this.getjob()
    
  }
  

  ngOnInit() 
  {
    
  }
  getjob(){
    //alert("I am in Corresponding ts file");
    this.userService.particularJobs()
    .subscribe(res => this.jobid = res);
    alert(this.jobid)
   // alert(this.Jobs);
  }

}
