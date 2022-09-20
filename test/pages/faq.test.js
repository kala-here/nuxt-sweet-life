import faqPage from '@/pages/faq.vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';

const vuetify = new Vuetify();
const wrapper = mount(faqPage, {
  vuetify,
});

describe('FAQ page tests', () => {
  test('contains commonly asked questions', () => {
    expect(wrapper.text()).toContain('Q: When should the cabana arrive?');
    expect(wrapper.text()).toContain(
      'A: The tents will be set up and taken down daily. They will be up by 9 am and taken down starting at 5pm - unless there is wind or bad weather.'
    );
    expect(wrapper.text()).toContain(
      'Q: Will I be able to get a refund in case of bad weather or early take downs?'
    );
    expect(wrapper.text()).toContain(
      'A: Unfortunately we cannot issue a full refund in these cases, as we still have to pay our employees for set up and tear down each day. In the case of only one bad weather day, we cannot issue a refund. If there are multiple bad weather days, we will refund you $40 for each day.'
    );
  });
});
