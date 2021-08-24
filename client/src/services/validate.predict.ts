import { maped } from './data.storage';

export const transformArray = (predict: number[]) => {
  const answer = [];

  for (let idx = 0; idx < predict.length; ++idx) {
    if (predict[idx] > 0.1) {
      answer.push({
        res: maped[idx],
        value: `al ${(predict[idx] * 100).toFixed(2)} %`
      });
    }
  }

  return answer;
};
