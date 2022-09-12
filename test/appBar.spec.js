import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';
import AppBar from '@/components/AppBar.vue';

describe('App bar tests', () => {
  test('title is Seabreeze Cabana Rentals', () => {
    const { getByLabelText } = render(AppBar);
    const title = getByLabelText('Welome to Seabreeze Cabana Rentals');
    expect(title).toHaveTextContent('Seabreeze Cabana Rentals');
  });
});
