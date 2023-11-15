//Criando uma referencia para o cypress, ativando ele no VsCode
/// <reference types="cypress"/> 

describe('Cenários de teste para o Melhores Destinos', ()=> {


  it('Caso de teste1: Testando a tela inicial do site e cadastrando para receber promoções', () => {
    cy.visit('https://www.melhoresdestinos.com.br')
    cy.wait(3000); //Aguardar 5 segundos para a animação da tela de promoções acontecer
    cy.get('#edmore-ButtonElement--w4h7XG3OaDrjughzp3Dm').click() 
    cy.get('#edmore-field-name').type('Joe Marks')
    cy.get('#edmore-field-email').type('joemarks@marksltda.com')
    cy.get('#edmore-FieldsElementButton--gpbFNtUyvv4VLOJASWUv').click()
    cy.get('#edmore-TextElement--wrapper--hiGkTM7GvZzCEhURzUKs').should('contain.text', 'Parabéns') //Assertiva de conclusão
    cy.get('#edmore-ButtonElement--IQjn4NbVjuhNKw96sjE0').click() //Finalizando caso de teste 
  })

  it('Caso de teste2: Caso de negativa ao cadastrar para receber promoções', () => {
    cy.visit('https://www.melhoresdestinos.com.br')
    cy.wait(5000); //Aguardar 5 segundos para a animação da tela de promoções acontecer
    cy.get('#edmore-ButtonElement--w4h7XG3OaDrjughzp3Dm').click() 
    cy.get('#edmore-field-name').type('joemarks@marksltda.com')
    cy.get('#edmore-field-email').type('Joe Marks')
    cy.get('#edmore-FieldsElementButton--gpbFNtUyvv4VLOJASWUv').click()
    cy.get('.om-field-error').should('contain.text', 'The Email field is required')
    cy.get('#edmore-field-name').clear() //Limpando input nome
    cy.get('#edmore-field-email').clear() //Limpando input email
    cy.get('#edmore-field-name').type('Joe Marks')
    cy.get('#edmore-field-email').type('joemarks@marksltda.com')
    cy.get('#edmore-FieldsElementButton--gpbFNtUyvv4VLOJASWUv').click() 
    cy.get('#edmore-TextElement--wrapper--hiGkTM7GvZzCEhURzUKs').should('contain.text', 'Parabéns') //Assertiva de conclusão
    cy.get('#edmore-ButtonElement--IQjn4NbVjuhNKw96sjE0').click() //Finalizando caso de teste
  })

  it('Caso de teste3: Instalando o app', () => {
    cy.visit('https://www.melhoresdestinos.com.br')
    cy.wait(5000); //Aguardar 5 segundos para a animação da tela de promoções acontecer
    cy.get('.CloseButton__ButtonElement-sc-79mh24-0 > svg').click() //Fechar a tela de promoções sem interagir
    cy.get('.bt-baixar-app > a').click()
    cy.get('.baixar-google, .baixar-apple').should('exist')  //Se existir esse botão na tela, estamos na tela de baixar o app
  })

  it('Caso de teste4: Testando a tela guia em Capitolio', () => {
    cy.visit('https://guia.melhoresdestinos.com.br/capitolio-243-c.html')
    cy.get('#so_ida').click()
    cy.get('#so_ida').should('be.checked'); //Botão de rádio está selecionado?
    cy.get('.datapara').should('not.be.visible') //Input de volta não está visível, temos o teste assertivo e finalizado
  })

  it('Caso de teste5: Testando filtro de voos na tela de Voos', () => {
    cy.visit('https://www.melhoresdestinos.com.br/voos?rota=BSB/CWB/-/&category_id=12')
    cy.get('.slider').invoke('val', 3).trigger('input');// Configura o valor do slider para 3
    cy.get('.slider').invoke('val').should('eq', '3'); //Verifica se o slider tem o valor 3
  })

  it('Caso de teste6: Testando filtro na tela de promoção de passagem', () => {
    cy.visit('https://www.melhoresdestinos.com.br/promocao/passagens-3-em-1-china-europa')
    cy.wait(5000); //Aguardar 5 segundos para a animação da tela de promoções acontecer
    cy.get('.CloseButton__ButtonElement-sc-79mh24-0 > svg').click() //Fechar a tela de promoções sem interagir
    cy.get('#filtro-origem').select('Rio de Janeiro')
    cy.get('#filtro-destino').select('Londres, Xangai e Madri')
    cy.get('.lt0').should('have.text', 'Rio de Janeiro') //Verificando a origem filtrada
    cy.get('.lt1').should('have.text', 'Londres, Xangai e Madri') //Verificando o destino filtrado
  })

})