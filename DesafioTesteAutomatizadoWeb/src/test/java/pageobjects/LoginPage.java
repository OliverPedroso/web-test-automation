package pageobjects; //DESAFIO

import static org.junit.Assert.assertTrue;

//import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;


public class LoginPage extends MetodosUteis{
	
	protected WebDriver driver;
	
	String titulo;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy (how = How.ID, using = "user-name")
	private WebElement usuario;
	
	@FindBy (how = How.ID, using = "password")
	private WebElement senha;
	
	@FindBy (how = How.ID, using = "login-button")
	private WebElement btnLogin;
	
	@FindBy (how = How.CLASS_NAME, using = "title")
	private WebElement products;
	
	public void preencherUsuario(String nomeUsuario) {
		esperarElemento(usuario);
		usuario.sendKeys(nomeUsuario);
	}
	
	public void preencherSenha(String senhaUsuario) {
		esperarElemento(senha);
		senha.sendKeys(senhaUsuario);
	}
	
	public void clicarBotaoLogin() {
		esperarElemento(btnLogin);
		btnLogin.click();
	}

	public void validarTitulo() {
		esperarElemento(products);
		assertTrue(products.isEnabled());
	}
}

