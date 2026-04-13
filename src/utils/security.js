/**
 * Simple obfuscation utility to prevent basic bot scraping of sensitive data.
 * Data is stored as Base64 and decoded at runtime.
 */

const CONTACT_DATA = {
  // Encoded: abdulazizattiaabdulaziz@gmail.com
  email: 'YWJkdWxheml6YXR0aWFhYmR1bGF6aXpAZ21haWwuY29t',
  // Encoded: 201094038468
  phone: 'MjAxMDk0MDM4NDY4'
};

export const getContactInfo = () => {
  return {
    email: atob(CONTACT_DATA.email),
    phone: atob(CONTACT_DATA.phone)
  };
};
