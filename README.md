# api-testing-mocha
Require tools to be installed:
+ Node JS
+ VS Code

1. make new project, open in vscode
2. open vscode terminal
3. npm init 
   project initialisation

Install dependencies
+ npm install mocha@10.2.0 --save-dev (install mocha framework)
+ npm install chai@4.3.7 --save-dev (install chai for assertion)
+ npm install chai-http@4.4.0 --save-dev (instal chai-http for operasi http, hit api)
+ npm install mochawesome  --save-dev
+ npm install mochawesome-report-generator --save-dev  (to generate test report)

Follow the following step to run this automation on your local machine:
1. clone the project
2. open terminal
3. run this command "npm install"
4. "npm run login" to run the test
5. "npm run testreport" to run the test and generate report
