// https://docs.cypress.io/api/introduction/api.html

describe('#App', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/')
    cy.contains('h1', 'Welcome to the Supa Dupa Task Listano sponsa no tekio de okari shimasu!')
  })
  it('Add item : Write a label to input and click on the button to create a task', () => {
    cy.visit('http://localhost:8080/')
    cy.get('[placeholder= New task]').type('label 1')
    const buttonAddd = cy.contains('form__button-add')
    buttonAddd.click()
    cy.get('class=task-item__label-part').should('contain', 'label 1')
    cy.get('class=task-list__empty-list').should('be.hidden')
  })
  it('Delete item : delete a task when you click on icon, remove to this tasks ', () => {
    cy.visit('http://localhost:8080/')
    const itemButtonDelete = cy.contains('label 1').contains('delete')
    itemButtonDelete.click()
    cy.get('class=task-list__empty-list').should('be.visible')
    cy.get('class=task-list__task-items').should('be.hidden')
  })
})
