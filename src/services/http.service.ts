import axios, { AxiosError } from 'axios';
import { inject } from './di.service';
import { Logger } from './logger.service';

enum SendRequestMethod {
  GET = 'GET',
  POST = 'POST'
}

const OKIE_DOKIE = 'OK';

class HTTPService {
  logger = inject(Logger);

  constructor() {}

  private async load<T>(path :string, options?: { method: SendRequestMethod, body: Record<string, unknown>}): Promise<T | undefined> {
    const params = {
      method: options?.method || SendRequestMethod.GET,
    }
    try {

      const response = await axios.request({ url: path, method: params.method, data: options?.body })

      if (response.statusText = OKIE_DOKIE) {
        return response.data as T;
      }

      this.logger.info(response);
      throw new Error(`Response is not ${OKIE_DOKIE}.. :(`);

    } catch (error) {
      this.logger.panic(error);
    }

  }

  async send<T>(path: string, options?: { method: SendRequestMethod, body: Record<string, unknown>}): Promise<T | undefined> {
      return this.load<T>(path, options);
  }
}

export { HTTPService };
