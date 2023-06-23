# Send a Request 

To send a request in Quick, you must create an object like the one below. You can make a request by giving this object as a parameter to the Request.async method, provided that it is in the same scope at any time in the page.

`url` (string) : Request adress \
`http` (string) : Get, Post, Put, Patch, Multipart, Delete, Postblob (non-case sensitive) \
`responseField` (string) : Keeps the name of the field where you can use successful responses from the request. You can access the response with the name you give to this field after the **response** keyword. Such as **response.{{fieldName}}** \
`data` (any) : Body of the request. \
`onSuccess` (string) : Event name to be triggered after successful response from the request.  This event has to be created as a **custom event** with the same name on the **requested component.** \
`onFail` (string) : Event name to be triggered fail response from the request. This event has to be created as a **custom event** with the same name on the **requested component.** \
`blockRender` (boolean) : Value that blocks the rendering operation while waiting the service response. Provides sync operation with request while rendering. Default value is **false**. \
`showErrorMessage` (boolean) (optional) : Shows error message when the request failed. Default value is **false**. \
`args` (any) (optional) : Event arguments of onSuccess event that when the successful request returned. \
`headers` (key-string) (optional) : Request headers with key-value pairs. \
`disableLoading` (boolean) (optional) : Decide to show the loading screen during the request. Default value is **false**. \
`withCredentials` (boolean) (optional) : Send credentials (cookies) in a cross-origin request. False to ignore for request and ignore cookies in its response. Default value is **false**. \

> *quick.Request.async(requestObject: IRequest)*


## Request Samples

### Get Request
> > ```js
> > const req: IRequest = {
> >   url: "https://httpbin.org/get", 
> >   data: null, 
> >   blockRender: false, 
> >   http: "get",
> >   onFail: null, 
> >   onSuccess: null,
> >   responseField: "respo"
> > };
> > 
> > quick.Request.async(req);
> > ```

### Post Request

Input parameters must be set to `data` field of object which is given to Request.async function.

> 
> ```ts
> const reqData = {
>   oldPassword: "newPassword",
>   newPassword: "oldPassword"
> };
>
>const reqHeaders = {
>  accept: "application/json"
>};
>
> const req: IRequest = {
>   url: "https://httpbin.org/post", 
>   data: reqData, 
>   headers: {accept: "application/json"},
>   blockRender: false, 
>   http: "post",
>   onFail: null, 
>   onSuccess: null,
>   responseField: "respo"
> };
> 
> quick.Request.async(req);
> ```

### Instructions

    1. Create an object with **IRequest** type.
    2. Give this object as a parameter to **quick.Request.async** method
    3. **Create custom events** for successful and fail returns. Successful event must be named with the above IRequest object's **onSuccess** field and fail event must be named with the same object's **onFail** field string.
    4. In order to reach the successful response fields, it can be used anywhere in the page (except sub pages) in the form of **response.{{responseField}}** with the value given to the responseField in IRequest object.
    5. To handle failed response, see the 3. instruction and create onFail event if you haven' t already.When the event is created, declare **error** variable beginning of the event and failed response can be reached by this **error** keyword **only** in this event. error argument has full response, error stack and request object(IRequest) fields on it.

Example Usage: <a href="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/EditorUsage/RequestExamples.qjson" target="_blank">Request Examples</a>


### TS request with inline respone examples:
> ```js
> const req: IRequest = {
>     url: "https://httpbin.org/get", data: null, blockRender: false, http: "get",
>     onFail: null, onSuccess: null,
>     responseField: "respo"
> };
> ```
> * async lambda func request:
> >```js
> >  (async () => {
> >     try {
> >         const resp = await quick.Request.async(req)
> >         quick.EM.trace('async lambda');
> >         quick.EM.trace(resp);
> >     } catch (ex) {
> > 
> >     }
> > })()
> >```
>  * async func request:
> >```js
> > async function makeRequest() {
> >     try {
> >         const resp = await quick.Request.async(req)
> >         quick.EM.trace('async func');
> >         quick.EM.trace(resp);
> >     } catch (ex) {
> > 
> >     }
> > }
> > 
> > makeRequest()
> >```
>  * promise request:
> >```js
> > quick.Request.async(req).then(resp => {
> >     quick.EM.trace('promise then');
> >     quick.EM.trace(resp.data);
> > }).catch(ex => { });
> >```

### Download Request 
The below request can be used to download files.

> 
> ```js
> const req: IRequest = {
>     url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
>     data: null, 
>     blockRender: false, 
>     http: "get",
>     onFail: null, 
>     onSuccess: null,
>     responseField: "respo"
> };
> 
> quick.Request.download(req);
> ```

<a href="" onclick="this.href='?q=qjsons/RequestExamples.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>Request Examples</a>