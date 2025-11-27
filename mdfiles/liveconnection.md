# LiveConnection
## Props
`url` : String \
Connection destination url  \
`secure` : Boolean (nullable)  \
Destination url secure prefix. When you don't set url with ws/wss scheme, gets secure info from this prop value. Set true for using URL scheme wss:// or false for using insecure ws://.  \
`message` : Object | String (nullable)  \
String or Json data to be transmitted.  \
`urlParams` : String (nullable)   \
Values of url parameters.  \
`autoConnect` : Boolean (default:false)   \
Connection opens automatically while rendering.  \
`reconnect` : Boolean (default:false)   \
LiveConnection will try to reconnect until connect successfully , when connection gets error.   \
`reconnectInterval` : Number (default:60)   \
LiveConnection will try to reconnect after this interval(seconds) until connect successfully, when connection gets error.  \
`reconnectBackOff` : Boolean (default:false)    \
Increasing reconnect interval for better browser performance. \

Detail Info:  \
First 7 fibonacci numbers are used to calculate interval as ratio. After 7 reconnect try, reconnectInterval continue with last calculated number.
```sh
# Exp:  
# When reconnectInterval set 7;
      calculated reconnect intervals:  1  -  3  -  4  -  7  -  11  -  18  -  30 -  30 - 30  ... until connect successfully

# When reconnectInterval set 30;
      calculated reconnect intervals:  6  -  12  -  18  -  30  - 48  -  78 -  126 -  126 - 126 ... until connect successfully
```

## Events
#### onConnect
Fired when a connection with a WebSocket is opened
#### onMessage
Fired when a message is received from the server. Message parameter returns json object.
> onMessage (message: Object)
#### onError
Fired when a connection with a WebSocket has been closed because of an error.
> onError (message?: Object | string,  urlParams?:Object)

`error` :(object) Returns websocket error object \
`errorCount` :(number) Returns count of errors 


## Methods
#### Send
Opens connection if closed and enqueues data to be transmitted. 
> Send (message?: Object | string,  urlParams?:Object)
> >```js
> >// LiveConnection component ID: connectionComp #
> >// (Using Eg1) Set component parametres before Send method
> >connectionComp.urlParams = {'connectionToken'='123456'}
> >connectionComp.message = {'operation' = 'MarketDataBroadcast',"payload":{"userName":"TEST","password":"TEST"}}
> >connectionComp.Send()
> >
> >// (Using Eg2) Use Send function with message and urlParams parametres. 
> >connectionComp.Send({'operation' = 'MarketDataBroadcast',"payload":{"userName":"TEST","password":"TEST"}}, {'connectionToken'='123456'})
> >
> >// (Using Eg3) Set initial static message and urlParams for future Send on component settings prop window.   
> >connectionComp.Send()
> >```

### Close
Closes the connection. 
( Component closes all connections automatically when leaving from page. You can call close method if need to close connection a specific event triggered. )
> Close ()
> > ```js
> >// LiveConnection component ID: connectionComp #
> >connectionComp.Close()
> >```


## LiveConnection with Devexpress DataGrid
<a href="" onclick="this.href='?q=qjsons/DxDataGridArrStoreLiveConReason.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>DxDataGridArrStoreLiveConReason</a>

<a href="" onclick="this.href='?q=qjsons/DxTreeListArrStoreLiveCon.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>DxTreeListArrStoreLiveCon</a>
