export const dataUpdateZone = {
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
    correct: '6448a84bd4bdb570461aa0a8',
    incorrect: '6448a84bd5bdb570461aa0a8',
    empty: '',
  },
  name: {
    valid: 'ABC123 - Update',
    invalid: '',
    empty: '',
  },
  slug: {
    valid: 'Slug - ABC123 - Update',
    invalid: '',
    empty: '',
  },
  description: {
    valid: 'Đây là description - Update',
    invalid: '',
    empty: '',
  },
  goalIdsList: {
    correct: ['644a47c7fbfc463a8a46fc9d'],
    incorrect: ['644a47b2fbdc463a8a46fc9b', '644a47d3fbfc463a8a46fc9e'],
    empty: [],
  },
  coverName: {
    valid: 'abc-update.png',
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
    valid: ['abc-update', 'xyz-update'],
    invalid: ['', ''],
    empty: [],
  },
  address: {
    valid: '756a Âu cơ - update',
    invalid: '',
    empty: '',
  },
};
