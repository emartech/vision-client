import { expect } from 'chai';
import ContactFieldList from './contact-field-list.vue';
import { createComponent } from '../../../test-util';

describe('ContactFieldList', () => {
  it('should render datagrid', () => {
    const { component } = createComponent(ContactFieldList, { state: { loading: false } });

    expect(component.find('e-datagrid').html()).to.include('e-datagrid');
  });

  it('should translate header', () => {
    const { component } = createComponent(ContactFieldList);

    expect(component.find('h1').text()).to.eql('Overview');
  });

  it('should modify header based on flipper', () => {
    const { component } = createComponent(ContactFieldList, { state: { flippers: ['ui_redesign_basics'] } });

    expect(component.find('h1').text()).to.eql('Overview _redesigned');
  });
});
