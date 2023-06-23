**Definition**

QIdleTimer is a component for detecting idle Time of the user for given miliseconds in idleTime property.

QIdleTimer has 2 methods to call, start and clearTimer.

1. QIdleTimer.start() method creates a timer Instance. 
2. QIdleTimer.clearTimer() method clears the timer Instance.

**Props**

QIdleTimer has 3 properties.
1. detectMouseMove: detect as activity any mouse movements. (boolean)
2. detectKeyPress: detect as activity any keypress. (boolean)
3. idleTime: IdleTime of the user in miliseconds. (number)

**Events**

1. TimeOut: event triggered on user's idle Time for specified milliseconds in the idleTime property.


Example usage of component:

<a href="" onclick="this.href='?q=qjsons/QIdleTimer.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>QIdleTimer example usage</a>