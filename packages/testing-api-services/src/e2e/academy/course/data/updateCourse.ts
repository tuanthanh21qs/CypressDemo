import { randomInput } from '../../../../support/utils/inputInformation';

export const dataUpdateCourse = {
  token: {
    correct:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X3R5cGUiOjIsImVtYWlsIjoiYWRtaW5AZGVtZW4udm4iLCJleHAiOjE2OTMwMDA5NjQsImlkIjoiODQzOTljOWItYmM2ZS00OTliLWI2NzMtNDE5YmExY2M0MmMyIiwiaXNzIjoicGFydG5lcnNoaXAtc2VydmljZSIsIm5hbWUiOiJE4bq_IG3DqG4iLCJwYXJ0bmVyc2hpcF9pZCI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZSIsInN1YiI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZiJ9.QYpS35fMs8Y7RSfgsm7q3q77Ybmxk5AAf24uhrGpGvI',
    incorrect:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X3R5cGUiOjIsImVtYWlsIjoiYWRtaW5AZGVtZW4udm4iLCJleHAiOjE2OTMwMDA5NjQsImlkIjoiODQzOTljOWItYmM2ZS00OTliLWI2NzMtNDE5YmExY2M0MmMyIiwiaXNzIjoicGFydG5lcnNoaXAtc2VydmljZSIsIm5hbWUiOiJE4bq_IG3DqG4iLCJwYXJ0bmVyc2hpcF9pZCI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZSIsInN1YiI6IjY0MmY5YWU1NjI4MzlmNTFMmMwNDk3ZiJ9.QYpS35fMs8Y7RSfgsm7q3q77Ybmxk5AAf24uhrGpGvI',
    expired:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X3R5cGUiOjIsImVtYWlsIjoiYWRtaW5AZGVtZW4udm4iLCJleHAiOjE2ODI5OTY1NDQsImlkIjoiODQzOTljOWItYmM2ZS00OTliLWI2NzMtNDE5YmExY2M0MmMyIiwiaXNzIjoicGFydG5lcnNoaXAtc2VydmljZSIsIm5hbWUiOiJE4bq_IG3DqG4iLCJwYXJ0bmVyc2hpcF9pZCI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZSIsInN1YiI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZiJ9.pZjHk5w-Y9oJg0yDroMpIZcMeg_XHH3luA8HEyUwdbo',
    empty: '',
  },
  id: {
    correct: '645b6b82b7c9f85256f02222',
    incorrect: '644b9c6c7185e5768418602a',
    empty: '',
  },
  name: {
    valid: randomInput(
      10,
      30,
      "qwertyuiopadsfghjklzxcvbnm1234567890-_*&/''[]{}.,~`()",
      true
    ),
    exist: 'Thằng Chó Nhiều',
    empty: '',
  },
  tagsList: {
    valid: ['abc- update', 'nntt - update'],
    empty: [],
  },
  code: {
    valid: randomInput(
      10,
      30,
      "qwertyuiopadsfghjklzxcvbnm1234567890-_*&/''[]{}.,~`()",
      true
    ),
    exist: 'THANGCHONHIEU',
    empty: '',
  },
  description: {
    valid: randomInput(
      100,
      300,
      "qwertyuiopadsfghjklzxcvbnm1234567890-_*&/''[]{}.,~`()",
      true
    ),
    empty: '',
  },
  slug: {
    valid: randomInput(
      100,
      300,
      "qwertyuiopadsfghjklzxcvbnm1234567890-_*&/''[]{}.,~`()",
      true
    ),
    empty: '',
  },
  coverName: {
    valid: randomInput(
      100,
      300,
      "qwertyuiopadsfghjklzxcvbnm1234567890-_*&/''[]{}.,~`()",
      true
    ),
    empty: '',
  },
  requiredCourseIdsList: {
    valid: ['644a489bfbfc463a8a46fca4', '644a48a0fbfc463a8a46fca5'],
    notExist: ['644a481bfbfc463a8a46fca4', '644a48a0fbfc463a8a46fca5'],
    empty: [],
  },
  status: {
    invalid: 0,
    publish: 1,
    unPublish: 2,
    draft: 3,
    incorrect: 10,
  },
  theme: {
    valid: 4,
    incorrect: 100,
  },
  courseMapsList: {
    valid: [
      { type: 1, id: '644c909251007907cbbc0eb5', name: 'Lùa gà căn bản' },
      { type: 0, id: '', name: '' },
    ],
    notExist: [
      { type: 1, id: '644c900251007907cbbc0eb5', name: 'not exist' },
      { type: 2, id: '644c900251007907cbbc0eb5', name: 'not exist' },
    ],
    typeIncorrect: [
      { type: 0, id: '', name: '' },
      { type: 2, id: '644c909251007907cbbc0eb5', name: 'abc' },
    ],
    empty: [{ type: 0, id: '', name: '' }],
  },
};
