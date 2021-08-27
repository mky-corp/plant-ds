import { maped } from './data.storage';

export const transformArray = (predict: number[]) => {
  const answer = [];

  for (let idx = 0; idx < predict.length; ++idx) {
    if (predict[idx] > 0.1) {
      const message = maped[idx].split(':');

      answer.push({
        res: message,
        value: `${(predict[idx] * 100).toFixed(2)}`
      });
    }
  }

  return answer;
};
