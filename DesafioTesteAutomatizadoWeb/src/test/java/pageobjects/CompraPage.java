package pageobjects; 

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

	public class CompraPage extends MetodosUteis {

		protected WebDriver driver;
		
		public CompraPage(WebDriver driver) {
			this.driver = driver;
			PageFactory.initElements(driver, this);
		}
		
		
		//pagina inicial
		@FindBy (how = How.ID, using = "add-to-cart-sauce-labs-backpack") //ok
		private WebElement btnAddToCart;
		
		@FindBy (how = How.ID, using = "shopping_cart_container") // ok
		private WebElement btnShoppingCart;
		
		//pagina do carrinho
		@FindBy (how = How.CLASS_NAME, using = "title")
		private WebElement yourCart;
		
		@FindBy (how = How.ID, using = "checkout") //ok
		private WebElement btnCheckout;
		
		//pagina do checkout
		@FindBy (how = How.CLASS_NAME, using = "title")
		private WebElement checkoutYourInformation;
		
		@FindBy (how = How.ID, using = "first-name") //ok
		private WebElement campoFirstName;
		
		@FindBy (how = How.ID, using = "last-name") //ok
		private WebElement campoLastName;
		
		@FindBy (how = How.ID, using = "postal-code") //ok
		private WebElement campoPostalCode;
		
		@FindBy (how = How.ID, using = "continue") //ok
		private WebElement btnContinue;
		
		//pagina do OVERVIEW do checkout
		@FindBy (how = How.CLASS_NAME, using = "inventory_item_name")
		private WebElement sauceLabsBackpack;
		
		@FindBy (how = How.ID, using = "finish") //ok
		private WebElement btnFinish;
		
		//pagina de confirmação da compra
		@FindBy (how = How.CLASS_NAME, using = "complete-header")
		private WebElement thankYouForYourOrder;
		
		@FindBy (how = How.ID, using = "back-to-products") //ok
		private WebElement btnBackHome;
		
		
		//METODOS DA PAGINA PRINCIPAL
		public void clicarBotaoAddToCart() { //ok
			esperarElemento(btnAddToCart);
			btnAddToCart.click();
		}
		
		public void clicarBotaoCarrinho() { //ok
			esperarElemento(btnShoppingCart);
			btnShoppingCart.click();
		}
		
		//METODOS DA PAGINA DO CARRINHO
		public void validarPaginaCarrinho() { //ok
			esperarElemento(yourCart);
			assertTrue(yourCart.isEnabled());
		}
		
		public void clicarBotaoCheckout() { //ok
			esperarElemento(btnCheckout);
			btnCheckout.click();
		}
		
		//METODOS DA PAGINA DE INFORMAÇÕES DE CHECKOUT
		public void validarPaginaCheckout() { //ok
			esperarElemento(checkoutYourInformation);
			assertTrue(checkoutYourInformation.isEnabled());
		}
		
		public void preencherFirstName (String firstName) {
			campoFirstName.clear();// 
			esperarElemento(campoFirstName);
			campoFirstName.sendKeys(firstName);	
		}
		
		public void preencherLastName (String lastName) {
			campoLastName.clear();// 
			esperarElemento(campoLastName);
			campoLastName.sendKeys(lastName);	
		}
		
		public void preencherZipCode (String zipCode) {
			campoPostalCode.clear();// 
			esperarElemento(campoPostalCode);
			campoPostalCode.sendKeys(zipCode);	
		}
		
		public void clicarBotaoContinue() {
			esperarElemento(btnContinue);
			btnContinue.click();
		}
		
		// METODOS DA PAGINA DE OVERVIEW DO CHECKOUT
		public void validarItemCheckout() { //ok
			esperarElemento(sauceLabsBackpack);
			assertTrue(sauceLabsBackpack.isEnabled());
		}
		
		public void clicarBotaoFinish() { //ok
			esperarElemento(btnFinish);
			btnFinish.click();
		}
		
		//METODO PAGINA DE CONFIRMAÇÃO DA COMPRA
		public void validarMensagemSucessoCompra() { //ok
			esperarElemento(thankYouForYourOrder);
			assertTrue(thankYouForYourOrder.isEnabled());
		}
		
		public void clicarBotaoBackHome() { //ok
			//esperarElemento(btnBackHome);
			btnBackHome.click();
		}
	}
