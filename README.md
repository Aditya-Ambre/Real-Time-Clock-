# Real Time Clock

This is a simple project which tells us about the current Time and Date.

**Main Features :-**

- Displays the Time(hh-mm-ss) and Date(dd/mm/yyyy)
- Has a toggle function between Dark and Light theme

**Technology Stack:-**

- HTML
- CSS
- JavaScript

**_How Does it work ?_**

1. Time Functionality

   - We use built in methods like **_getHours(), getSeconds()_** to fetch the correct data.
   - Then we convert this data into string using **_toLocaleDateString()_**
   - Using the search for HTML Element by its ID and replace the document with Date & Time data that we have computated.
   - Using **_SetInterval()_** we update the data every 1000ms.
   - ```
     myDate = new Date();

     myTime =  myDate.getHours() + " : " +
               myDate.getMinutes() +
               " : " +   myDate.getSeconds();
     date = myDate.toLocaleDateString();

     document.getElementById("date").innerHTML = date;

     document.getElementById("time").innerHTML = myTime;

     ```

2. Dark Theme Toggle
   - We take click as an input from a checkbox.
   - Based on the clicks we toggle between _Light_ and _Dark theme_.

<br>
