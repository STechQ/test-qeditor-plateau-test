# QTimer

QTimer is a component has a setInterval event. That event calls Window setInterval and clearInterval methods to star or stop functions which are called periodically by its timer interval (in milliseconds) property.

QTimer has 3 methods to call setInterval and clearInterval methods.

1. timer.start() method calls a function or evaluates an expression at specified intervals (in milliseconds). The start() method will continue calling the function until stop() is called, or the window is closed.
2. timer.stop() method clears a timer set with the start() method.
3. timer.reStart method calls timer.stop() and timer.start() respectively.

## Props

QTimer has 3 properties.
1. time: The intervals (in milliseconds) on how often to execute the code. Its type is number.
2. autostart: Decides to start automatically QTimer' setInterval event. Its type is boolean.
3. status: Controls whether QTimer setInterval started or stopped. Its type is boolean.

## Events

QTimer starts by setInterval event
1. setInterval: Calls a function or evaluates an expression at specified intervals (in milliseconds).
The setInterval method will continue calling the function until stop() is called, or the window is closed


> > ```ts
> > total = total +1
> > quick.EM.trace('Test Me')`**
> > ```

Example usage of start, stop, restart, status methods:
Example file: <a href="" onclick="this.href='?q=qjsons/qtimer.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>qtimer</a>