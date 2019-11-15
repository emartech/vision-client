import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ContactFieldList from '@/components/contact-field-list.vue';

describe('ContactFieldList', () => {
  it('renders props.msg when passed', () => {
    const contactFields = [];
    const wrapper = shallowMount(ContactFieldList, {
      propsData: { contactFields }, localVue: createLocalVue()
    });

    expect(wrapper.find('section').html()).to.include('section');
  });
});
