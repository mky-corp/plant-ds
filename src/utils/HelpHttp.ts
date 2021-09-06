const HelpHttp = () => {
  const customFetch = async (endpoint: string, options: RequestInit) => {
    const defaultHeader = {
      accept: 'application/json'
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || 'GET';
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    if (!options.body) delete options.body;

    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || '00',
              statusText: res.statusText || 'Ocurrió un error'
            })
      )
      .catch((err) => err);
  };

  const get = (url: string, options: RequestInit) => customFetch(url, options);

  const post = (url: string, options: RequestInit) => {
    options.method = 'POST';
    return customFetch(url, options);
  };

  const put = (url: string, options: RequestInit) => {
    options.method = 'PUT';
    return customFetch(url, options);
  };

  const del = (url: string, options: RequestInit) => {
    options.method = 'DELETE';
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del
  };
};

export { HelpHttp };
