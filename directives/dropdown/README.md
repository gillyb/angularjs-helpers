
This is a lightweight angularjs directive to create a dropdown.

This is how it's done :
 * Create a container with the attribute 'sleek-select'
 * Inside that container add a container with the class 'dropdown'. This is the dropdown that will be displayed when the user clicks on the outer container.
 
This 'select' control lets you create the html for the options, so that you have full flexibility over the outcome.

It's as easy as that. :)


Example :
```html
<!-- ...some html... -->

<div class="my-select" sleek-select ng-model="selectValue">
  <div class="selected-value">
    <span ng-bind-template="{{selectedValue}}"></span>
  </div>
  <div class="dropdown" ng-hide="!visible">
    <div class="item option" ng-click="doSomething()">Option 1</div>
    <div class="item option" ng-click="doSomething()">Option 2</div>
  </div>
</div>

<!-- ...more html... -->
```
