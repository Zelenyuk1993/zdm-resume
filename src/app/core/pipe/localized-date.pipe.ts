import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "localizedDate",
  pure: false
})
export class LocalizedDatePipe implements PipeTransform {

  constructor() {}

  transform(value: any, pattern: string = "mediumDate"): any {
    const datePipe: DatePipe = new DatePipe("en");
    return datePipe.transform(value, pattern) || ("Currently");
  }
}
