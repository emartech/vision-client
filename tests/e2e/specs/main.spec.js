describe('Main page', () => {
  it('should display title', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/customer/1/sources/contact',
      response: { general: [] }
    });

    cy.visit('/');
    cy.contains('h1', 'Overview');
  });
});
