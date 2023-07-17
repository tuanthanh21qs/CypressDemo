import { createPin } from '../services/auth';
import { dataJson } from '../data/createPin';

describe('Customer - Create Pin - Happy Scenarios', () => {
  const token = dataJson.token.correct;
  let data = {
    pin: dataJson.pin.valid,
  };
  it('Verify Create Pin Successfull', () => {
    cy.wrap(createPin(data, { token }).catch((err) => err)).then((res) => {
      expect(res).to.be.empty;
    });
  });
});

describe('Customer - Create Pin - Unhappy Scenarios', () => {
  describe('Customer - Create Pin - Relate to Pin', () => {
    const token = dataJson.token.correct;
    let data = {
      pin: '',
    };
    it('Verify Create Pin Failed when pin have letter', () => {
      data.pin = dataJson.pin.haveLetter;
      cy.wrap(createPin(data, { token }).catch((err) => err)).then((res) => {
        console.log(
          '🚀 ~ file: auth.createPin.cy.ts:25 ~ it.only ~ data:',
          data
        );
        console.log('🚀 ~ file: auth.createPin.cy.ts:27 ~ it.only ~ res:', res);

        expect(res.message).to.equal('Mã pin không hợp lệ');
      });
    });
    it('Verify Create Pin Failed when pin have special character', () => {
      data.pin = dataJson.pin.haveSpecial;
      cy.wrap(createPin(data, { token }).catch((err) => err)).then((res) => {
        console.log(
          '🚀 ~ file: auth.createPin.cy.ts:25 ~ it.only ~ data:',
          data
        );
        console.log('🚀 ~ file: auth.createPin.cy.ts:27 ~ it.only ~ res:', res);

        expect(res.message).to.equal('Mã pin không hợp lệ');
      });
    });
    it('Verify Create Pin Failed when pin have less than 6 digits', () => {
      data.pin = dataJson.pin.less6digits;
      cy.wrap(createPin(data, { token }).catch((err) => err)).then((res) => {
        console.log(
          '🚀 ~ file: auth.createPin.cy.ts:25 ~ it.only ~ data:',
          data
        );
        console.log('🚀 ~ file: auth.createPin.cy.ts:27 ~ it.only ~ res:', res);

        expect(res.message).to.equal('Mã pin không hợp lệ');
      });
    });
    it('Verify Create Pin Failed when pin have more than 6 digits', () => {
      data.pin = dataJson.pin.more6digits;
      cy.wrap(createPin(data, { token }).catch((err) => err)).then((res) => {
        console.log(
          '🚀 ~ file: auth.createPin.cy.ts:25 ~ it.only ~ data:',
          data
        );
        console.log('🚀 ~ file: auth.createPin.cy.ts:27 ~ it.only ~ res:', res);

        expect(res.message).to.equal('Mã pin không hợp lệ');
      });
    });
    it('Verify Create Pin Failed when pin have more than 6 digits', () => {
      data.pin = dataJson.pin.empty;
      cy.wrap(createPin(data, { token }).catch((err) => err)).then((res) => {
        console.log(
          '🚀 ~ file: auth.createPin.cy.ts:25 ~ it.only ~ data:',
          data
        );
        console.log('🚀 ~ file: auth.createPin.cy.ts:27 ~ it.only ~ res:', res);

        expect(res.message).to.equal('Trường PIN là bắt buộc');
      });
    });
  });

  describe('Customer - Create Pin - Relate to Token', () => {
    const data = {
      pin: dataJson.pin.valid,
    };
    it('Verify Create Pin failed when token incorrect', () => {
      const token = dataJson.token.incorrect;
      cy.wrap(createPin(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('signature is invalid');
      });
    });
    it('Verify Create Pin failed when token expired', () => {
      const token = dataJson.token.expired;
      cy.wrap(createPin(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal('signature is invalid');
      });
    });
    it('Verify Create Pin failed when token empty', () => {
      const token = dataJson.token.empty;
      cy.wrap(createPin(data, { token }).catch((err) => err)).then((res) => {
        expect(res.message).to.equal(
          'token contains an invalid number of segments'
        );
      });
    });
  });
});
