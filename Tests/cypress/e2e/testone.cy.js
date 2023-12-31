//Criando uma referencia para o cypress, ativando ele no VsCode
/// <reference types="cypress"/> 

//Describe é onde usamos para descrever o nosso caso de teste
describe('Creating test scenario for globalsqa website', ()=> {

  //Para cada caso de teste
  //.skip na frente de it para ignorar um teste
  it.skip('Test case: Registering a user on the website successfully', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click() //Ao selecionar o código 'inspecionar' temos o seguinte comando cy.get e no fim adicionamos click para clicar no botão
    cy.get('#firstName').type('Lucas Belino') //Selecionamos o campo de texto e type para inserir o texto
    cy.get('#Text1').type('Silva') //Escrevendo no sobrenome
    cy.get('#username').type('LbSilva') //Escrevendo o usuario
    cy.get('#password').type('Lucas123') //Escrevendo a senha
    cy.get('.btn-primary').click() //Clicando no botão de registro por fim

    //Testar agora se deu ceto
    cy.get('.ng-binding').should('contain.text', 'Registration successful') //Inspecionamos a caixa de "Registrou com sucesso", should "Deve conter um texto, pode ter outras coisas porém contem o txt..."
  })

  it.skip('Test case2: Registering a user without a password', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type('Lucas Belino') //Selecionamos o campo de texto e type para inserir o texto
    cy.get('#Text1').type('Silva') //Escrevendo no sobrenome
    cy.get('#username').type('LbSilva') //Escrevendo o usuario
    cy.get('#password').type('Lucas123') //Escrevendo a senha
    cy.get('#password').clear() //Apagando o que foi escrito na senha

    //Testar agora se deu ceto
    cy.get('.has-error > .help-block').should('have.text', 'Password is required') //Tem o texto
    cy.get('.btn-primary').should('be.disabled') //Assertiva se está desativado
  })

  it.skip('Test case3: Successfully logging in user through a function', () => {

    let info = createUser() //Chamando a função através de info
    cy.get('#username').type(info[0]) //Nome
    cy.get('#password').type(info[1]) //Senha
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', info[0])
  })

  it('Test case4: Successfully delete user', () => {

    let info = createUser() //Chamando a função através de info
    cy.login(info[0], info[1])
    cy.get('h1.ng-binding').should('contain.text', info[0])
    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()
    cy.login(info[0], info[1])
    cy.get('.ng-binding').should('have.text', 'Username or password is incorrect')
  })

})

//Criando uma função para evitar repetição de código
function createUser(){

    let hours = new Date().getHours().toString() //Criando uma variavel horas e passar para uma string, assim temos um usuario em cada tempo. Impossivel criar um usuario no mesmo horairo
    let minutes = new Date().getMinutes().toString()
    let seconds = new Date().getSeconds().toString()
    let user = hours + minutes + seconds + 'GENERATOR' //Concatenando todos
    let password = hours + minutes + seconds + 'PASSWORD'
    let userInfo = [user, password] //Dentro de um array eu retorno usuario[0] senha[1]

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click() 
    cy.get('#firstName').type(user) 
    cy.get('#Text1').type(user) 
    cy.get('#username').type(user) 
    cy.get('#password').type(password) 
    cy.get('.btn-primary').click() 

    //Testar agora se deu ceto
    cy.get('.ng-binding').should('contain.text', 'Registration successful') //Inspecionamos a caixa de "Registrou com sucesso", should "Deve conter um texto, pode ter outras coisas porém contem o txt..."

    return userInfo //Retornando meu array
}