import { randomInput } from '../../../../../support/utils/inputInformation';
import { LoginRes } from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_pb';
import { login } from '../services/auth';

//interage voi feature register
describe('Customer - Login - Relate to Authentication Type', () => {
  it('Verify Customer Login Account Successfull when Authentication Type is Phone and email empty', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Account Successfull when Authentication Type is Phone and email null', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = data.email.null;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Account Successfull when Authentication Type is Email and phone number empty', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.correct;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.empty;
      data.phoneCode = data.phoneCode.empty;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          console.log(data);

          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Account Successfull when Authentication Type is Email and phone number null', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.correct;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.null;
      data.phoneCode = data.phoneCode.null;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when Authentication Type is Phone but phone number empty', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = '';
      data.password = data.password.correct;
      data.phoneNumber = '';
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường số điện thoại là bắt buộc');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when Authentication Type is Phone but phone number null', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = '';
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.null;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường số điện thoại là bắt buộc');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when Authentication Type is Email but email empty', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = '';
      data.phoneCode = '';
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường EMAIL là bắt buộc');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when Authentication Type is Email but email null', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.null;
      data.password = data.password.correct;
      data.phoneNumber = '';
      data.phoneCode = '';
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường EMAIL là bắt buộc');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when Authentication Type is invalid', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.invalid;
      data.email = data.email.correct;
      data.password = data.password.correct;
      data.phoneNumber = '';
      data.phoneCode = '';
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Không tìm thấy tài khoản của bạn');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when Authentication Type is empty', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.empty;
      data.email = data.email.correct;
      data.password = data.password.correct;
      data.phoneNumber = '';
      data.phoneCode = '';
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường LOGIN_TYPE là bắt buộc');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when Authentication Type is null', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.empty;
      data.email = data.email.correct;
      data.password = data.password.correct;
      data.phoneNumber = '';
      data.phoneCode = '';
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường LOGIN_TYPE là bắt buộc');
        }
      );
    });
  });
});

describe('Customer - Login - Relate to Email', () => {
  it('Verify Customer Login Account Successfull when email correct', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.correct;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.invalid;
      data.phoneCode = data.phoneCode.invalid;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when email incorrect', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.incorrect;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.invalid;
      data.phoneCode = data.phoneCode.invalid;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Không tìm thấy tài khoản của bạn');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when email of Other Partnership', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.emailOtherPartnership;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.invalid;
      data.phoneCode = data.phoneCode.invalid;
      data.partnershipId = data.partnershipId.incorrect;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Không tìm thấy tài khoản của bạn');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when email only letters', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.onlyLetter;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.invalid;
      data.phoneCode = data.phoneCode.invalid;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when email only digits', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.onlyDigit;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.invalid;
      data.phoneCode = data.phoneCode.invalid;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when email only special Characters', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.onlySpecialCharacter;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.invalid;
      data.phoneCode = data.phoneCode.invalid;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when email missing top level domain', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.missingTopLevelDomain;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.invalid;
      data.phoneCode = data.phoneCode.invalid;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when email missing user name', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.misingUsername;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.invalid;
      data.phoneCode = data.phoneCode.invalid;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when email missing domain', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.misingDomain;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.invalid;
      data.phoneCode = data.phoneCode.invalid;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when email contain white space', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.containWhiteSpace;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.invalid;
      data.phoneCode = data.phoneCode.invalid;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Login Account Failed when email contain more symbol', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.containMoreSymbol;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.invalid;
      data.phoneCode = data.phoneCode.invalid;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Login Account Failed when email start with a hyphen', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.startWithAHyphen;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.invalid;
      data.phoneCode = data.phoneCode.invalid;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Login Account Successfull when authentication type is phone and email empty', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Login Account Successfull when authentication type is phone and email null', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = data.email.null;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Login Account Failed when Authentication Type is Email but email empty', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = '';
      data.phoneCode = '';
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường EMAIL là bắt buộc');
        }
      );
    });
  });
  it('Verify Login Account Failed when Authentication Type is Email but email null', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.null;
      data.password = data.password.correct;
      data.phoneNumber = '';
      data.phoneCode = '';
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường EMAIL là bắt buộc');
        }
      );
    });
  });
});

describe('Customer - Login - Relate to Phone Number', () => {
  it('Verify Customer Login Successfull when Phone Number have 4 to 13 digits', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Successfull when Phone Number have 4 digits', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.fourDigits;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Successfull when Phone Number have 13 digits', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.thirdTeenDigits;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Failed when Phone Number have less than 4 digits', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;
      const digits = dataJson.chars.digits;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = randomInput(1, 3, digits, true);
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Số điện thoại không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Failed when Phone Number have more 13 digits', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;
      const digits = dataJson.chars.digits;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = randomInput(14, 23, digits, true);
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Số điện thoại không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Failed when Phone Number have letter', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;
      const letters = dataJson.chars.letters;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = randomInput(4, 13, letters, true);
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Số điện thoại không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Failed when Phone Number have special characters', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;
      const special = dataJson.chars.specialCharacters;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = randomInput(4, 13, special, true);
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Số điện thoại không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when Authentication Type is Phone but phone number empty', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = '';
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.empty;
      data.phoneCode = data.phoneCode.empty;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường số điện thoại là bắt buộc');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when Authentication Type is Phone but phone number null', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = '';
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.null;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường số điện thoại là bắt buộc');
        }
      );
    });
  });
  it('Verify Customer Login Account Successfull when Authentication Type is email but phone number null', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.correct;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.null;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Account Successfull when Authentication Type is email but phone number empty', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.correct;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.empty;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
});

describe('Customer - Login - Relate to Phone Code', () => {
  it('Verify Customer Login Successfull when Phone Code have 1 to 3 digits', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Successfull when Phone Code have 1 digits', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.oneDigits;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Successfull when Phone Code have 3 digits', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.threeDigits;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Failed when Phone Code have more 3 digits', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;
      const digits = dataJson.chars.digits;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = randomInput(4, 6, digits, true);
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Không tìm thấy tài khoản của bạn');
        }
      );
    });
  });
  it('Verify Customer Login Failed when Phone Code have letters', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;
      const letters = dataJson.chars.letters;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = randomInput(1, 3, letters, true);
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Mã vùng không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Failed when Phone Code have special characters', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;
      const special = dataJson.chars.specialCharacters;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = randomInput(1, 3, special, true);
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Mã vùng không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when Authentication Type is Phone but phone code empty', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = '';
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.empty;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường mã vùng là bắt buộc');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when Authentication Type is Phone but phone code null', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = '';
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.null;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường mã vùng là bắt buộc');
        }
      );
    });
  });
  it('Verify Customer Login Account Successfull when Authentication Type is email but phone code null', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.correct;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.null;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Account Successfull when Authentication Type is email but phone code empty', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.correct;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.empty;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
});

describe('Customer - Login - Relate to Password', () => {
  it('Verify Customer Login Account Successfull when password have digits and letters, have 8 to 50 characters', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Account Successfull when password have digits, letters and special characters have 8 to 50 characters', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.pwHaveSpecial;
      data.password = data.password.haveSpecial;
      data.phoneNumber = data.phoneNumber.empty;
      data.phoneCode = data.phoneCode.empty;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Account Successfull when password have digits, letters have 8 characters', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.pwhave8Characters;
      data.password = data.password.have8Characters;
      data.phoneNumber = data.phoneNumber.empty;
      data.phoneCode = data.phoneCode.empty;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Account Successfull when password have digits, letters have 50 characters', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.email;
      data.email = data.email.pwhave50Characters;
      data.password = data.password.have50Characters;
      data.phoneNumber = data.phoneNumber.empty;
      data.phoneCode = data.phoneCode.empty;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when password have digits, letters less than 8 characters', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;
      const digitsLetters = dataJson.chars.digits + dataJson.chars.letters;

      data.type = data.type.email;
      data.email = data.email.correct;
      data.password = randomInput(1, 7, digitsLetters, true);
      data.phoneNumber = data.phoneNumber.empty;
      data.phoneCode = data.phoneCode.empty;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Mật khẩu không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when password have digits, letters more 50 characters', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;
      const digitsLetters = dataJson.chars.digits + dataJson.chars.letters;

      data.type = data.type.email;
      data.email = data.email.correct;
      data.password = randomInput(51, 71, digitsLetters, true);
      data.phoneNumber = data.phoneNumber.empty;
      data.phoneCode = data.phoneCode.empty;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Mật khẩu không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when password only have letters', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;
      const letters = dataJson.chars.letters;

      data.type = data.type.email;
      data.email = data.email.correct;
      data.password = randomInput(8, 50, letters, true);
      data.phoneNumber = data.phoneNumber.empty;
      data.phoneCode = data.phoneCode.empty;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Mật khẩu không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when password only have digits', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;
      const digits = dataJson.chars.digits;

      data.type = data.type.email;
      data.email = data.email.correct;
      data.password = randomInput(8, 50, digits, true);
      data.phoneNumber = data.phoneNumber.empty;
      data.phoneCode = data.phoneCode.empty;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Mật khẩu không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when password only have special characters', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;
      const special = dataJson.chars.specialCharacters;

      data.type = data.type.email;
      data.email = data.email.correct;
      data.password = randomInput(8, 50, special, true);
      data.phoneNumber = data.phoneNumber.empty;
      data.phoneCode = data.phoneCode.empty;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Mật khẩu không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when password empty', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;
      const special = dataJson.chars.specialCharacters;

      data.type = data.type.email;
      data.email = data.email.correct;
      data.password = data.password.empty;
      data.phoneNumber = data.phoneNumber.empty;
      data.phoneCode = data.phoneCode.empty;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường mật khẩu là bắt buộc');
        }
      );
    });
  });
  it('Verify Customer Login Account Failed when password null', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;
      const special = dataJson.chars.specialCharacters;

      data.type = data.type.email;
      data.email = data.email.correct;
      data.password = data.password.null;
      data.phoneNumber = data.phoneNumber.empty;
      data.phoneCode = data.phoneCode.empty;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường mật khẩu là bắt buộc');
        }
      );
    });
  });
});

describe('Customer - Login - Relate to PartnershipID', () => {
  it('Verify Customer Login Account Successfull when PartnershipID correct', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.correct;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Login Account Successfull when PartnershipID incorrect', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.incorrect;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Không tìm thấy tài khoản của bạn');
        }
      );
    });
  });
  it('Verify Customer Login Account Successfull when PartnershipID empty', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.empty;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường PARTNERSHIP_ID là bắt buộc');
        }
      );
    });
  });
  it('Verify Customer Login Account Successfull when PartnershipID null', () => {
    cy.fixture('customerAuthService.login.json').then((dataJson) => {
      const data = dataJson.info;

      data.type = data.type.phone;
      data.email = data.email.empty;
      data.password = data.password.correct;
      data.phoneNumber = data.phoneNumber.correct;
      data.phoneCode = data.phoneCode.correct;
      data.partnershipId = data.partnershipId.empty;

      cy.wrap(login(data, {}).catch((err) => err)).then(
        (res: LoginRes.AsObject) => {
          expect(res.message).to.equal('Trường PARTNERSHIP_ID là bắt buộc');
        }
      );
    });
  });
});
