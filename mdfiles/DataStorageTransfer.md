# Data Storage & Data Transfer Between Pages

To use store as long as the application run, use the store structure kept in the application context. You can use the Cookie structure for data that you want to access even when the application is closed.

## Store Data in Context
Store data in application context. This storage will be destroyed after application is closed. This context can be used for transfering data between pages. 

`&` : SharedStoreContext keeps data share between multiple tabs. \
`$` : GlobalStoreContext keeps global during current tab. \
`#` : BagStoreContext keeps during current operation. Data is cleared when new process is selected from the menu.\
`default` :PageStoreContext keeps data on page. Data is cleared when new page rendered. Can't be used between different pages.  Store name must be given without prefix.

- PageStoreContext Exp:
```js
quick.store.set('personalInfo', storeData) 
```

### SET 

> quick.store.set(name: string, value: any)
> > ```js
> > const storeData = {
> > 	name: "testName",
> > 	surname: "testSurname"
> > };
> > quick.store.set('$personalInfo', storeData)
> > ```

### GET 

> quick.store.get(name: string)
> > ```js
> > quick.store.get('$personalInfo').name
> > ```

### DELETE 

> quick.store.delete(name: string)
> > ```js
> > quick.store.delete('&personalInfo')
> > quick.store.delete('$personalInfo')
> > quick.store.delete('#personalInfo')
> > ```

<a href="" onclick="this.href='?q=qjsons/DataExamples.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>Data Storage Examples</a>


## Cookie Management 
With cookie manager, you can get and set operations for cookies.
### SET

> quick.cookie.set(key: string, {value: string, expire: string})
> > ```js
> > quick.cookie.set('test', { value : 'testValue', expire : '2022-11-01T20:09:39.780Z'})
> > ```

### GET

> quick.cookie.get(key: string)
> > ```js
> > quick.cookie.get('test')
> > ```

### GETALL

> quick.cookie.getAll()
> > ```js
> > quick.cookie.getAll()
> > ```

### DELETE

> quick.cookie.delete(key: string)
> > ```js
> > quick.cookie.delete('test')
> > ```

<a href="" onclick="this.href='?q=qjsons/CookieExamples.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>Cookie Examples</a>
