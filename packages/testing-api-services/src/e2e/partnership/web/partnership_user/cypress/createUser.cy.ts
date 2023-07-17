import {
  CreateUserReq,
  CreateUserRes,
} from '@api/partnership/gen/ts/partnership/proto/partnership/web/partnership_user_pb';
import { createUser } from '../services/partnership_user';
import { dataCreateUser } from '../data/createUser';
import {
  randomEmail,
  randomInput,
} from '../../../../../support/utils/inputInformation';

let token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X3R5cGUiOjIsImVtYWlsIjoiYWRtaW5AZGVtZW4udm4iLCJleHAiOjE2ODMyNjM1NTEsImlkIjoiMzU4NzI2NzItODkzOS00YTAwLTkyOTgtZWYzZTUxODg3ZTg2IiwiaXNzIjoicGFydG5lcnNoaXAtc2VydmljZSIsIm5hbWUiOiJE4bq_IG3DqG4iLCJwYXJ0bmVyc2hpcF9pZCI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZSIsInN1YiI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZiJ9.KMxtphett2neccwBC-Ga0p1tXO65On2FW2sISLkP72c';
let data: CreateUserReq.AsObject = {
  email: '',
  password: '',
  name: '',
  profilePicture: '',
  description: '',
  phoneCode: '',
  phoneNumber: '',
};
describe('', () => {
  it('Create User Successfull', () => {
    data.email = randomEmail();
    data.password = 'a12345678';
    data.name = randomInput(
      10,
      30,
      'qwertyuiopasdfghjklzxcvbnm1234567890',
      true
    );
    data.profilePicture = randomInput(
      10,
      30,
      'qwertyuiopasdfghjklzxcvbnm1234567890',
      true
    );
    data.description = randomInput(
      10,
      30,
      'qwertyuiopasdfghjklzxcvbnm1234567890',
      true
    );
    data.phoneCode = randomInput(1, 3, '1234567890', true);
    data.phoneNumber = randomInput(4, 14, '1234567890', true);

    cy.wrap(createUser(data, { token }).catch((err) => err)).then(
      (res: CreateUserRes.AsObject) => {
        console.log('🚀 ~ file: createUser.cy.ts:50 ~ it ~ res:', token);
        console.log('🚀 ~ file: createUser.cy.ts:50 ~ it ~ res:', data);
        console.log('🚀 ~ file: createUser.cy.ts:50 ~ it ~ res:', res);
        cy.wrap(res.userId).as('ID');
        // expect(res.userId).not.to.be.empty;
      }
    );
  });
});
