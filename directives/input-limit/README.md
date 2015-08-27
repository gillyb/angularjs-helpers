This directive limits the input the user can enter in a textbox.  
The difference between this and using angular's `ng-maxlength` is that this directive actually doesn't allow the user to enter more text than the defined limit.
<br/><br/>
Example usage :  
```html
<input type="text" id="myInput" input-limit="40"/>
```
