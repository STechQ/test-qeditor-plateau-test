This component can be used as a sub component in a page and can be customizable by page desires.

## Usage of the Component
To use custom component ın the pages, following steps can be proceed:
*  Make a new page with Quick Editor
*  Add a Messaging Component to the start of the page
*  Save this file under your micro service ui folder --> static/pjson/yourPageName.js or any folder path that serves the qjson files
*  If it is necessary, export it in index.js file with same path exported file.
 Ex.: `export {default as ngspTabTest2} from "./ngspTabTest2.js"`;
*  In a new created page, add Custom Component from the component list
*  Set QJsonPath property with the exported file path that below given path.


## Add Custom Component
In editor, add a CustomComponent from left component menu and set QJsonPath property with your exported file.
`customCompQId.QJsonPath='customer/customCompPage'` \
**Note** :*If customCompPage component has emitted events, then this has to be added on customCompPage.*

## Custom Component Properties
In custom page' s Messaging Component, set externalProps property to string array which they will be setted from parent page.
```js
customCompMessaging.externalProps=['prop1', 'prop2']
```
These props can be used like: `parent.props.prop1` and `parent.props.prop2` in anywhere of sub page. \
**The texts of the buttons on the first line are setted with the values ​​determined on the parent page.**

## Custom Component Events
In custom page' s Messaging Component, set externalEvents property to object array.
```js
customCompMessaging.externalEvents=[{name='eventName', params=['param1', 'param2']}]
```
Events can be called anywhere in sub page like: 'parent.events.eventName({param1=value})' \
In CustomComponent's events section, *eventName* can be setted as page needs. \
**Ex.:** *By clicking the first button on the 3rd line, the event on the parent page is triggered.*

## Call Custom Method In Sub Component
In custom page' s Messaging Component, add custom events on it with setting *External Visibile* option. Then these events can be called from parent page or CustomComponent' s **onLoad** event. \

**Ex.:** *SubPageCustomEvent1 method is called in the onLoad event running immediately after CustomComponent rendering on the sample page. SubPageCustomEvent2 event runs on the click event of the button named 'Change 2.row 2.Col Button Text' on the parent page. This event changes the value of a component in the sub page.*


# Typescript
## Creating CustomComponent
### Defining CustomComponent Properties
For instance if you have **2 properties** named **prop1** and **prop2**, you should set **externalProperties** Prop in **Messaging** component. \
`['prop1', 'prop2']` ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/customComponent/props.png) \
Now you can use this properties inside your **TS events** like:
```ts
const prop1 = quick.parent.props?.prop1;
const prop2 = quick.parent.props?.prop2;
```
Or as a **QS prop** of a component like:\
`parent.props.prop1` ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/customComponent/qsProps.png)


### Defining CustomComponent Events
For instance if you have 1 event named **event1** with 2 parameters named **p1** and **p2**, you should set **externalEvents Prop** in **Messaging** component. \
`[{name='event1', params=['p1', 'p2']}]` ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/customComponent/externalEventsProps.png)

Now you can use this events inside your **TS events** like: `quick.parent.events?.event1({p1: 'alper', p2: 'nilay'});`

### Defining CustomComponent Methods (aka. ExternalVisible Events)
For instance if you have 1 method named **eventic** with 1 parameter named **p1**, you should add a **custom event in Messaging component** with **ExternalVisible** flag. And inside the event you should declare your parameter p1 before using. \

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/customComponent/externalVisible.png" width="500px" height="auto">

```ts
declare var p1: string;
quick.EM.trace('event ic trigger');
quick.EM.trace(p1)
```

## Using CustomComponent (Inside a parent page)
Now in parent page add a CustomComponent and set its property **QJsonPath**. Now your child custom component should be visible with defined Props and Events.
### Setting CustomComponent Properties
You can see CustomComponents properties in **Sub Props** section inside **Props tab** and you can set them.\

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/customComponent/subProps.png)
### Setting CustomComponent Events
You can see CustomComponents events in **Events tab** and you can set them. You can use parameters **p1** and **p2** inside the event. \

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/customComponent/eventsTab.png)

```ts
quick.EM.trace('customdis event trigger')
quick.EM.trace(p1)
quick.EM.trace(p2)
```
### Calling CustomComponent Methods (aka. ExternalVisible Events)
Custom components methods are visible and callable.

`(<any>components.EdtrComp_1.eventic)({p1: 'sadasd'});` \

Note: For TS, CustomComp Methods parameters are insaccessable, so **for now** you should make a casting to `<any>` if you have parameters for TS like above.


# Sample Pages

<a href="" onclick="this.href='?q=qjsons/parentPage.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>parentPage.js</a>

<a href="" onclick="this.href='?q=qjsons/subPage.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>subPage.js</a>

<a href="" onclick="this.href='?q=qjsons/fileUploadServiceCallCC.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>fileUploadServiceCallCC.qjson</a>

<a href="" onclick="this.href='?q=qjsons/serviceCallerCustomComponent.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>serviceCallerCustomComponent.qjson</a>

<a href="" onclick="this.href='?q=qjsons/fileUploadCustomComponent.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>fileUploadCustomComponent.qjson</a>