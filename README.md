# Custom Datepicker using Jquery.
A webpage showing how you can select dates from calenders and use it to manupulate behaviour of other elements on your webpage like price, etc..

The tab containing the datepicker is made with html and styled with css.
The datepicker widget (the calender) is created using jquery ui.

To import the widget, 
First link your html page to jquery-ui file, you can download and host the file locally, or you can link it directly to the api documentation using this: <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script> 
(PS: check jqueryui.com for the latest version)

Then link your html page to your javascript file, this is the function that tells the datepicker where to stay on the page and manipulates the datepicker behaviour. Because it is a jquery widget, the syntax of the datepicker function should be written in jquery (a javascript library), however vanilla javascript can also be written in same file.

Your datepicker can have various functionalities, it can be in-line, a date range, animated, etc...
In this case, I have created two different datepickers that show the beginning and end of a hotel stay. I have also used an additional jquery-ui functionality called min-date to restrict the dates that can be selected. The second date always has its minimum date to be on any date after the first date is selected.

To create custom styling, use 'ui-datepicker' in the css file, this automatically adds styling to the different datepickers on the page.
