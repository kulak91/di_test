import { ChildClass } from "./pile-of-classes";
import { inject } from "./services";


export class MyTestClass {
  testMethod() {
    const test = inject(ChildClass);

    test.spyOn();

  }
}
