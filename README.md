# order-management

A) Create the folder and unzip the code.
B) Go to current create folder through terminal and run the command npm install(Insure node.js installed in the system).
C) Check for any error in the terminal,if any package is missing or unable to install.
D) When everything is successful , try to run "npm run start".
E) Have to run the mongodb and create a DB name “inventory”. Sample db json is attached.
E)  Open your postman and type : http://localhost:3000/orders
F) On the same address, change the method to POST, click body and select “x-www-form-urlencoded”.
            Then, enter name as the key and the corresponding task name as value.
            
G) Now, change the method to PUT and putting the url as http://locahost:3000/orders/{someid} to update the order.
H) Change the method name to DELETE and with some orderID to delete the order from db.           
I) To run the Unit test cases using command "mocha test". You will able to see all the test cases are passed.(GET, POST, PUT, DELETE).
