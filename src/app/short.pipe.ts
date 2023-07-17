import { Pipe, PipeTransform } from '@angular/core';
import {Student} from './student';
@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(students: Student[],course:string,sort:string): any {
    var sts=students;
    if(course!=''&&course!='All')
    sts=students.filter(item=>item.course==course);
    switch(sort){
      case 'Name Ascending':
      return sts.sort(this.sortNameAsc);
      case 'Name Descending':
      return sts.sort(this.sortNameDesc);
      case 'Completed High to Low':
       return sts.sort(this.sortCompHighLow);
        case 'Completed Low to High':
       return sts.sort(this.sortCompLowHigh);
       default:
       return sts;
    }
    return null;
}

sortNameAsc(s1:Student, s2:Student):number{
  return s1.name.localeCompare(s2.name);
}
sortNameDesc(s1:Student, s2:Student):number{
  return s2.name.localeCompare(s1.name);
}
sortCompHighLow(s1:Student, s2:Student):number{
  return s2.comp-s1.comp;
}
sortCompLowHigh(s1:Student,s2:Student):number{
  return s1.comp-s2.comp;
}
}