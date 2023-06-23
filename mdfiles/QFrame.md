An inline frame is used to embed another document within the current HTML document.

### Props

| Props Name   | Type                | Description                                                  |
| ------------ | ------------------- | ------------------------------------------------------------ |
| url       | `String`            | Specifies the address of the document to embed in the QFrame. |
| width | `String`    | Specifies the width. |
| height  | `String` | Specifies the height. |
| border | `Number` | Specifies the frame thickness. |
| isLoading | `Boolean`           | Lowers the opacity of the page. |

### Methods

| Methods Name | Description                                                  | Example Code                                                 |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Send         | Provide a safe means of communication between documents on different domains. | `components.EdtrComp_1.Send("message")`                      |
| post         | Sends parameter to QFrame with HTTP POST request.            | `components.EdtrComp_1.post("https://...",{username: 'username', password: '123456'})` |

### Events

| Events Name | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| onMessage   | When a message is sent, a message event is fired on the destination window. |
| onLoad      | Triggered when the page loads.                               |

#### post

Sends parameter to QFrame with HTTP POST request.

**parameters:**

- **url:** Required. Specifies where to send the form-data when a form is submitted.
- **params:** Required. Parameters to be sent are entered.
- **enctype:** Not required. Specifies how the form-data should be encoded when submitting it to the server. 
  Values:  *application/x-www-form-urlencoded, multipart/form-data, text/plain*

### QJson Samples

<a href="" onclick="this.href='?q=qjsons/QFrameExample.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>QFrameExample</a>

