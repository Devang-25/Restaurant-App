import { Pipe, PipeTransform } from "@angular/core";
import { isArray } from "rxjs/internal/util/isArray";

@Pipe({
  name: "tableSort",
  pure: false
})
export class TableSortPipe implements PipeTransform {
  transform(value: any[], prop?: string, orderBy?: string): any {
    if (!value) return [];
    if (value.length == 0) return value;

    const isArrayOfObj = (): boolean =>
      typeof value == "object" && typeof value[0] == "object" ? true : false;

    if ((isArrayOfObj && !prop) || !orderBy) return value;
    const _temp = orderBy == "asc" ? -1 : 1;
    const _value = value.sort((a, b) => {
      const _a = isArrayOfObj ? a[prop] : a;
      const _b = isArrayOfObj ? b[prop] : b;
      if (typeof _a == "string") {
        return _a > _b ? -1 * _temp : 1 * _temp;
      } else if (typeof _a == "number") {
        return _a - _b > 0 ? -1 * _temp : 1 * _temp;
      }
    });
    return [..._value];
  }
}
