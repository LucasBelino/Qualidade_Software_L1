Feature: Testando Poke API

Background: URL raiz
  * def url_base = 'https://pokeapi.co/api/v2'

Scenario: Caso de teste 1: Retorno do Pokémon kakuna usando GET
  Given url url_base 
  And path '/pokemon/19'
  When method get
  Then status 200  

Scenario: Caso de teste 2: Retornar o tipo de Pokémon poison
  Given url url_base 
  And path '/type/4'
  When method get
  Then status 200

Scenario: Caso de teste 3: Retornar a habilidade volt-absorb
  Given url url_base
  And path '/ability/10'
  When method get
  Then status 200

Scenario: Caso de teste 4: Retornar a lista de Pokémons e se há o rattata listado
  Given url url_base
  And path '/pokemon'
  When method get
  Then status 200
  And match response.results[*].name contains 'rattata'

Scenario: Caso de teste 5: Negativo para retornar um Pokémon não listado
    Given url url_base
    And path '/pokemon'
    When method get
    Then status 200
    And match response.results[*].name !contains 'goku'

Scenario: Caso de teste 6: Retornar a evolução 5 de um Pokémon
  Given url url_base
  And path '/evolution-chain/5'
  When method get
  Then status 200

Scenario: Caso de teste 7: Retorno detalhado do Pokémon bulbasaur
    Given url url_base + '/pokemon/1'
    When method get
    Then status 200
    And match response.name == 'bulbasaur'
    And match response.id == 1
    And match response.base_experience == 64
    And match response.weight == 69
    And match response.types[0].type.name == 'grass'
    And match response.types[1].type.name == 'poison'
    And match response.abilities[0].ability.name == 'overgrow'
    And match response.abilities[1].ability.name == 'chlorophyll'
