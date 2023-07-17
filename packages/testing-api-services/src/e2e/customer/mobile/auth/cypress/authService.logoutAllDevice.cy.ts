import { logoutAllDevice } from '../services/auth';

//interage with api get me
describe('Customer - Logout - Relate Token', () => {
  //interage with api login
  it('Verify Customer Logout Successfull when token correct', () => {
    cy.fixture('customerAuthService.logoutAllDevice.json').then((dataJson) => {
      const token = dataJson.token.customer;
      cy.wrap(logoutAllDevice({}, { token }).catch((err) => err)).then(
        (res) => {
          expect(res).to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Logout Failed when token of account is logout', () => {
    cy.fixture('customerAuthService.logoutAllDevice.json').then((dataJson) => {
      const token = dataJson.token.isLogout;
      cy.wrap(logoutAllDevice({}, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal(
            'không thể đăng xuất tất cả các thiết bị của bạn'
          );
        }
      );
    });
  });
  it('Verify Customer Logout Successfull when token incorrect', () => {
    cy.fixture('customerAuthService.logoutAllDevice.json').then((dataJson) => {
      const token = dataJson.token.incorrect;
      cy.wrap(logoutAllDevice({}, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal('signature is invalid');
        }
      );
    });
  });
  it('Verify Customer Logout Successfull when token empty', () => {
    cy.fixture('customerAuthService.logoutAllDevice.json').then((dataJson) => {
      const token = dataJson.token.empty;
      cy.wrap(logoutAllDevice({}, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal(
            'token contains an invalid number of segments'
          );
        }
      );
    });
  });
  it('Verify Customer Logout Successfull when token null', () => {
    cy.fixture('customerAuthService.logoutAllDevice.json').then((dataJson) => {
      const token = dataJson.token.empty;
      cy.wrap(logoutAllDevice({}, { token }).catch((err) => err)).then(
        (res) => {
          expect(res.message).to.equal(
            'token contains an invalid number of segments'
          );
        }
      );
    });
  });
});

//interage after api get me
