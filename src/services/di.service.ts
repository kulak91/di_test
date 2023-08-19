import { AeroDI } from "aero-di";
import { ConstructorOf } from "aero-di/dist/reflection/dataInterfaces";
import { classesReflection } from "../reflectionData";

const di = new AeroDI(classesReflection);

class DependencyInjection {
  inject = <T>(ctor: ConstructorOf<T>): T => {
    return di.getByClass(ctor)
  }
}

const diService = new DependencyInjection();
di.registerInstance(diService);

export const inject = diService.inject;
