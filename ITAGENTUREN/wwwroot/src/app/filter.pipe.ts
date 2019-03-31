import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Pipe({
  name: 'filter'
  
})
export class FilterPipe implements PipeTransform {

  transform(JobNames: any, term: any): any {
    //Check if search term is undefined
    if(term===undefined) 
    return JobNames;
    
    //return updated JobName array
    return JobNames.filter(function(partjob){
      return partjob.Job_Title.toLowerCase().includes(term.toLowerCase());
    });
      }

}
