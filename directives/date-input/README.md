<br/>
Allows binding to an input with a unix timestamp, but displays a user friendly date.<br/>
<br/>
If your model looks like this :
```javascript
var model = {
    date: 1435849068097  // this should be a valid unix timestamp - this is just for example
};
```
<br/>
And your html form looks like this :
```html
<input type="text" ng-model="model.date" input-date/>
```
<br/>
Then the text box will display the date in this format : 'dd/mm/yyyy'<br/>
No, this is not configurable, but if you want to change it, then just look at the code, it's really easy to understand!.
