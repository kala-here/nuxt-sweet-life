import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';
import AppBar from '@/components/AppBar.vue';

describe('App bar tests', () => {
  test('title is Sweet Life Rentals', () => {
    const { getByLabelText } = render(AppBar);
    const title = getByLabelText('Welome to Sweet Life Rentals');
    expect(title).toHaveTextContent('Sweet Life Rentals');
  });
});
