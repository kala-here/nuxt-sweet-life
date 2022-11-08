import reservePage from '@/pages/reserve.vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import { getElementByAriaLabel } from '../utils/helpers';

import '@testing-library/jest-dom';

const vuetify = new Vuetify();
const wrapper = mount(reservePage, {
  vuetify,
});

describe('Reserve page tests', () => {
  test('contains form fields and title', () => {
    const {
      firstNameField,
      lastNameField,
      phoneField,
      emailField,
      addressField,
      dateOfArrival,
      rentingDaysField,
      tentCountField,
      commentsField,
    } = setup();

    expect(getLabel(firstNameField)).toHaveTextContent('First Name');
    expect(getLabel(lastNameField)).toHaveTextContent('Last Name');
    expect(getLabel(phoneField)).toHaveTextContent('Phone Number');
    expect(getLabel(emailField)).toHaveTextContent('Email Address');
    expect(getLabel(addressField)).toHaveTextContent('Address of Rental House');
    expect(getLabel(dateOfArrival)).toHaveTextContent('Date of Arrival');
    expect(getSelectLabel(rentingDaysField)).toHaveTextContent(
      'Number of Days'
    );
    expect(getSelectLabel(tentCountField)).toHaveTextContent('Number of Tents');
    expect(getLabel(commentsField)).toHaveTextContent('Comments');

    expect(wrapper.get('h2').text()).toBe('Reserve your cabana');
  });
});
const getLabel = (node) => {
  return node.parentNode;
};
const getSelectLabel = (node) => {
  return node.parentNode.parentNode;
};

const setup = () => {
  return {
    firstNameField: getElementByAriaLabel(wrapper, 'first name field'),
    lastNameField: getElementByAriaLabel(wrapper, 'last name field'),
    phoneField: getElementByAriaLabel(wrapper, 'phone number field'),
    emailField: getElementByAriaLabel(wrapper, 'email field'),
    addressField: getElementByAriaLabel(wrapper, 'address of rental field'),
    dateOfArrival: getElementByAriaLabel(wrapper, 'date of arrival field'),
    rentingDaysField: getElementByAriaLabel(
      wrapper,
      'number of cabana rental days field'
    ),
    tentCountField: getElementByAriaLabel(
      wrapper,
      'number of cabanas renting field'
    ),
    commentsField: getElementByAriaLabel(wrapper, 'comments field'),
    submitButton: getElementByAriaLabel(wrapper, 'submit your reservation'),
  };
};

// validation
// mask
// stripe integration
