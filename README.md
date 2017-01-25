# Atom Theme Viewer
<h2>Better way to View Atom Themes</h2>



Allows for a better way to sort Atom Themes by Downloads and other criteria along with an image along side of the theme name 

Currently the code creates a list of all the themes currently on the Atom Themes Website. Then it goes to each theme page and pulls 
valuable data such as downloads, author, and even image urls. After it has this data it then does an insert into a MongoDB database.



ToDo:
Create Web Interface to display the data, currently have a way to paginate the data. Just need to setup a handlebars view to display the data.
