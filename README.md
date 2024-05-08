# Day 16-GUVI

> **Callback Hell**

> [Source Code](./index.html)  
> Explanation:
>
> - The [index.html](./index.html) file is where the skeleton of the webpage is coded.
> - A [_styles.css_](./css/styles.css) file is added in a folder named [css](./css/) for better readability. This file contains the custom css added to the web page.
> - The font size and alignment of the text content is styled using css.
> - An external JavaScript file is added to the web page by using the _script_ tag [js](./js/script.js)
> - A _setTimeout()_ function is used to implement a callback hell.
> - A callback function is a function that is passed as a parameter to a method or a function.
> - The _setTimeout()_ function receives an _arrow function_ as a callback which changes the text content of the root element using _document.getElementById()_ and a number value which represents _time in milliseconds(ms)_ .
> - We nest setTimeout() functions within one another to implement a callback hell.
> - It executes sequentially starting from the outer most callback to the innermost callback.
> - First, the setTimeout() function is added to the **call stack** which passes it to the **Web API**.
> - The **Web API** transfers the callback to the **callback queue**, where it waits for the timer to end and then the **event loop** sends it back to the **call stack** for the callback function to be executed.
> - Open the index.html file to view the output on your screen.

---
