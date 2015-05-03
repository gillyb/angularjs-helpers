
This is a lightweight angularjs directive to create a dropdown.

This is how it's done :
 * Create a container with the attribute 'dropdown-trigger'
 * Inside that container add a container with the class 'dropdown'. This is the dropdown that will be displayed when the user clicks on the outer container.
 
It's as easy as that. :)


Example :
```html
<!-- ...some html... -->

<div class="dropdown-button" dropdown-trigger>
  <button value="click">
  <div class="dropdown">
    <div class="item">Option 1</div>
    <div class="item">Option 2</div>
  </div>
</div>

<!-- ...more html... -->
```
