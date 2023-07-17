export const randomInput = (minLen, maxLen, chars, randomLength) => {
  // const minLen = 1; // Minimum string length
  // const maxLen = 3; // Maximum string length
  // const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Characters to choose from
  let strLen;
  if (randomLength) {
    strLen = Math.floor(Math.random() * (maxLen - minLen + 1)) + minLen; // Randomly choose the string length
  } else {
    strLen = maxLen;
  }
  let randomStr = '';
  for (let i = 0; i < strLen; i++) {
    const randomCharIndex = Math.floor(Math.random() * chars.length); // Choose a random index from the available characters
    randomStr += chars[randomCharIndex]; // Append the randomly chosen character to the string
  }
  return randomStr;
};

export const randomEmail = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const emailLength = Math.floor(Math.random() * 10) + 5; // random length between 5 and 14
  let email = '';
  for (let i = 0; i < emailLength; i++) {
    email += letters[Math.floor(Math.random() * letters.length)];
  }
  email += '@';
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'aol.com', 'outlook.com'];
  const randomDomainIndex = Math.floor(Math.random() * domains.length);
  email += domains[randomDomainIndex];
  return email;
};

export const createDataCreatePartnershipUser = (data, keyChange, dataChange) => {
  //hàm auto create data
  return data;
};
