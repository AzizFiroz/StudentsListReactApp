

Made by Aziz Firoz Mithaiwala



===========================================
This is a Simple CRUD application to Manage a Student Data application 
Create a Student Detail
Read a Student Details 
Update a Student Details
Delete a Student Details

----------------------------------------------------------------------------------
To Start the applicaiton open cmd in student folder and run following command

{npm run start:app}

which starts the application and the fake json server concurrent (see script)
which has all the user data and is run on port 3002
routed to /students/

Prerequisite : 
run "npm install" to install all the depencies in the package.json express,mongoose etc
Make sure mongodb is downloaded on your machine and a collection of students is created
-------------------------------------------------------------------------------
NAVBAR

this application contains 4 options in the navbar menu
which is responsive in a way that if view through mobile
or width of the browser is shrinked then the navbar menu can shown 
using the hamburger menu on the top right corner which only 
appears in the shrinked screen

The options are : 

1. Home Page

    To Add remove View a Student Data which additional Buttons

2. About

    This page is about me

3. Contact US 

    This page has a form which can filled if a user have some freedback
    for operators

----------------------------------------------------------------------------
Home Page:

This page has all functionalities of adding removing and viewing a student
it shows all the student in a table

it is implelemented by first creating a mongodb Collection Students"
which has stores some student details
and a server is created by using server.js and Student.js in the "Backend" folder



which allows the server to be ran on some port 

then by using add Student button 
the user is nagvigated to /student/edit page which shows a form which user can submit to
add user to the json file which gets rendered in the Home Page usingList Rendering

----------------------------------------------------------------------------------------
There is also a functionality of dynamic routing in a user can be view by going to the page: 
/student/id:

--------------------------------------------------------------------------------------------
View Page:

Which allows a user to see the details of the student whose rows view button is clicked
This is done by sending the id of the student to the backend where using the id the student 
is found in mongodb collection Student

----------------------------------------------------------------------------------------------
Edit User Page:
This page allows a user to edit student details:
First the data is retreived from the mongodb by pasing the student _id in the API params
then user edit any field and click update then the data is sent back to mongodb by using patch method of axios

--------------------------------------------------------------------------------------------------
Contact US:
For sending any feedback
----------------------------------------------------------------------------------------------
AboutUs: 
Bio data
-------------------------------------------------------------------------------------------
Backend Folder: Middle Ware

Student.js: This file is used to create model/Schema of the required mongodb database

Routes.js: This File contains all the routes for access of data from the mongodb database

Server.js: This is the middleware file to connect Mongodb with FrontEnd and to start the server on port 5000
