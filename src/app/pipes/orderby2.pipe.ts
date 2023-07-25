import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orderBy3"
})

/*
export class OrderByPipe3 implements PipeTransform {
  transform(array: any, field: string): any[] {
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;

  }
}
*/

export class OrderByPipe3 implements PipeTransform {
    transform(array: any, field: string, order: "asc" | "desc" = "asc"): any[] {
      return array.sort((a: any, b: any) => {
        if (order === "asc") {
          return a[field] - b[field];
        } else if (order === "desc") {
          return b[field] - a[field];
        }
        return 0;
      });
    }
  }