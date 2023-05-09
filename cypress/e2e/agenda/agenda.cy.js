/// <reference types="cypress" />


describe('Testes para a agenda de contatos', () =>{
    it('Deve abrir o site e renderizar o conteudo corretamente', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve inserir um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('[type="text"]').type('Beltrano Azevedo')
        cy.get('[type="email"]').type('raul.azevedo@hotmail.com')
        cy.get('[type="tel"]').type('84999999999')
        cy.get('.adicionar').click()
    })

    it('Deve Remover um contatoe existente', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })

    it('Deve Editar um contatoe existente', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Nome Alterado')
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('email@alterado.com')
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('8411111111')
        cy.get('.alterar').click()
    })
}) 

