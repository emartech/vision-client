import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ContactFieldList from './contact-field-list.vue';

describe('ContactFieldList', () => {
  it('should render datagrid', () => {
    const contactFields = [];
    const wrapper = shallowMount(ContactFieldList, {
      propsData: { contactFields }, localVue: createLocalVue()
    });

    expect(wrapper.find('e-datagrid').html()).to.include('e-datagrid');
  });
});
