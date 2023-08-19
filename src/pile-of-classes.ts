import { HTTPService, inject, Logger } from "./services";

interface ParentInterface {
  httpService: HTTPService;
  parentMethod: () => void;
}

export class ParentClass implements ParentInterface {
  httpService: HTTPService;
  constructor() {
    this.httpService = inject(HTTPService);
  }
  parentMethod() {
    console.log(`Called from parent class: ${this.constructor.name}`);
  }
}

export class ChildClass extends ParentClass {
  logger = inject(Logger);

  childMethod() {
    console.log(`Called from child class: ${this.constructor.name}`);
  }

  async spyOn(dude: string = 'what1slove'): Promise<void> {
    const requestURL = `https://api.github.com/users/${dude}/repos`;
      const repos = await this.httpService.send<Array<{ name?: string}>>(requestURL);
      if (!repos) {
        return this.logger.info('Ah.. man');
      }
      this.logger.info(dude, 'has', repos.length, 'repos:')
      for (const repo of repos) {
        this.logger.info(repo.name || 'unknown repo');

      }
  }
}
