export const testLink = (wrapper, find, label, to) => {
  const contact = wrapper.find(find);
  expect(contact.text()).toContain(label);
  expect(contact.attributes('to')).toBe(to);
}