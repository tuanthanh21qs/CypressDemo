import { randomInput } from '../../../../../support/utils/inputInformation';

export const dataCreateGroup = {
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
      'qwertyuiopasdfghjklzxcvbnm1234567890-_+={}[]()~`@&%',
      true
    ),
    empty: '',
  },
  role: {
    invalid: 0,
    admin: 1,
    leaner: 2,
    teacher: 3,
    incorrect: 100,
  },
  tagsList: {
    valid: [
      randomInput(
        10,
        30,
        'qwertyuiopasdfghjklzxcvbnm1234567890-_+={}[]()~`@&%',
        true
      ),
      randomInput(
        10,
        30,
        'qwertyuiopasdfghjklzxcvbnm1234567890-_+={}[]()~`@&%',
        true
      ),
    ],
    empty: [],
  },
  description: {
    valid: randomInput(
      10,
      30,
      'qwertyuiopasdfghjklzxcvbnm1234567890-_+={}[]()~`@&%',
      true
    ),
    empty: '',
  },
  status: {
    invalid: 0,
    publish: 1,
    unpublish: 2,
    draft: 3,
    incorrect: 100,
  },
};
