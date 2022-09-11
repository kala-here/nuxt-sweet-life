import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';
import HomePage from '@/layouts/default.vue';

describe('Home Page tests', () => {
  test('it has an app bar', () => {
    const { getByLabelText } = render(HomePage);
    const title = getByLabelText('Welome to Sweet Life Rentals');
    expect(title).toHaveTextContent('Sweet Life Rentals');
  });
});
