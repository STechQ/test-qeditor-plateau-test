# QDocumentViewer

### 1. Supported File Types
QDocumentViewer component has ability to preview **img**, **pdf** and **html** files.

### 2. Sample Usages
It is easy to use QDocumentViewer since it just needs a **src**(must) and an **height**(default 50px) prop.
After droping the component to a component, it can be used as given samples below:
##### 2.1. PDF
To preview a PDF file, ```src``` prop can be defined as a byte64 code or a pdf path
* Byte64 
```js 
src='data:application/pdf;base64,JVBERi0xLjMNCiXi48/TDQoNCjEgMCBvYmoNCjw8DQovVHlwZSAvQ2F0YWxvZw0KL0...'
```
* Path
```js 
src='https://example.com/sample.pdf'
``` 

##### 2.2. HTML
To preview a HTML file, ```src``` prop can be defined as a raw html code or a full path of an HTML page.
* Path (should end with .html or .htm)
```js 
src='https://example.com/sample.html'
``` 

##### 2.3. IMG
QDocumentViewer supports the image types listed below;
'jpeg', 'jpg', 'gif', 'png', 'apng', 'svg', 'bmp', 'ico'


### 3. Options and Events

| Props        |   Values               |                  Description                   		            | Type    |
| ------------ | :--------------------: | :-----------------------------------------------------------: | ------- |
| src          | 'http:...', 'data:..' 	| The source value for document. May be path or binary.         | string  |
| height       | '50px', '100%'         | The height of the component (set %100 for fill the parent component size)  | string  |


### 4. Sample Pages

<a href="" onclick="this.href='?q=qjsons/QDocumentViewer.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>QDocumentViewer-pdf-as-byte.js</a>