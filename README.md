# Project Title
Bank of Flatiron records
​
# Description
This is a react application that displays the current records that have been accrued in the bank of Flatiron
​
# Getting Started
To view this records, you need to install json server and have NPM installed.
​
The link is deployed in
http://bankofflatiron.vercel.app
​
​
To run the code locally
 npm install -g json-server
Running the tests
​
Begin by running this command on a different terminal, in the same folder to get the backend started: 
​
json-server --watch db.json
​
Test your server by visiting this route in the browser: http://localhost:3000/transactions
​
Next run the following command in another terminal, in the same folder
        npm start 
The terminal may prompt you to start the application on  a different port. Hit Y to accept
This will start the react application
​
## Core Deliverables
​
As a user, I should be able to:
​
- See a table of the transactions.
- Fill out and submit the form to add a new transaction. This should add the new
  transaction to the table **as well as post the new transaction to the backend
  API for persistence**.
- Filter transactions by typing into the search bar. Only transactions with a
  description matching the search term should be shown in the transactions
  table.
​
​

# Authors
Ian Irungu.
​
# License
ISC