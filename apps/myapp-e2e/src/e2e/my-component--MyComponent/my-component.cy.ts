describe('myapp: MyComponent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mycomponent--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to MyComponent!');
  });
});
