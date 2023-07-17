import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from './student';
@Pipe({
  name: 'department'
})
export class DepartmentPipe implements PipeTransform {

  transform(employee: Employee[],department:string,sort:string): any {
    var sts=employee;
    if(department!=''&& department!='All')
    sts=employee.filter(item=>item.department==department);
    switch(sort){
      case 'Name Ascending':
      return sts.sort(this.sortNameAsc);
      case 'Name Descending':
      return sts.sort(this.sortNameDesc);
      case 'Attendance High to Low':
       return sts.sort(this.sortAttenHighLow);
        case 'Attendance Low to High':
       return sts.sort(this.sortAttenLowHigh);
       default:
       return sts;
    }
    return null;
}

sortNameAsc(s1:Employee, s2:Employee):number{
  return s1.name.localeCompare(s2.name);
}
sortNameDesc(s1:Employee, s2:Employee):number{
  return s2.name.localeCompare(s1.name);
}
sortAttenHighLow(s1:Employee, s2:Employee):number{
  return s2.attendance-s1.attendance;
}
sortAttenLowHigh(s1:Employee,s2:Employee):number{
  return s1.attendance-s2.attendance;
}
}