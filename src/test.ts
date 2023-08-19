import { ChildClass } from './pile-of-classes';
import { inject } from './services';

class MyTestClass {
  testMethod() {
    const test = inject(ChildClass);

    test.spyOn();
  }
}

export default MyTestClass;
