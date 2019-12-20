import { expect } from 'chai';
import ContactFieldList from './contact-field-list.vue';
import { createComponent } from '../../test-util';

describe('ContactFieldList', () => {
  it('should render datagrid', () => {
    const { component } = createComponent(ContactFieldList);

    expect(component.find('e-datagrid').html()).to.include('e-datagrid');
  });
});
