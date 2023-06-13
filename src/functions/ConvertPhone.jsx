import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";

const convertPhoneNumber = (inp) => {
    if (isValidPhoneNumber(inp, "UA")) {
      const phoneNumber = parsePhoneNumber(inp, "UA");
      return phoneNumber.formatInternational();
    }
    return inp;
  };

export default convertPhoneNumber;