import {
  randomEmail,
  randomInput,
} from '../../../../../support/utils/inputInformation';
import { register } from '../services/auth';
import { RegisterRes } from '@api/customer/gen/ts/customer/proto/customer/mobile/auth_pb';

describe('Customer - Register Account - Relate to Email', () => {
  it('Verify Register Account Successfull when email valid', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = randomEmail();
      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.email;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Register Account Successfull when email empty', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = data.email.empty;
      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.email;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Trường EMAIL là bắt buộc');
        }
      );
    });
  });
  it('Verify Register Account Successfull when email null', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = data.email.null;
      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.email;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Trường EMAIL là bắt buộc');
        }
      );
    });
  });
  it('Verify Register Account Failed when email only letters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = data.email.onlyLetter;
      data.password = randomInput(8, 50, digitsLettersSpecial, true);

      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.email;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Register Account Failed when email only digits', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = data.email.onlyDigit;
      data.password = randomInput(8, 50, digitsLettersSpecial, true);

      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.email;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Register Account Failed when email only special Characters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = data.email.onlySpecialCharacter;
      data.password = randomInput(8, 50, digitsLettersSpecial, true);

      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.email;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Register Account Failed when email mising top level domain', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = data.email.missingTopLevelDomain;
      data.password = randomInput(8, 50, digitsLettersSpecial, true);

      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.email;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Create Account Failed when email mising User Name', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = data.email.misingUsername;
      data.password = randomInput(8, 50, digitsLettersSpecial, true);

      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.email;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Create Account Failed when email mising Domain', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = data.email.misingDomain;
      data.password = randomInput(8, 50, digitsLettersSpecial, true);

      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.email;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Create Account Failed when email contain whiteSpace', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = data.email.containWhiteSpace;
      data.password = randomInput(8, 50, digitsLettersSpecial, true);

      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.email;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  it('Verify Create Account Failed when email more @ symbol', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = data.email.containMoreSymbol;
      data.password = randomInput(8, 50, digitsLettersSpecial, true);

      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.email;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Email không hợp lệ');
        }
      );
    });
  });
  // it('Verify Create Account Failed when email start with a hyphen', () => {
  //   cy.fixture('customerAuthService.register.json').then((dataJson) => {
  //     const data = dataJson.info;
  //     const chars = dataJson.chars;

  //     const digits = chars.digits;
  //     const digitsLetters = chars.digits + chars.letters;
  //     const digitsLettersSpecial =
  //       chars.digits + chars.letters + chars.specialCharacters;

  //     data.email = data.email.startWithAHyphen;
  //     data.password = randomInput(8, 50, digitsLettersSpecial, true);

  //     data.partnershipId = data.partnershipId.correct;
  //     data.name = randomInput(1, 999, digitsLetters, true);
  //     data.authenticationType = data.authenticationType.email;

  //     cy.wrap(register(data, {}).catch((err) => err)).then(
  //       (res: RegisterRes.AsObject) => {
  //         expect(res.message).to.equal('Email không hợp lệ');
  //       }
  //     );
  //   });
  // });
  it('Verify Create Account Failed when email is used', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = data.email.isUsed;
      data.password = randomInput(8, 50, digitsLettersSpecial, true);

      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.email;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal(
            'Tài khoản đã tồn tại, vui lòng thử lại'
          );
        }
      );
    });
  });
});

describe('Customer - Register Account - Relate to Password', () => {
  it('Verify Customer Register Successfull when password have digits and letters, have 8 to 50 characters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.email = randomEmail();
      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Register Successfull when password have digits, letters and characters have 8 to 50 characters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = randomEmail();
      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Register Successfull when password have digits, letters have 8 characters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.email = randomEmail();
      data.password = randomInput(8, 8, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Register Successfull when password have digits, letters have 50 characters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.email = randomEmail();
      data.password = randomInput(50, 50, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Register Failed when password have digits, letters less than 8 characters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.email = randomEmail();
      data.password = randomInput(1, 7, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Mật khẩu không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Register Failed when password have digits, letters more 50 characters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.email = randomEmail();
      data.password = randomInput(51, 70, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Mật khẩu không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Register Failed when password only have letters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const letters = chars.letters;
      const digitsLetters = chars.digits + chars.letters;

      data.email = randomEmail();
      data.password = randomInput(8, 50, letters, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Mật khẩu không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Register Failed when password only have digits', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.email = randomEmail();
      data.password = randomInput(8, 50, digits, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Mật khẩu không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Register Failed when password only have special characters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const special = chars.specialCharacters;
      const digitsLetters = chars.digits + chars.letters;

      data.email = randomEmail();
      data.password = randomInput(8, 50, special, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Mật khẩu không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Register Failed when password empty', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.email = randomEmail();
      data.password = chars.empty;
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;
      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Trường mật khẩu là bắt buộc');
        }
      );
    });
  });
  it('Verify Customer Register Failed when password null', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.email = randomEmail();
      data.password = chars.null;
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Trường mật khẩu là bắt buộc');
        }
      );
    });
  });
});

describe('Customer - Register Account - Relate to Phone Number', () => {
  it('Verify Customer Register Successfull when Phone Number have 4 to 13 digits', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Register Successfull when Phone Number have 4 digits', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(4, 4, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Register Successfull when Phone Number have 13 digits', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(13, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Register Failed when Phone Number only have letter', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const letters = chars.letters;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, letters, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Số điện thoại không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Register Failed when Phone Number only have special character', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const special = chars.specialCharacters;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, special, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Số điện thoại không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Register Failed when Phone Number have more 13 digits', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(14, 23, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Số điện thoại không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Register Failed when Phone Number have less 4 digits', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(1, 3, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Số điện thoại không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Register Failed when Phone Number empty', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(0, 0, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Trường số điện thoại là bắt buộc');
        }
      );
    });
  });
  it('Verify Customer Register Failed when Phone Number null', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(0, 0, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Trường số điện thoại là bắt buộc');
        }
      );
    });
  });
  it('Verify Customer Register Failed when Phone Number is used', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = data.phoneNumber.isUsed;
      data.phoneCode = data.phoneCode.isUsed;
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal(
            'Tài khoản đã tồn tại, vui lòng thử lại'
          );
        }
      );
    });
  });
});

describe('Customer - Register Account - Relate to Phone Code', () => {
  it('Verify Customer Register Successfull when Phone Code have 1 to 3 digits', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Register Successfull when Phone Code have 1 digit', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 1, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Register Successfull when Phone Code have 3 digits', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(3, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Customer Register Failed when Phone Code only have letters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const letters = chars.letters;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, letters, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Mã vùng không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Register Failed when Phone Code only have special characters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const special = chars.specialCharacters;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, special, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Mã vùng không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Register Failed when Phone Code have more 3 digits', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(4, 6, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Mã vùng không hợp lệ');
        }
      );
    });
  });
  it('Verify Customer Register Failed when Phone Code empty', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = chars.empty;
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Trường mã vùng là bắt buộc');
        }
      );
    });
  });
  it('Verify Customer Register Failed when Phone Code null', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;

      data.password = randomInput(8, 50, digitsLetters, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = chars.null;
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Trường mã vùng là bắt buộc');
        }
      );
    });
  });
});

describe('Customer - Register Account - Relate to PartnershipId', () => {
  it('Verify Create Account Successfull when partnershipID correct', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = randomEmail();
      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Create Account Successfull when partnershipID incorrect', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = randomEmail();
      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.incorrect;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('PARTNERSHIP_NOT_FOUND');
        }
      );
    });
  });
  it('Verify Create Account Successfull when partnershipID empty', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = randomEmail();
      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.empty;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Trường PARTNERSHIP_ID là bắt buộc');
        }
      );
    });
  });
  it('Verify Create Account Successfull when partnershipID null', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = randomEmail();
      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.null;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Trường PARTNERSHIP_ID là bắt buộc');
        }
      );
    });
  });
});

describe('Customer - Register Account - Relate to Name', () => {
  it('Verify Register Account Successfull when Name only have digits', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digits, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Register Account Successfull when Name only have letters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const letters = chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, letters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Register Account Successfull when Name have digits, letters and length 1 to 999 characters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Register Account Successfull when Name have digits, letters and have 1 characters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = 'a';
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Register Account Successfull when Name have digits, letters and have 999 characters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(999, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Register Account Failed when Name have digits, letters and have more 999 characters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1000, 1100, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal(
            'Tên tối thiểu 1 ký tự và giới hạn 999 ký tự.'
          );
        }
      );
    });
  });
  it('Verify Register Account Failed when Name have digits, letters and special characters', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1000, 1100, digitsLettersSpecial, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal(
            'Tên không được sử dụng các ký tự đặc biệt'
          );
        }
      );
    });
  });
  it('Verify Register Account Failed when Name empty', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = chars.empty;
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Trường thông tin không hợp lệ');
        }
      );
    });
  });
  it('Verify Register Account Failed when Name null', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = chars.null;
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal('Trường thông tin không hợp lệ');
        }
      );
    });
  });
});

describe('Customer - Register Account - Relate to Authentication Type', () => {
  it('Verify Register Account Successfull when Authentication Type is Phone', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.phone;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Register Account Successfull when Authentication Type is Email', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = randomEmail();
      data.password = randomInput(8, 50, digitsLettersSpecial, true);

      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.email;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Register Account Failed when Authentication Type is invalid', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = randomEmail();
      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.invalid;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Register Account Failed when Authentication Type is empty', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = randomEmail();
      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.empty;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          cy.wrap(res.accessToken).as('accessToken');
          cy.wrap(res.refreshToken).as('refreshToken');
          cy.wrap(res.expireTime).as('expiredTime');
          expect(res.accessToken).not.to.be.empty;
        }
      );
    });
  });
  it('Verify Register Account Failed when Authentication Type is null', () => {
    cy.fixture('customerAuthService.register.json').then((dataJson) => {
      const data = dataJson.info;
      const chars = dataJson.chars;

      const digits = chars.digits;
      const digitsLetters = chars.digits + chars.letters;
      const digitsLettersSpecial =
        chars.digits + chars.letters + chars.specialCharacters;

      data.email = randomEmail();
      data.password = randomInput(8, 50, digitsLettersSpecial, true);
      data.phoneNumber = randomInput(4, 13, digits, true);
      data.phoneCode = randomInput(1, 3, digits, true);
      data.partnershipId = data.partnershipId.correct;
      data.name = randomInput(1, 999, digitsLetters, true);
      data.authenticationType = data.authenticationType.null;

      cy.wrap(register(data, {}).catch((err) => err)).then(
        (res: RegisterRes.AsObject) => {
          expect(res.message).to.equal(
            'Trường phương thức đăng ký là bắt buộc'
          );
        }
      );
    });
  });
});
