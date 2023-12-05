Feature: Testando a API Chuck Norris Jokes

Background:
  * def url_base = 'https://api.chucknorris.io/jokes'

Scenario: Gerar uma piada aleatória do Chuck Norris
  Given url url_base 
  And path '/random'
  When method get
  Then status 200

Scenario: Gerar uma piada sobre a categoria dev
  Given url url_base
  And path '/random?category=dev'
  When method get
  Then status 200

Scenario: Obter uma piada com duas categorias
    Given url url_base + '/random?category=dev&category=science'
    When method get
    Then status 200
    And match each response.categories == '#? _ == "dev" || _ == "science"'

Scenario: Tentar obter uma piada com uma categoria inválida
  Given url url_base
  And path '/random?category=invalid'
  When method get
  Then status 404

Scenario: Obter uma lista de categorias de piadas disponíveis
    Given url url_base
    And path '/categories'
    When method get
    Then status 200
    And match response == ['animal', 'career', 'celebrity', 'dev', 'explicit', 'fashion', 'food', 'history', 'money', 'movie', 'music', 'political', 'religion', 'science', 'sport', 'travel']
  
Scenario: Tentar obter uma piada com uma categoria inexistente
  Given url url_base 
  And path '/random?category='
  When method get
  Then status 404



