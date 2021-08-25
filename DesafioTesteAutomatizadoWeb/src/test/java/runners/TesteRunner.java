package runners; //DESAFIO

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:Features"
		,glue= {"stepdefinitions"}
		,tags = {"@End2End"}
		,plugin = {"pretty", "html:target/cucumber-reports"} // aumenta a quantidade de dados sobre os testes na saída do console após rodar os cenários, porém fica tudo ilegível precisando do monochrome
		,monochrome = true //torna os dados dos relatórios legíveis
		//,plugin = {"usage"} --> caso precisar de mais dados de tempo de execução de cada passo do cenário usar o plugin "usage"
		// é possível gerar relatórios de testes no formato HTML, XML, etc.
	    // o plugin "html:target/cucumber-reports" gera relatórios html na pasta cucumber-reports do workspace para cada cenário
		
		)
public class TesteRunner {

}
