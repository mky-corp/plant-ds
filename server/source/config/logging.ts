export const info = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.info(
      '[%s] [INFO] [%s] %s',
      getTimeStamp(),
      namespace,
      message,
      object
    );
  } else {
    console.info('[%s] [INFO] [%s] %s', getTimeStamp(), namespace, message);
  }
};

export const warn = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.warn(
      '[%s] [WARN] [%s] %s',
      getTimeStamp(),
      namespace,
      message,
      object
    );
  } else {
    console.warn('[%s] [WARN] [%s] %s', getTimeStamp(), namespace, message);
  }
};

export const error = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.error(
      '[%s] [ERROR] [%s] %s',
      getTimeStamp(),
      namespace,
      message,
      object
    );
  } else {
    console.error('[%s] [ERROR] [%s] %s', getTimeStamp(), namespace, message);
  }
};

export const debug = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.debug(
      '[%s] [DEBUG] [%s] %s',
      getTimeStamp(),
      namespace,
      message,
      object
    );
  } else {
    console.debug('[%s] [DEBUG] [%s] %s', getTimeStamp(), namespace, message);
  }
};

export const getTimeStamp = (): string => {
  return new Date().toISOString();
};
