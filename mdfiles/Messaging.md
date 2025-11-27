# Page Life Cycle Management & Usage of Messaging Component

Life cycle of Quick pages are managed by **Messaging** component. It has different events on it and the cycle of the page can be controlled by these events. 

Messaging component is also used to **create custom events** on the page that can be called directly from **every where in the page**(sub pages can not call these event directly, *see Custom Component document*). These events also can be triggered with after delayed time(*see MM.delay*).  

This component controls the sub page between the parent page. Details of this system can be seen in the Custom Component document.

`(!) Messaging component has to be located at the top of page.`

## Render Hooks
The following events are used by adding the Messaging component to the page for the operations that need to be done without rendering the page and after the rendering is completed. \
`PreRender` : First event to fire before the page rendering begins. (First triggered event of page) \
`EndRender` : First event to fire after the page rendering ends. \
`PostRender` : Some components may have events that are prioritized and they will be executed after render. This evet is triggered after all those events are executed. \
`Restored` : Event that will be triggered after going back to current page. \
`onPostRender` **in pipeline.qjson** : After all custom components and sub pages are rendered, this event is triggered in the **pipeline.qjson** page(see the pipeline.qjson doc) \ 
`onPageClose` **in pipeline.qjson** : When the client tries to close browser tab or the browser itself, a dialog will be prompted by the browser default message if this event is created on the Messaging. If the user cancels close, this method will be triggered.


## Trigger Custom Event On Messaging

- If a custom event wanted to be called, this event should be added to the messaging component. Custom events that have been added to a component beside messaging, can not be triggered from itself or outside. 

- When two or more components want to call same method, it should be added as a custom event to the Messaging component. Then it can be called from other components. Example QJson: 

> quick.MM.trigger(eventName: string, params?: Array<any>)

- Using parameters in custom; 

1.  Add a custom event to the Messaging component(ex.: customE)
2.  Write the handler code inside the custom event(ex.: EM.trace(param))
3.  Trigger this custom event from outside(ex.: in button click event --> quick.MM.trigger("customEvent", [{param='myString'}])
4.  In the custom event, declare parameters at the beginning of the event. Then parameters now can be used in the custom event.


## Trigger An Event With Delay
On Messaging component, it may needed to call a method with delay after Javascript code has executed. *parameters.delayTime* in milliseconds (thousandths of a second), the timer should wait before the specified function is executed.

> quick.MM.delay(eventName, {parameters})

## Return Value from Custom Method
Custom methods on Messaging component can return a value. \
myCustomEvent:
> >```js
> > let a=5
> > let b=6
> >quick.return(a+b)
> >//Will return 11 
> >```

an event can trigger the below code
> > ```js
> >let customReturn = quick.MM.trigger("myCustomEvent")
> >quick.EM.trace(customReturn)
> >//11
> >```