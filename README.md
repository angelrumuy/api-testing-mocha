# api-testing-mocha
Require tools to be installed:
+ Node JS
+ VS Code

1. make new project, open in vscode
2. open vscode terminal
3. npm init 
   project initialisation

Install dependencies
4. npm install mocha@10.2.0 --save-dev
   install mocha framework
5. npm install chai@4.3.7 --save-dev
   install chai (library buat assertion)
6. npm install chai-http@4.4.0 --save-dev
   instal chai-http (operasi http, hit api)
7. npm install mochawesome  --save-dev 
   npm install mochawesome-report-generator --save-dev
   to generate test report (html file)

Follow the following step to run this automation on your local machine:
1. clone the project
2. open terminal
3. run this command "npm install"
4. "npm run login" to run the test
5. "npm run testreport" to run the test and generate report
