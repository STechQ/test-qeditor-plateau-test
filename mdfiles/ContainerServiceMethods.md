## What is Container Services ?

- Running the screens that created with the quick editor in the existing application shell (other than qui) is provided by integrating websdk into the shell. You can contact the plateu team for the new Websdk integration. [Websdk entegration link](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QU-PlateauUIEntegrasyonu.pdf)

- ContainerServices.js is a file that belongs to the shell application, the following methods offered by the plateauUI should be written specifically for the shell application.

### userContextCb

It can be used to obtain the information of the logged in user.

> quick.containerServices.getUserContext()


### customerContextCb

It can be used to obtain the information of the customer on whom the transaction is made.

> quick.containerServices.getCustomerContext()


### print

It can be used to provide the printing process.

> quick.containerServices.print(data: any)

 
### getContainerName

It can be used to get the name of the shell on the pages.

> quick.containerServices.getContainerName()


### resourceCb

It can be used to obtain authorization information.

> quick.containerServices.getResource(resource: string)

 
### extentions.getQuickUrl

It can be used to call service from different domain addresses.

> quick.containerServices.getQuickUrl(moduleName: string, mode: string)

 
### authenticatedCb

It can be used to query whether the user is authenticated.

> quick.containerServices.isAuthenticated()

 
### scan

It can be used to provide scanning.

> quick.containerServices.scan(moduleName: string, mode: string)


### ocr

It can be used to provide OCR process.

> quick.containerServices.ocr(data: any)


### biometric

It can be used to provide biometric operation.

> quick.containerServices.biometric(data: any)


### logout

It can be used to perform the logout process in transactions logged in with IDP.

> quick.containerServices.logout()

## Extensions

Apart from the methods opened for the product, you can also create your own methods, to ensure this, the methods must be under the extension title.

![image-20220124105409249](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/extensions.PNG)


```ts
quick.containerServices.extensions.getAuthorizationToken()
```
### Sample Scenario

1.Let's create our extensions object inside our ContainerServices object

![image-20220124113259989](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ContainerServiceswithExtension.PNG)

2.Writing the desired method under the extensions object

![image-20220124113559451](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ExtensionMethodExample.PNG)

3.The method can be called from the desired component in the page qjson file (in this scenario we will call the method over a button)

```ts
quick.containerServices.extensions.exampleMethod()
```

![image-20220124114139439](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ExtensionExampleBtn.PNG)

4. Set Localization

For projects with webSdk integration, you can specify the application rootLangCode in the config definition passed in containerServices **( config.LRType = lang; )** . This value will be the opening language code of the application.

```
var config = {
    LRType: "tr-TR",
};
```
OR

```
var config = {
    LRType: "en-US",
};
```
![image-20220124105409249](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/extensions.PNG)

5. Testing on the page

![image-20220124114139439](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ExampleMethodTrigger.gif)


## Messaging Methods

The methods that allow us to connect the shell and the quick pages on the quick screens are called messaging methods. It can be created as a custom event in the Messaging component and provides connection between the shell and the page.

## customerchange

The method that is triggered after a change in the customer search component in the Rally shell

### removeCustomer

The method that is triggered after removing a customer in the customer search component in the Rally shell
### timerOperation

The method that is triggered when the home button and logout button are clicked

### Sample Scenario

1. The Messaging method is called in the shell in accordance with the desired scenario. (In this scenario, we will run the method when the customer pin is removed)
![image-20220124111222445](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/removeCustomer.PNG)
2. removeCustomer method is created as custom event in messaging in qjson file
![image-20220124111618848](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/removeCustomerMessaging.PNG)
3. Go to the created page in the shell
4. When the user is deleted, our removeCustomer method is triggered.
![image-20220124111222445](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/CustomerRemoveMessaging.gif)