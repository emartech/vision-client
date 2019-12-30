import VueRouter from 'vue-router';
import ContactFieldList from '../components/pages/contact-field-list/contact-field-list.vue';
import ContactFieldEdit from '../components/pages/contact-field-edit/contact-field-edit.vue';

const routes = [
  { path: '/', name: 'overview', component: ContactFieldList },
  { path: '/edit/:id', name: 'edit', props: true, component: ContactFieldEdit },
  { path: '*', component: ContactFieldList }
];

export const routerFactory = () => new VueRouter({ routes });
