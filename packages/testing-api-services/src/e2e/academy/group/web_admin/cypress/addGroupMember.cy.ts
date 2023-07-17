import { LoginByEmailRes } from '@api/partnership/gen/ts/partnership/proto/partnership/web/auth_pb';
import { loginByEmail } from '../../../../partnership/web/auth/services/auth';
import { addGroupMember } from '../services/group';
import { dataAddGroupMember } from '../data/addGroupMember';
import { AddGroupMemberRes } from '@api/academy/gen/ts/proto/group/web_admin/group_pb';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X3R5cGUiOjIsImVtYWlsIjoiYWRtaW5AZGVtZW4udm4iLCJleHAiOjE2OTMyODM1NjQsImlkIjoiODgwY2E4ZDgtOTc2My00NDU2LWI1YjEtMTU2MTdmZTUzMDY1IiwiaXNzIjoicGFydG5lcnNoaXAtc2VydmljZSIsIm5hbWUiOiJE4bq_IG3DqG4iLCJwYXJ0bmVyc2hpcF9pZCI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZSIsInN1YiI6IjY0MmY5YWU1NjI4MzlmNTFhMmMwNDk3ZiJ9.jfHYbFK3SdVKvfU8jBMXz77DzscFJnj_QEjMLCKAoc8';

describe('Group - Case Add Member to Group Successfull', () => {
  //   before(() => {
  //     cy.fixture('loginGetToken.json').then((dataJson) => {
  //       cy.wrap(
  //         loginByEmail(dataJson.partnership.loginByEmail)
  //           .then((res) => {
  //             return res;
  //           })
  //           .catch((err) => {
  //             return err;
  //           })
  //       ).then((res: LoginByEmailRes.AsObject) => {
  //         cy.wrap(res.accessToken).as('token');
  //       });
  //     });
  //   });

  it('Verify Add Member to Group Successfull when add admin into group admin', () => {
    cy.wrap(
      addGroupMember(
        dataAddGroupMember.successfull.addByUserID.groupAdminAddUserIsAdmin,
        { token }
      )
    ).then((res) => {
      console.log(res);
    });
    // cy.get('@token').then((accessToken) => {
    // });
  });
  //   it('Verify Add Member to Group Successfull when add by via email', () => {});
});
