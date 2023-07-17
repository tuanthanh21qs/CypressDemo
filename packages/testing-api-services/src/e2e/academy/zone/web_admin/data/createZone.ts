import { randomInput } from '../../../../../support/utils/inputInformation';

export const dataCreateZone = {
  token: {
    correct:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X3R5cGUiOjIsImVtYWlsIjoiYWRtaW5AZGVtZW4udm4iLCJleHAiOjE2OTI5MTYxNzEsImlkIjoiZjAxMDk2MTEtYTE5ZS00YzIzLWI2NjMtMDBkNmQ5ZDc1NDVkIiwiaXNzIjoicGFydG5lcnNoaXAtc2VydmljZSIsIm5hbWUiOiJE4bq_IG3DqG4iLCJwYXJ0bmVyc2hpcF9pZCI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZSIsInN1YiI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZiJ9.hZmzeDRXIjByph_u4TmbLyU4VBYgqqeRcTBSwS4uajU',
    incorrect:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X3R5cGUiOjIsImVtYWlsIjoiYWRtaW5AZGVtZW4udm4iLCJleHAiOjE2OTI5MTYxNzEsImlkIjoiZjAxMDk2MTEtYTE5ZS00YzIzLWI2NjMtMDBkNmQ5ZDc1NDVkIiwiaXNzIjoicGFydG5lcnNoaXAtc2VydmljZSIsIm5hbWUiOiJE4bq_IG3DqG4iLCJwYXJ0bmVyc2hpcF9pZCI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZSIsInN1YiI6IjY0MmY5YWU1NjI4MzlmNhMmMwNDk3ZiJ9.hZmzeDRXIjByph_u4TmbLyU4VBYgqqeRcTBSwS4uajU',
    expired:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X3R5cGUiOjIsImVtYWlsIjoiYWRtaW5AZGVtZW4udm4iLCJleHAiOjE2ODI5MDYwNjksImlkIjoiZjAxMDk2MTEtYTE5ZS00YzIzLWI2NjMtMDBkNmQ5ZDc1NDVkIiwiaXNzIjoicGFydG5lcnNoaXAtc2VydmljZSIsIm5hbWUiOiJE4bq_IG3DqG4iLCJwYXJ0bmVyc2hpcF9pZCI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZSIsInN1YiI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZiJ9.Luj0F3qrQU-APei8pMZvrm1h82aOSwdp6YhZX0-zaNY',
    empty: '',
  },
  name: {
    valid: randomInput(
      10,
      30,
      'qwertyuiopasdfghjklzxcvbnm -_[]{}()0123456789&',
      true
    ),
    invalid: '',
    empty: '',
  },
  slug: {
    valid: randomInput(
      10,
      30,
      'qwertyuiopasdfghjklzxcvbnm -_[]{}()0123456789&',
      true
    ),
    invalid: '',
    empty: '',
  },
  description: {
    valid: randomInput(
      10,
      30,
      'qwertyuiopasdfghjklzxcvbnm -_[]{}()0123456789&',
      true
    ),
    invalid: '',
    empty: '',
  },
  goalIdsList: {
    correct: [
      '644a47befbfc463a8a46fc9c',
      '644a47c7fbfc463a8a46fc9d',
      '644a47d2fbfc463a8a46fc9e',
    ],
    incorrect: ['644a47b2fbdc463a8a46fc9b', '644a47d3fbfc463a8a46fc9e'],
    empty: [],
  },
  coverName: {
    valid: 'abc.png',
    invalid: '',
    empty: '',
  },
  status: {
    valid: {
      public: 1,
      unPublish: 2,
      draft: 3,
    },
    incorrect: 10,
    null: null,
  },
  tagsList: {
    valid: ['abc', 'xyz'],
    invalid: ['', ''],
    empty: [],
  },
  address: {
    valid: '756a Âu cơ',
    invalid: '',
    empty: '',
  },
};
