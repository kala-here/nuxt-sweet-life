export const testNuxtLink = (wrapper, find, label, to) => {
  const elelment = elementWithClassHasText(wrapper, find, label);
  expect(elelment.attributes('to')).toBe(to);
};
export const testEmailLink = (wrapper, find, label, to) => {
  const elelment = elementWithClassHasText(wrapper, find, label);
  expect(elelment.attributes('href')).toBe(to);
};
export const elementWithClassHasText = (wrapper, cssClass, text) => {
  const elelment = wrapper.find(cssClass);
  expect(elelment.text()).toContain(text);
  return elelment;
};

export const getAllByText = (wrapper, text) => {
  /*
  Get all elements with the given text.
   */
  return wrapper.findAll('*').filter((node) => node.text() === text);
};

export const getByText = (wrapper, text) => {
  /*
  Get the first element that has the given text.
   */
  const results = getAllByText(wrapper, text);
  if (results.length === 0) {
    throw new Error(`getByText() found no element with the text: "${text}".`);
  }
  return results.at(0);
};

export const getElementByAriaLabel = (wrapper, ariaLabel) => {
  return wrapper.findComponent(`[aria-label="${ariaLabel}"]`).element;
};
