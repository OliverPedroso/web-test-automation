$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Compra.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Compra",
  "description": "",
  "id": "compra",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Compra"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "compra;realizar-login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@RealizarCompra"
    },
    {
      "line": 9,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "clicar no botao no Add to Cart",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao do Carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao Checkout",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo do primeiro nome \"\u003cfirstName\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo do ultimo nome \"\u003clastName\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informar o campo do cep \"\u003czipCode\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "clicar no botao Continue",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "clicar no botao Finish",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "o sistema devera abrir uma tela com a mensagem de sucesso da compra.",
  "keyword": "Entao "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "compra;realizar-login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "zipCode"
      ],
      "line": 22,
      "id": "compra;realizar-login-com-sucesso;;1"
    },
    {
      "cells": [
        "Pedro",
        "Silva",
        "12345678"
      ],
      "line": 23,
      "id": "compra;realizar-login-com-sucesso;;2"
    },
    {
      "cells": [
        "Maria",
        "Oliveira",
        "87654321"
      ],
      "line": 24,
      "id": "compra;realizar-login-com-sucesso;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 3790003400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que o usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 1665835000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_logado()"
});
formatter.result({
  "duration": 733408500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "compra;realizar-login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@RealizarCompra"
    },
    {
      "line": 2,
      "name": "@Compra"
    },
    {
      "line": 9,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "clicar no botao no Add to Cart",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao do Carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao Checkout",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo do primeiro nome \"Pedro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo do ultimo nome \"Silva\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informar o campo do cep \"12345678\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "clicar no botao Continue",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "clicar no botao Finish",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "o sistema devera abrir uma tela com a mensagem de sucesso da compra.",
  "keyword": "Entao "
});
formatter.match({
  "location": "CompraSteps.clicar_no_botao_no_Add_to_Cart()"
});
formatter.result({
  "duration": 326552900,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicar_no_botao_do_Carrinho()"
});
formatter.result({
  "duration": 179303300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicar_no_botao_Checkout()"
});
formatter.result({
  "duration": 243223200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pedro",
      "offset": 35
    }
  ],
  "location": "CompraSteps.informar_o_campo_do_primeiro_nome(String)"
});
formatter.result({
  "duration": 299280600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Silva",
      "offset": 33
    }
  ],
  "location": "CompraSteps.informar_o_campo_do_ultimo_nome(String)"
});
formatter.result({
  "duration": 206516000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 25
    }
  ],
  "location": "CompraSteps.informar_o_campo_do_cep(String)"
});
formatter.result({
  "duration": 204419700,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicar_no_botao_Continue()"
});
formatter.result({
  "duration": 147518900,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicar_no_botao_Finish()"
});
formatter.result({
  "duration": 213291300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.o_sistema_devera_abrir_uma_tela_com_a_mensagem_de_sucesso_da_compra()"
});
formatter.result({
  "duration": 163084300,
  "status": "passed"
});
formatter.after({
  "duration": 738198500,
  "status": "passed"
});
formatter.before({
  "duration": 1350368800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que o usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 426661400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_logado()"
});
formatter.result({
  "duration": 613047400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "compra;realizar-login-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@RealizarCompra"
    },
    {
      "line": 2,
      "name": "@Compra"
    },
    {
      "line": 9,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "clicar no botao no Add to Cart",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao do Carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao Checkout",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo do primeiro nome \"Maria\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo do ultimo nome \"Oliveira\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informar o campo do cep \"87654321\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "clicar no botao Continue",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "clicar no botao Finish",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "o sistema devera abrir uma tela com a mensagem de sucesso da compra.",
  "keyword": "Entao "
});
formatter.match({
  "location": "CompraSteps.clicar_no_botao_no_Add_to_Cart()"
});
formatter.result({
  "duration": 376186000,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicar_no_botao_do_Carrinho()"
});
formatter.result({
  "duration": 134606800,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicar_no_botao_Checkout()"
});
formatter.result({
  "duration": 216989000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maria",
      "offset": 35
    }
  ],
  "location": "CompraSteps.informar_o_campo_do_primeiro_nome(String)"
});
formatter.result({
  "duration": 278636400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oliveira",
      "offset": 33
    }
  ],
  "location": "CompraSteps.informar_o_campo_do_ultimo_nome(String)"
});
formatter.result({
  "duration": 212167500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "87654321",
      "offset": 25
    }
  ],
  "location": "CompraSteps.informar_o_campo_do_cep(String)"
});
formatter.result({
  "duration": 188720200,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicar_no_botao_Continue()"
});
formatter.result({
  "duration": 124222800,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicar_no_botao_Finish()"
});
formatter.result({
  "duration": 187818300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.o_sistema_devera_abrir_uma_tela_com_a_mensagem_de_sucesso_da_compra()"
});
formatter.result({
  "duration": 168884400,
  "status": "passed"
});
formatter.after({
  "duration": 754531900,
  "status": "passed"
});
formatter.uri("Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina contendo os Produtos.",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;realizar-login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 16,
      "id": "login;realizar-login-com-sucesso;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 17,
      "id": "login;realizar-login-com-sucesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1351930000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 381499800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina contendo os Produtos.",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Username_como(String)"
});
formatter.result({
  "duration": 221630500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Password_como(String)"
});
formatter.result({
  "duration": 157150900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 193733600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_os_Produtos()"
});
formatter.result({
  "duration": 232646400,
  "status": "passed"
});
formatter.after({
  "duration": 714325200,
  "status": "passed"
});
});