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
