Tooltip Directive  
==  

This is a simple directive to create a cool tooltip.  
As usual, each sample I found on the internet was much more bloated than this.  
  
  
Sample usage :  
```html
<my-tooltip text="This is just a tooltip" position="top">
  <span>some trigger for the tooltip</span>
</my-tooltip>
```


Some features I need to add:  
* Add 'right'/'left' to position in tooltip (Currently only supports 'top', and the default is bottom)  
* Add html or maybe basic markdown to the tooltip (not really sure I want this)
