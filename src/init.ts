import { inject } from "./services";
import MyTestClass from "./test";

const init = inject(MyTestClass).testMethod;

init();
