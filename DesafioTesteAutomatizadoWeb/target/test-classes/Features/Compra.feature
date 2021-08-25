#language: pt
@Compra @End2End
Funcionalidade: Compra

  Contexto: 
    Dado que o usuario esteja na pagina principal do sistema
    E que o usuario esteja logado

  @RealizarCompra @SmokeTest
  Esquema do Cenario: Realizar Login com Sucesso
    Quando clicar no botao no Add to Cart
    E clicar no botao do Carrinho
    E clicar no botao Checkout
    E informar o campo do primeiro nome "<firstName>"
    E informar o campo do ultimo nome "<lastName>"
    E informar o campo do cep "<zipCode>"
    E clicar no botao Continue
    E clicar no botao Finish
    Entao o sistema devera abrir uma tela com a mensagem de sucesso da compra.

    Exemplos: 
     	| firstName | lastName | zipCode  |
      | Pedro     | Silva    | 12345678 |
      | Maria     | Oliveira | 87654321 |
     
