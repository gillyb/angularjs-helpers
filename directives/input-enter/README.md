This directive allows you to attach a js function to be invoked when the user hits 'enter' on the keyboard,
while a specific input is in focus.
<br/><br/>
This is perfect for forms, although if your form contains many inputs, then you better off catching the 'enter'
key event in a more global scope, than attaching this directive to each input in the form.
<br/><br/>
Example :<br/>
```html
<input type="text" enter-key="doSomething()" />
```
