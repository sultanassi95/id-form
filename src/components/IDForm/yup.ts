import { string, object } from "yup";
import { swAreaCodes } from "utils";

// I prefer JS checking rather than RegEx testing.

const ssnError = "The social security number needs to be a valid Swedish SSN!";
const phoneNumError =
  "The phone number needs to be a valid Swedish phone number!";
const emailAddressError = "The email address needs to be valid!";
const countryError = "The country should be selected!";

/*
 * [dateIsValid]
 * @dob yymmdd [string]
 * @return isValidDOB [boolean]
 * Should accept a DOB (DATEOFBIRTH) with date formate yymmdd as a string
 * Checks if param given is a realistic Date Of Birth.
 */
const dateIsValid = (dob: string | any) => {
  let year: number = dob.substring(0, 2) - 0;
  let month: number = dob.substring(2, 4) - 1;
  let day: number = dob.substring(4, 6) - 0;

  year < 70 ? (year += 2000) : (year += 1900);

  const dateOfMatch = new Date(year, month, day);

  const isValidYear = dateOfMatch.getFullYear() === year;
  const isValidMonth = month === dateOfMatch.getMonth();
  const isValidDay = day === dateOfMatch.getDate();

  if (isValidYear && isValidMonth && isValidDay) {
    return true;
  } else {
    return false;
  }
};

/*
 * [areaCodeIsValid description]
 * @phoneNum swPhoneNumber [string]
 * @return valid [boolean] --> Refers to a phoneNum starting with a valid swAreaCode
 */
const areaCodeIsValid = (phoneNum: string) => {
  let valid = false;

  for (let code in swAreaCodes) {
    const stringifiedCode = swAreaCodes[code].toString();
    if (phoneNum.startsWith(stringifiedCode)) {
      valid = true;
      break;
    }
  }

  return valid;
};

// SSN ==> (YYMMDD)(-)(\d{,4})
const validateSSN = (ssn: string = "") => {
  if (!ssn || ssn.length !== 11) return false;

  const dob = ssn.substring(0, 6);

  if (!dateIsValid(dob)) return false;
  // The hyphen should be the 7th character.
  if (ssn.indexOf("-") !== 6) return false;

  /**
   * SW SSN can contain +- instead of only - when AGE is older than a 100 years.
   * Having that in the 20s centruy makes it impossible to correctly investigate the age:
   * For example: 201212 can refer to a person who was born at 1920 and also 2020.
   */

  return true;
};

const validatePhoneNum = (phoneNum: string = "") => {
  if (!phoneNum) return false;

  const len = phoneNum.length;

  if (len < 8 || len > 10) return false;

  // Most expensive calculation come last when possible.
  if (!areaCodeIsValid(phoneNum)) return false;

  return true;
};

export const validationSchema = object().shape({
  ssn: string().test("ssn-test", ssnError, validateSSN),
  phoneNumber: string().test("phoneNum-test", phoneNumError, validatePhoneNum),
  emailAddress: string()
    .email()
    .required(emailAddressError),
  country: string().required(countryError)
});
