import { EvethingReqParams, SourcesReqParams } from '../../types/types';

class Loader {
  baseLink: string;

  options: EvethingReqParams;

  constructor(baseLink: string, options: EvethingReqParams) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint = '', options = {} },
    callback = () => {
      process.stderr.write('No callback for GET response');
    },
  ) {
    this.load('GET', endpoint, callback, options);
  }

  load(method: string, endpoint: string, callback: () => void, options: SourcesReqParams): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(Loader.errorHandler)
      .then((res) => res.json)
      .then((data) => callback())
      .catch((err) => process.stderr.write(err));
  }

  makeUrl(options: SourcesReqParams, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  static errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        process.stderr.write(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
    return res;
  }
}

export default Loader;
