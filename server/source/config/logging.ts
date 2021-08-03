export const info = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
  } else {
    console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
  }
};

export const warn = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
  } else {
    console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
  }
};

export const error = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
  } else {
    console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
  }
};

export const debug = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
  } else {
    console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
  }
};

export const getTimeStamp = (): string => {
  return new Date().toISOString();
};