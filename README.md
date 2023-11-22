# cypress-projects
Repository for the projects in JS

What is Cypress?

· Cypress is a next generation front end Automation testing tool built for the modern web applications

How Cypress is Unique from other Automation tools?

Cypress automatically waits for commands and assertions before moving on. No more async hell.

Ability to test Edge Testcases by Mocking the server response

Cypress takes snapshots as your tests run. We can hover over each commands in the Command Log to see exactly what happened at each step.

Because of its Architectural design, Cypress delivers fast, consistent and reliable test execution compared to other Automation tools

View videos of your entire tests execution when run from the Cypress Dashboard.

*******************************************************************************************

Cypress built on Node.js and comes packaged as an npm module,

As it is built on Node.js, It uses JavaScript for writing tests. But 90% of coding can be done using Cypress inbuilt commands which are easy to understand.

Cypress also bundles with jQuery and inherits many of jQuery methods for UI components Identification

Cypress Architecture

Most testing tools (like Selenium) operate by running outside of the browser and executing remote commands across the network. But Cypress engine directly operates inside the browser. In other words, It is the browser that is executing your test code

This enables Cypress to listen and modify the browser behavior at run time by manipulating DOM and altering Network requests and responses on the fly

Cypress open doors to New Kind of testing with Having ultimate control over your application (front and back)


Cypress Browser Support:


Chrome
Electron
Firefox & IE


Cypress Components:

Test Runner
Dash Board Service



Course Outcome:

By end of this course, You should be able to Automate any Web App using Cypress
You will understand how Cypress is Unique to build Non Flaky Stable Automation tests with the help of jQuery
You can mock network requests and responses with Cypress
Ability to Design Cypress framework from scratch with all the Testing standards

Integrate Cypress Test Framework to Jenkins for CI/CD


Course Prerequisites:

None for 90% of lectures.
Basics of API knowledge when dealing with API mocking topics. (10% lectures)
JavaScript Basics are taught in parallel when required with Cypress concepts

*******************************************************************************************

MY DOC!

Mocha framework


Extensions
ChroPath
SelectorsHub


Download Node.js
export PATH=$PATH:/usr/local/bin/	(add path, if missing, in .bash_profile)
vim ~/.bash_profile


Create folder and add package.json 
npm -i init	(just hit enter for quicker definition)


Install Cypress 
npm install cypress —save-dev	(using save-dev to create an entry dependency to package.json - do it only once!)
npm install	(using later for creating all dependencies in the project)


Install Cypress iFrame
npm install -D cypress-iframe
import "cypress-iframe" -> import using cypress iframe in specific test suites
cy.frameLoaded() -> loading iframe into the cypress object
cy.iframe() -> switch to the iframe mode -> to enable performing of all subsequent actions inside iframe


Open Cypress 
npx cypress open
yarn run cypress open
node_modules/.bin/cypress open		(longest way - need to be opened via node modules bin folder)
$(npm bin)/cypress open


Run Cypress Test/Spec
node_modules\.bin\cypress run
npx cypress run		(npx used to find the cypress path in node_modules -> in case if haven't installed cypress globally)
yarn cypress run
node_modules/.bin/cypress run		(longest way - need to be opened via node modules bin folder)
$(npm bin)/cypress run

npx cypress run --record --spec "cypress/e2e/my-spec.cy.js"		(invoke locally installed cypress tool directly)

npx cypress run --spec cypress/integration/examples/Test10-POD.js --headed --browser chrome --env url="https://rahulshettyacademy.com" (run via console with different environmental variable - 'run over' other envo vars)

npx cypress run --spec cypress/integration/examples/BDD/ecommerce.feature --headed --browser chrome
	(run via console feature file with different environmental variable -> cucumber!)

npx cypress run --env tags="@Regression" cypress/integration/examples/BDD/*.feature --headed --browser chrome
	(run via console tests with specific tag -> cucumber!)


Through CLI cypress runs in headless (test runs without browser invokation) in default Electron browser (Light Chrome version)

cypress run --headed	(to invoke browse and see the results in console -> cypress 'headless' by default)
cypress run --browser chrome


Run Cypress Tests via Scripts (package.json)
"scripts":
{
	"test": "node_modules/.bin/cypress run",	("test" - name of the test -> run command: npm run test)
	"headTest": "npm run test -- --headed",	(use first, basic test to make scripts shorter and more consistent!)
	"chromeTest": "npm run test -- --browser chrome"	(be aware to add double hyphens before any other command!)
	"recordDashboardTest": "npm run test -- —record --key 718ab127-7939-4cf5-9039-6cca4bdf9149 --reporter mochawesome"
	"parallelTest": "npm run test -- —headed --browser chrome  --parallel"	(commonly used in Jenkins integration - able 
													to run tests parallel via different machines - QA, dev, etc.)
	
}


Cypress Config 
Update configurations in cypress.config.js (cypress.json) which overrides existing behaviour

Cypress Config - Timeout - Straight forward property
Cypress.config('defaultCommandTimeout', 8000) -> when this command is written on spec(test) level then this timeout 											 will be applied only to this spec(test) -> custom timeout, which 											 overwrites timeout set in default config!

Cypress Config - Environmental Variables
env -> globally values that can be set to apply all test cases - to be able to reuse it across all framework 
Example

Environmental variables:
env:
{
	url: "https://rahulshettyacademy.com"
	username: "alex"
	pass: "123"
}

Reuse:
cy.visit(Cypress.env('url') + "/angularpractice/")


Cypress Config - Run failed tests again
retries -> inside one test rune it re-runs failed tests again 

retries:
{
	runMode: 1
}


Cypress Dashboard - Cloud
cypress.config.js -> add projectId: "m82ofp"
cypress_record_key -> d67c0e07-b984-47de-a8f4-d2123035db19

Terminal command - to upload locally recorded video:
npx cypress run —record —key 718ab127-7939-4cf5-9039-6cca4bdf9149	(check the double hyphens!)
npx cypress run —record —key 718ab127-7939-4cf5-9039-6cca4bdf9149 —spec cypress/integration/examples/*.js —headed —browser chrome	(with added params - check the double hyphens!)


Cypress Functions
function(){} -> function without name is called anonymous function!
function(){} === () => {} -> shortcut (same shorter version) syntax of anonymous function


Cypress Locators 
It supports only CSS selectors!!!

id					tagname#idname

classname			.classname				.search-keyword

Customized with 
any attribute			tagname[attribute=value] 	input[type='search']

tagnames									form input	

nth-child										tr td:nth-child(2) -> table (mark 2nd column)


Cypress is ASynchronous by nature
Synchronous -> every step will execute in sequence manner
ASynchronous -> all the steps will hit the server at a time -> quickly execute each and every step without worry about the state of the previous step 
ASynchronous -> there is no guarantee in sequence of execution

Cypress handle via their on developed engine that the steps are executed in a sequence order - queue all of the commands and begin run!

In ASynchronous every step returns promise in one of the states: rejected, resolved or pending
Promise -> state or behaviour of a step!!!!!
cy.get('.search-keyword').type('ca')
	promise!		    method!


Cypress then()
then() -> method to wait until the promise is resolved (ideal situation is when the step is executed) - check Docs!
then() -> need to be used in case of including variables to manually resolve the promise 


Cypress jQuery
text() -> not Cypress command - Cypress supports jQuery objects!
cy.get('.search-keyword').type('ca') -> if concatenation command is also a cypress command then this child command/method (.type('ca')) have the ability to resolve the promise and accept the parent input (cy.get('.search-keyword'))!!!

cy.get('.brand').text() -> if concatenation command is a non cypress command/method (jQuery) then this child command/method (.text()) doesn't have the ability to resolve the promise and accept the parent input (cy.get('.brand')) -> we need to resolve it manually by then() method!!!

Cypress jQuery -> list of mostly used methods/functions:
show() -> function to make elements visible
text() -> method sets or returns the content of the selected element
prop() -> method to get the property value -> property = attribute


Cypress Alert Popups
2 types of popup -> OK (just to click ok) and CONFIRM (to cancel or confirm the alert)
Cypress auto accepts alerts and popups -> no need to write the code!

cy.on() ->method for triggering any event
window:alert -> event for firing alert to open to get access to alert (i.e. for catching/capturing text)  -> check the Catalog of Events docs!

Cypress has control to manipulate browser DOM (HTML) - give directions to the browser by manipulating code!


Cypress Origin -> Child Window
Cross domains is not supported in Cypress by default!

cy.visit()
cy.origin(url, () =>
{
	all operations from different origin must need to be done inside this block!!!!!

}) -> intentionally changing from one domain to another 
2 arguments -> 1st one is url of the new domain and 2nd one is the nameless function with all operations that you want to perform in the new domain!


Cypress Child tab
In Cypress there is no concept of switching to the child browser -> not support child tab/window!
target="_blank" -> remove the attribute to ensure that the link redirects to the parent browser/window!


Cypress invoke()
invoke() -> function with the main purpose to invoke jQuery functions!


Cypress go()
cy.go() -> work on Cypress navigations!
cy.go('back') -> navigate back to the previous URL in the browser's history
cy.go('forward') -> navigate forward to the next URL in the browser's history


Cypress next()
next() -> get the immediately following sibling of each DOM element -> often used for lists/columns and it only works on get!


Cypress eq()
eq() -> command to extract the index


Cypress Handling Invisible Elements
show() -> jQuery function to make elements visible -> use invoke('show') function!
click({force: true}) -> pass {force: true} argument in click() method to search for the invisible elements as well, before click


Cypress Fixtures
cy.fixture() -> use to 'talk' with files present in fixtures folder (for pulling out the data and avoid hardcoding)!
cy.fixture() -> runs before all tests in the block (before/beforeEach hooks)
cy.fixture().then(function(data) {}) -> always need to resolve the promise!

Note: Promise can be resolved via '.then(function(data) {})' or it can be resolved if prefix with 'await' keyword, example:

async function(text)
{
	const csv = await neatCsv(text)	//be aware that async and await always comes together!!!!!
}



Cypress Hooks
before()=> {} -> mocha function executed once before all tests in the block
beforeEach()=> {} -> mocha function executed before each and every test/scenario
after()=> {} -> mocha function executed once after all tests in the block
afterEach()=> {} -> mocha function executed after each and every test/scenario

Note: In case when using the hook to load the DATA variable cannot use fat arrow "() =>" operator - it won't work since the feature is not implemented yet -> use the old one "function()" 


Cypress Customized Commands
support/commands.js -> use this feature to avoid hardcoding data in tests and to be able to reuse the code at the same time


Cypress Debugging
cy.pause() -> to pause and debug the test - use Play/Resume button to manually finish the test
cy.debug() -> to pause and debug the test - it can be concatenated to the other methods
Be aware that you can find out more in browser console for every single step - use console!!!

*******************************************************************************************

Cypress Intercept
cy.intercept() -> modify real HTTP responses, change the body, headers or HTTP status code before they are received
 			    by the browser
cy.intercept() -> modify an HTTP request's body, headers and URL before it is sent to the destination server
cy.intercept() -> helps us to perform Integration Testing between UI and BE services
cy.intercept() -> watch (request Url, Method...), intercept and mock the body based on the response object property
cy.intercept({requestObjectProperties}, {responseObjectProperties})

*******************************************************************************************

Cypress Request - API
cy.request() -> make an HTTP request -> trigger an API call
cy.request(url)
cy.request(url, body)
cy.request(method, url) 
cy.request(method, url, body) 
cy.request(options)

*******************************************************************************************

Cypress Node
cy.task() -> directly execute the code in Node via 'task' plugin event/method

Example

Create a new task in cypress.config.js:
on('task', {
	excelToJsonConverter(filePath)
 	{
		const result = excelToJson({
   		source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
  		})
		
		return result;	
 	}
})

Calling a task event in spec file:
cy.task('excelToJsonConverter', filePath).then(function(result){
	cy.log(result)
})

*******************************************************************************************

Cypress Read File

cy.readFile(filePath) -> returns the content present in a file 'filePath'

Note: Don't forget to resolve the promise!
Not a best practice since it can be used only to validate the content in the e.g. excel file and not to compare it and validate!

*******************************************************************************************

Cypress CSV/Excel

Excel

npm install convert-excel-to-json -> install convertor plugin

Converting xlsx as a Buffer:
const excelToJson = require('convert-excel-to-json')
const fs = require('fs') -> fs == module for accessing file system

const filePath = Cypress.config('fileServerFolder') + '/cypress/downloads/order-invoice_m.tatatu.test.xlsx'

const result = excelToJson({
	source: fs.readFileSync() // fs.readFileSync return a Buffer
})

IMPORTANT!
Browser(Engine) - JS code - Client Side Environment (Front End) - Cypress

Node (Engine) - JS code - Back End applications/Environment
	Accessing files - fs, Database access….

	// create a command in config and call it through 'cy.task'
	Task - (Files, DB) -> cypress.config.js, (ExcelToJson) -> cy.task(ExcelToJson)

CSV

*******************************************************************************************

Cypress Downloads
npm i neat-csv@5.1.0 -> install 5.1.0 version which is a bit more stable regarding 7.0.0

*******************************************************************************************

Cypress Page object Design

CREATE NEW CLASS FOR EVERY PAGE AND DECLARE ALL THE PAGE OBJECTS ->
EXPORT THAT PARTICULAR CLASS -> 
IMPORT IN TEST AND CREATE AN OBJECT FOR THAT CLASS WITH THE IMPORT KEYWORD!!!!!!!!!

Example

New class & export:
class HomePage
{
	getGender()
	{
		return cy.get('select') 	-> always add a 'return' statement for each and every method! 
	}
}
export default HomePage

Import in test and creating a new object:
import HomePage from '../pageObjects/HomePage.js'

	it('Test Case', function()
	{
		const homePage = new HomePage()
	})

*******************************************************************************************

Cypress & Jenkins
Use custom workspace -> add a path from your local workspace -> /Users/aleksandar/Projects/Cypress/cypress-projects OR
Git -> URL to the git repository - define the branch!
This project is parameterized -> Choice Parameter
	Name: Script		(Commonly used 'Script' name)
	Choises: test headTest…	(name of the test scripts from 'cypress.config.js')
Add build step -> Execute shell:
	npm run "$Script"		("Script" var name from choice parameters -> run dynamically)

Note: Don't forget to install NodeJS plugin, add via Tools and Provide Node & npm bin/ folder to PATH!!!

*******************************************************************************************

Install/Configuration Cypress BDD Cucumber
npm install @badeball/cypress-cucumber-preprocessor		(install cucumber plugin)
cypress.config.js/setupNodeEvents -> add all cucumber plugins (preprocessor & browserify -> check docs!) 
								 under this function -> define it on global level and call inside "e2e"
package.json -> add cucumber related plugins (preprocessor & browserify) into framework inside "dependencies"
cypress.config.js -> import previously added plugins (preprocessor & browserify)
cypress.config.js/e2e -> update "specPattern" to run feature files	('cypress/integration/examples/BDD/*.feature')
cucumber (gherkin) full support -> install plugin to get gherkin syntax highlighted

Cypress BDD Cucumber Syntax
cucumber (gherkin) full support -> install plugin to get gherkin syntax highlighted
.feature -> extension of feature files

Example

Feature: End to End Ecommerce validation
	App Regression
	# Comment
	@Smoke	(tag)
	Scenario: Filling the form shop
	Given I open eCommerce page
	When I fill the form details
	| name | gender |	(data driven testing using cucumber data table)
	| Boby  | Male 	   |
	Then Validate the form behaviour
	And Select the Shop page -> And is now deprecated!!!! 
							  change it in relation of which family (When or Then) belongs to
 
Note: Every step need to be defined/implemented into Step Definition files built with real cypress code (.js file)!

import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor" -> import into every Step definition 																		      file!

Cypress BDD Cucumber Html Report

messages -> json file -> html	(conversion from messages via json file to html at the end)

 define JSON report with properties inside "package.json":
"cypress-cucumber-preprocessor":	{
	"json":	{
		"enabled": true,
		"output": "cypress/cucumberReports/results.json" 	(define the path for generated json results)
	}
}

cucumber-json-formatter -> download from https://github.com/cucumber/json-formatter/releases/tag/v19.0.0 , rename it 						 properly and paste it directly into project directory

npm install multiple-cucumber-html-reporter -> install html reporter plugin
cucumber-html-report.js -> add meta-data from https://www.npmjs.com/package/multiple-cucumber-html-reporter 
					       to the newly defined script inside project directory to generate html reports

jsonDir: "./cypress/cucumberReports",	(two most important parameters that need to be defined)
reportPath: "./cypress/cucumberReports/cucumber-html-report.html"

node cucumber-html-report.js -> execute the js file to generate html report of previous test run

*******************************************************************************************

Cypress SQL server with Azure

npm install --save-dev cypress-sql-server -> install SQL server


Set cypress.config.js

Import SQL server:
const sqlServer = require('cypress-sql-server');

Register sql server (load plugins) inside 'setupNodeEvents' by adding:

tasks = sqlServer.loadDBPlugin(config.db);
	on('task'. tasks);

Define 'db' variable -> nested as first inside 'setupNodeEvents':

Example

config.db = {
	userName: "alexdb",
	password: "Testing!24",
	server: "alexdbdemo.database.windows.net",
	options: {
		database: "alexacademy",
		encrypt: true,
		rowCollectionOnRequestCompletion: true
	}
}
All data are from Azure db set - https://portal.azure.com/#@cjovanovic83hotmail.onmicrosoft.com/resource/subscriptions/bcf5fd12-c525-493d-95ae-b1e5c679a5cd/resourceGroups/db/providers/Microsoft.Sql/servers/alexdbdemo/databases/alexacademy/queryEditor 

Set support/e2e.js

Loading DB commands:

import sqlServer from 'cypress-sql-server';
sqlServer.loadDBCommands();


For more info refer to the https://www.npmjs.com/package/cypress-sql-server 

*******************************************************************************************

JavaScript Variables
var & let -> create variables that can be reassigned another value -> can be reused again!
const -> creates 'constant' variables that cannot be reassigned another value -> cannot be reused again!
Try not to use 'var' anymore - use 'let' instead




