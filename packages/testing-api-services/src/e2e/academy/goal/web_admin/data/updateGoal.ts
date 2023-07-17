import { randomInput } from '../../../../../support/utils/inputInformation';

export const dataUpdateGoal = {
  token: {
    correct:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X3R5cGUiOjIsImVtYWlsIjoiYWRtaW5AZGVtZW4udm4iLCJleHAiOjE2OTI5MTYxNzEsImlkIjoiZjAxMDk2MTEtYTE5ZS00YzIzLWI2NjMtMDBkNmQ5ZDc1NDVkIiwiaXNzIjoicGFydG5lcnNoaXAtc2VydmljZSIsIm5hbWUiOiJE4bq_IG3DqG4iLCJwYXJ0bmVyc2hpcF9pZCI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZSIsInN1YiI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZiJ9.hZmzeDRXIjByph_u4TmbLyU4VBYgqqeRcTBSwS4uajU',
    incorrect:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X3R5cGUiOjIsImVtYWlsIjoiYWRtaW5AZGVtZW4udm4iLCJleHAiOjE2OTI5MTYxNzEsImlkIjoiZjAxMDk2MTEtYTE5ZS00YzIzLWI2NjMtMDBkNmQ5ZDc1NDVkIiwiaXNzIjoicGFydG5lcnNoaXAtc2VydmljZSIsIm5hbWUiOiJE4bq_IG3DqG4iLCJwYXJ0bmVyc2hpcF9pZCI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZSIsInN1YiI6IjY0MmY5YWU1NjI4MzlmNhMmMwNDk3ZiJ9.hZmzeDRXIjByph_u4TmbLyU4VBYgqqeRcTBSwS4uajU',
    expired:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X3R5cGUiOjIsImVtYWlsIjoiYWRtaW5AZGVtZW4udm4iLCJleHAiOjE2ODI5MDYwNjksImlkIjoiZjAxMDk2MTEtYTE5ZS00YzIzLWI2NjMtMDBkNmQ5ZDc1NDVkIiwiaXNzIjoicGFydG5lcnNoaXAtc2VydmljZSIsIm5hbWUiOiJE4bq_IG3DqG4iLCJwYXJ0bmVyc2hpcF9pZCI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZSIsInN1YiI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZiJ9.Luj0F3qrQU-APei8pMZvrm1h82aOSwdp6YhZX0-zaNY',
    empty: '',
  },
  id: {
    correct: '644f4e9507ed78b6f89a043b',
    incorrect: '644a47b2fbfc963a8a46fc9b',
    empty: '',
  },
  name: {
    valid: randomInput(
      10,
      30,
      "qwertyuiopadsfghjklzxcvbnm1234567890-_*&/''[]{}.,~`()",
      true
    ),
    exist: 'THCS lùa gà - Lớp 1D - Niên khoá update',
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
  sessionIdsList: {
    valid: ['6448ef8206960f20960a5904', '6448ee8a06960f20960a5902'],
    notExist: ['6447adb1fcd171eb92789d7a'],
    empty: [],
  },
  startDate: {
    valid: 1686294992000,
    empty: null,
  },
  endDate: {
    valid: 1717917392000,
    lessThanStartDate: 1682906069,
    empty: null,
  },
  tagsList: {
    valid: ['xyz - update', 'mnb - update'],
    empty: [],
  },
  status: {
    invalid: 0,
    publish: 1,
    unPublish: 2,
    draft: 3,
    incorrect: 10,
    empty: null,
  },
};
