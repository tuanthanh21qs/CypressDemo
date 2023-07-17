import { checkPin } from '../services/auth';
import { dataJson } from '../data/checkPin';
import { CheckPinRes } from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_pb';

let token = dataJson.token.correct;
let data = {
  pin: dataJson.pin.correct,
};

// Chưa run

describe('Customer - Check Pin - Happy Scenarios', () => {
  // Interage create pin and update pin
  it('Verify Check Pin Successfull when pin correct', () => {
    cy.wrap(checkPin(data, { token }).catch((err) => err)).then(
      (res: CheckPinRes.AsObject) => {
        expect(res.result).to.be.true;
      }
    );
  });
});

describe('Customer - Check Pin - Unhappy Scenarios', () => {
  describe('Customer - Check Pin - Relate to Pin', () => {
    it('Verify Check Pin Failed when pin incorrect', () => {
      data.pin = dataJson.pin.incorrect;
      cy.wrap(checkPin(data, { token }).catch((err) => err)).then(
        (res: CheckPinRes.AsObject) => {
          expect(res.result).to.be.false;
        }
      );
    });
    it('Verify Check Pin Failed when pin have letter', () => {
      data.pin = dataJson.pin.haveLetter;
      cy.wrap(checkPin(data, { token }).catch((err) => err)).then(
        (res: CheckPinRes.AsObject) => {
          expect(res.message).to.equal('Mã pin không hợp lệ');
        }
      );
    });
    it('Verify Check Pin Failed when pin have special character', () => {
      data.pin = dataJson.pin.haveSpecial;
      cy.wrap(checkPin(data, { token }).catch((err) => err)).then(
        (res: CheckPinRes.AsObject) => {
          expect(res.message).to.equal('Mã pin không hợp lệ');
        }
      );
    });
    it('Verify Check Pin Failed when pin have special less than 6 character', () => {
      data.pin = dataJson.pin.less6digits;
      cy.wrap(checkPin(data, { token }).catch((err) => err)).then(
        (res: CheckPinRes.AsObject) => {
          expect(res.message).to.equal('Mã pin không hợp lệ');
        }
      );
    });
    it('Verify Check Pin Failed when pin have special more than 6 character', () => {
      data.pin = dataJson.pin.more6digits;
      cy.wrap(checkPin(data, { token }).catch((err) => err)).then(
        (res: CheckPinRes.AsObject) => {
          expect(res.message).to.equal('Mã pin không hợp lệ');
        }
      );
    });
    it('Verify Check Pin Failed when pin empty', () => {
      data.pin = dataJson.pin.empty;
      cy.wrap(checkPin(data, { token }).catch((err) => err)).then(
        (res: CheckPinRes.AsObject) => {
          expect(res.message).to.equal('Trường PIN là bắt buộc');
        }
      );
    });
  });

  describe('Customer - Check Pin - Relate to Token', () => {
    it('Verify Check Pin Failed when token incorrect', () => {
      token = dataJson.token.incorrect;
      cy.wrap(checkPin(data, { token }).catch((err) => err)).then(
        (res: CheckPinRes.AsObject) => {
          expect(res.message).to.equal('signature is invalid');
        }
      );
    });
    it('Verify Check Pin Failed when token expired', () => {
      token = dataJson.token.expired;
      cy.wrap(checkPin(data, { token }).catch((err) => err)).then(
        (res: CheckPinRes.AsObject) => {
          expect(res.message).to.equal('signature is invalid');
        }
      );
    });
    it('Verify Check Pin Failed when token empty', () => {
      token = dataJson.token.empty;
      cy.wrap(checkPin(data, { token }).catch((err) => err)).then(
        (res: CheckPinRes.AsObject) => {
          expect(res.message).to.equal(
            'token contains an invalid number of segments'
          );
        }
      );
    });
  });
});
