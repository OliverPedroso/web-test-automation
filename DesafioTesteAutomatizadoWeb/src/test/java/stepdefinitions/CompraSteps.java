package stepdefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.it.Quando;
import cucumber.api.java.pt.Entao;
import pageobjects.CompraPage;

public class CompraSteps {
	
	WebDriver driver;
	
	@Quando("^clicar no botao no Add to Cart$")
	public void clicar_no_botao_no_Add_to_Cart() throws Throwable {
		CompraPage cp = new CompraPage(Hooks.getDriver());
		cp.clicarBotaoAddToCart();
	}

	@Quando("^clicar no botao do Carrinho$")
	public void clicar_no_botao_do_Carrinho() throws Throwable {
		CompraPage cp = new CompraPage(Hooks.getDriver());
	    cp.clicarBotaoCarrinho();
	}
	@Quando("^clicar no botao Checkout$")
	public void clicar_no_botao_Checkout() throws Throwable {
		CompraPage cp = new CompraPage(Hooks.getDriver());
		cp.validarPaginaCarrinho();
		cp.clicarBotaoCheckout();
	}

	@Quando("^informar o campo do primeiro nome \"([^\"]*)\"$")
	public void informar_o_campo_do_primeiro_nome(String arg1) throws Throwable {
		CompraPage cp = new CompraPage(Hooks.getDriver());
		cp.validarPaginaCheckout();
		cp.preencherFirstName(arg1);
	}

	@Quando("^informar o campo do ultimo nome \"([^\"]*)\"$")
	public void informar_o_campo_do_ultimo_nome(String arg1) throws Throwable {
		CompraPage cp = new CompraPage(Hooks.getDriver());
		cp.preencherLastName(arg1);
	}
	
	@Quando("^informar o campo do cep \"([^\"]*)\"$")
	public void informar_o_campo_do_cep(String arg1) throws Throwable {
		CompraPage cp = new CompraPage(Hooks.getDriver());
		cp.preencherZipCode(arg1);
	}
	
	@Quando("^clicar no botao Continue$")
	public void clicar_no_botao_Continue() throws Throwable {
		CompraPage cp = new CompraPage(Hooks.getDriver());
		cp.clicarBotaoContinue();
	}

	@Quando("^clicar no botao Finish$")
	public void clicar_no_botao_Finish() throws Throwable {
		CompraPage cp = new CompraPage(Hooks.getDriver());
		cp.validarItemCheckout();
		cp.clicarBotaoFinish();
	}

	@Entao("^o sistema devera abrir uma tela com a mensagem de sucesso da compra\\.$")
	public void o_sistema_devera_abrir_uma_tela_com_a_mensagem_de_sucesso_da_compra() throws Throwable {
		CompraPage cp = new CompraPage(Hooks.getDriver());
		cp.validarMensagemSucessoCompra();
		cp.clicarBotaoBackHome();
	}

}
