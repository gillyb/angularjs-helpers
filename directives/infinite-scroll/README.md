Infinite Scroll
==

Directive that will help you create pages with an infinite scroll effect. 
It detects that the user reached the end of the page, and can trigger a method you want, with passing it the current page we're on.

<br/>
Sample usage :  

index.html
```javascript
// methodNameToTrigger - the method we want to trigger when the user reaches the bottom
//                       This method will receive the currentPage number, which starts at 1.
// threshold - Distance from bottom needed to trigger the method
// trigger-delay - The delay between each possible trigger. This should help performance by taking some
//                 load of the client browser, and not checking on each scrolled pixel.
<infinite-scroll trigger="methodNameToTrigger" threshold="200" trigger-delay="100"></infinite-scroll>
```
