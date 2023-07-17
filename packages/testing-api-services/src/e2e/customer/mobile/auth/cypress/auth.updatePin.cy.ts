import { updatePin } from '../services/auth';
import { dataJson } from '../data/updatePin';

const token = dataJson.token.correct;
const data = {
  password: dataJson.password.correct,
  pin: dataJson.pin.valid,
};

describe('Customer - Update Pin - Happy Scenarios', () => {
  it('Verify Update Pin Successfull', () => {
    cy.wrap(updatePin(data, { token }).catch((err) => err)).then((res) => {
      expect(res).to.be.empty;
    });
  });
});

describe('Customer - Update Pin - Unhappy Scenarios', () => {
  describe('Customer - Update Pin - Relate to Password', () => {
    it('Verify Update Pin Failed when Password incorrect', () => {
      data.password = dataJson.password.incorrect;
      cy.wrap(updatePin(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Mật khẩu không chính xác');
      });
    });
    it('Verify Update Pin Failed when Password empty', () => {
      data.password = dataJson.password.empty;
      cy.wrap(updatePin(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Trường mật khẩu là bắt buộc');
      });
    });
  });
  describe('Customer - Update Pin - Relate to Pin', () => {
    it('Verify update Pin failed when Pin isUsed', () => {
      data.password = dataJson.password.correct;
      data.pin = dataJson.pin.isUsed;

      cy.wrap(updatePin(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Bạn không được cập nhật mã Pin cũ');
      });
    });

    //Chưa run
    it('Verify update Pin failed when Pin have letter', () => {
      data.pin = dataJson.pin.haveLetter;
      cy.wrap(updatePin(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Mã pin không hợp lệ');
      });
    });
    it('Verify update Pin failed when Pin have special character', () => {
      data.pin = dataJson.pin.haveSpecial;
      cy.wrap(updatePin(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Mã pin không hợp lệ');
      });
    });
    it('Verify update Pin failed when Pin have less than 6 digits', () => {
      data.pin = dataJson.pin.less6digits;
      cy.wrap(updatePin(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Mã pin không hợp lệ');
      });
    });
    it('Verify update Pin failed when Pin have more than 6 digits', () => {
      data.pin = dataJson.pin.more6digits;
      cy.wrap(updatePin(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Mã pin không hợp lệ');
      });
    });
    it('Verify update Pin failed when Pin empty', () => {
      data.pin = dataJson.pin.empty;
      cy.wrap(updatePin(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('Trường PIN là bắt buộc');
      });
    });
  });
  describe.only('Customer - Update Pin - Relate to Token', () => {
    it('Verify Update Pin Failed when token incorrect', () => {
      const token = dataJson.token.incorrect;
      cy.wrap(updatePin(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('signature is invalid');
      });
    });
    it('Verify Update Pin Failed when token expired', () => {
      const token = dataJson.token.expired;
      cy.wrap(updatePin(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('signature is invalid');
      });
    });
    it('Verify Update Pin Failed when token empty', () => {
      const token = dataJson.token.empty;
      cy.wrap(updatePin(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal(
          'token contains an invalid number of segments'
        );
      });
    });
  });
});
