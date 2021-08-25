package stepdefinitions; //DESAFIO


import org.openqa.selenium.WebDriver;

import cucumber.api.java.es.Dado;
import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Entao;
import pageobjects.LoginPage;

public class LoginSteps {
	
	WebDriver driver;
	
	@Dado("^que o usuario esteja na pagina principal do sistema$")
	public void que_o_usuario_esteja_na_pagina_principal_do_sistema() throws Throwable {
		Hooks.abrirUrl("https://www.saucedemo.com/");
		driver = Hooks.getDriver();
		/*LoginPage lp = new LoginPage(driver);
		lp.preencherUsuario("Admin");
		lp.preencherSenha("admin123");
		lp.clicarBotaoLogin();*/
	}
	
	@Dado("^que o usuario esteja logado$") //
	public void que_o_usuario_esteja_logado() throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.preencherUsuario("standard_user");
		lp.preencherSenha("secret_sauce");
		lp.clicarBotaoLogin();
	}

	@Quando("^informar o campo Username como \"([^\"]*)\"$")
	public void informar_o_campo_Username_como(String arg1) throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.preencherUsuario(arg1);
	}

	@Quando("^informar o campo Password como \"([^\"]*)\"$")
	public void informar_o_campo_Password_como(String arg1) throws Throwable { //DESAFIO
		LoginPage lp = new LoginPage(driver);
		lp.preencherSenha(arg1);
	}

	@Quando("^clicar no botao Login$")
	public void clicar_no_botao_Login() throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.clicarBotaoLogin();
	}

	@Entao("^o sistema devera autorizar o login, exibindo pagina contendo os Produtos\\.$")
	public void o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_os_Produtos() throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.validarTitulo();
	}
}
