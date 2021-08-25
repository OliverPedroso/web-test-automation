package runners; //DESAFIO

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:Features"
		,glue= {"stepdefinitions"}
		,tags = {"@End2End"}
		,plugin = {"pretty", "html:target/cucumber-reports"} // aumenta a quantidade de dados sobre os testes na sa�da do console ap�s rodar os cen�rios, por�m fica tudo ileg�vel precisando do monochrome
		,monochrome = true //torna os dados dos relat�rios leg�veis
		//,plugin = {"usage"} --> caso precisar de mais dados de tempo de execu��o de cada passo do cen�rio usar o plugin "usage"
		// � poss�vel gerar relat�rios de testes no formato HTML, XML, etc.
	    // o plugin "html:target/cucumber-reports" gera relat�rios html na pasta cucumber-reports do workspace para cada cen�rio
		
		)
public class TesteRunner {

}
