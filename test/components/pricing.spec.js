import { render, within } from '@testing-library/vue';
import '@testing-library/jest-dom';
import Pricing from '@/components/Pricing.vue';

describe('Pricing tests', () => {
  test('displays all options for one tent', () => {
    const { pricingCard1 } = setup();

    within(pricingCard1).getByText('One Tent');
    within(pricingCard1).getByText('3 Days: $235');
    within(pricingCard1).getByText('4 Days: $250');
    within(pricingCard1).getByText('5 Days: $275');
    within(pricingCard1).getByText('6 Days: $300');
  });
  test('displays all options for 2 tents', () => {
    const { pricingCard2 } = setup();

    within(pricingCard2).getByText('Two Tents');
    within(pricingCard2).getByText('3 Days: $420-470');
    within(pricingCard2).getByText('4 Days: $450-500');
    within(pricingCard2).getByText('5 Days: $500-550');
    within(pricingCard2).getByText('6 Days: $550-600');
  });
  test('displays all options for 3 tents', () => {
    const { pricingCard3 } = setup();

    within(pricingCard3).getByText('Three Tents');
    within(pricingCard3).getByText('3 Days: $630-705');
    within(pricingCard3).getByText('4 Days: $675-750');
    within(pricingCard3).getByText('5 Days: $750-825');
    within(pricingCard3).getByText('6 Days: $825-900');
  });
  test('displays all options for 4 tents', () => {
    const { pricingCard4 } = setup();

    within(pricingCard4).getByText('Four Tents');
    within(pricingCard4).getByText('3 Days: $840-940');
    within(pricingCard4).getByText('4 Days: $900-1,000');
    within(pricingCard4).getByText('5 Days: $1,000-1,100');
    within(pricingCard4).getByText('6 Days: $1,100-1,200');
  });

  const setup = () => {
    const { getByLabelText } = render(Pricing);

    return {
      pricingCard1: getByLabelText('one tent rental prices'),
      pricingCard2: getByLabelText('two tents rental prices'),
      pricingCard3: getByLabelText('three tents rental prices'),
      pricingCard4: getByLabelText('four tents rental prices'),
    };
  };
});
