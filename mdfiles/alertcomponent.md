# Quick.alert

Shows component that configured in quick ui alertqjson path. If alertqjson is not set with a path of customized alert qjson file, shows default engine VAlert component.
`text`: (string) Alert message that will bind alert.qjson component \
`category`: (enum) Warning - Info - Success - Error \
`actionButtons`: (object array) \
`name`: (string) Action button names that displays on alert component Confirm or Cancel button\
`type`: (enum) Action button types. Confirm - Cancel  \
`clickEventName`: Custom event name that triggers when alert.qjson button clicked. \
`error`: (object) \
`errorMessage`: validation, network etc. error message parameter \
`errorCode`: (string) validation, network etc. error code parameter \
`errorSource`: (enum) Page - Network - Validation 

> quick.Quick.alert({
>    title?: string, 
>    text?: string, 
>    category?: AlertType,
>    actionButtons?: Array<IActionButton>,
>    error?: { errorMessage?: string, errorCode?: string, errorSource?: ErrorSource },
>    additionals?: {props?: any, events?: any})
>
> > ```js
> > quick.Quick.alert({text: 'Kayıt silinecektir onaylıyor musunuz?', category:'Warning', actionButtons:[{name:'Onayla', type:'Confirm', clickEventName:'onConfirmTask'},{ name:'İptal', type:'Cancel', clickEventName:'onCancelTask'}], additionals: { props: { isPersistent: true }, events: {} }})
> > ```

## Customize UI Alert Component 

* When create new quick ui project with 'symphony-cli createui' command, you will see sample **alert.qjson** file in settings/qjson/alert.json path.
* You can customize alert component in Quick Editor with VDialog, VAlert etc. components and bind values from parent page Quick.alert() parameters. (**Ex.:** in alert.qjson)
* Customize your ui alert component for network errors, validation errors, notifications, confirmation box etc. in qjson according to parameters.
* Get parameters values with **quick.parent.props** and **quick.parent.events** and bind values to generate alert displays as follows. \
  **Using Exp:** \
  **Messaging:**

```js
if(quick.parent.props.error){
    if(quick.parent.props.error.errorSource == 'Validation'){
        //validation error display
        components.alertHeader.type = 'error'
        components.alertHeaderText.text = quick.LR(quick.parent.props.error.errorCode)
        components.validationBtn.visible = true
        components.text = quick.parent.props.actionButtons[0].name
    }
    if(quick.parent.props.error.errorSource == 'Network'){
        //network error display
        components.alertHeader.type = 'error'
        components.alertHeaderText.text = quick.parent.props.error.errorCode
        components.alertText.text = quick.parent.props.error.errorMessage
    }
}
else{
    //Confirm diplay
    components.alertHeader.type = quick.parent.props.category
    components.alertHeaderText.text = quick.parent.props.title
    components.alertText.text = quick.parent.props.text
    
    let actionButtonList = []
    if(quick.parent.props.actionButtons != null){
        actionButtonList = quick.parent.props.actionButtons
    }

    for(actionButton in actionButtonList){
        quick.EM.trace('actionButtons')
        quick.EM.trace(actionButton)

        if(actionButton.type == 'Confirm'){   
            components.confirmButton.visible = true
            components.confimButtonText.text = actionButton.name
        }
        if(actionButton.type == 'Cancel'){
            components.cancelButton.visible = true
            components.cancelButtonText.text = actionButton.name
        }
    }

}

components.alertSampleDialog.qValue = true
```

**Confirm button click event:**

> quick.parent.events.onConfirm() -- triggers owner component custom event that is given on Quick.alert clickEventName parameter


**Cancel button click event:**

> quick.parent.events.onCancel()

* Export customized alert qjson file and add somewhere in project (**Exp.**: settings/qjson/alert.qjson)
* Give this file path to **alert.qjson** in quick ui settings.yaml file \
  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/alertComponent/settings.png)

## Call Quick.alert 

If quick ui project has an alert qjson configuration, just call Quick.alert() method with parameters on your page.

**Exp:** Call Quick.alert method on your page service onFail event with these params;  

```ts
quick.Quick.alert({actionButtons:[{ name:'Kapat', type:'Cancel', clickEventName:'onCancelBusinessAlert'}], error: {errorCode: LR('XBusinessErr'), errorSource: 'Network'}, additionals: { props: { isPersistent: true }, events: {} } })
```

## Call Quick.alert.additionals prop

```ts
quick.parent.props.additionals.props.isPersistent
```

## Quick.alert Auto Close

If you want to the close alert automatically, you should set the timeout in the additionals field. 

```
quick.Quick.alert(
{
text: ‘Kayıt silinecektir onaylıyor musunuz?’,
category: ‘Warning’,
actionButtons: [{ name: ‘Onayla’, type: ‘Confirm’, clickEventName: ‘onConfirmTask’ },
{ name: ‘İptal’, type: ‘Cancel’, clickEventName: ‘onCancelTask’ }],
additionals: { props: { timeout: 5000 } }
});
```

In the alert.json Messaging component post Render event, you can close the alert with setTimeout as follows.

```
if (quick.parent.props.additionals?.props?.timeout) {
setTimeout(() => {
components.alertSampleDialog.qValue = false;
}, quick.parent.props.additionals?.props?.timeout)
}
```



**Calling Quick.alert on page**
 <a href=""
onclick="this.href='?q=qjsons/alertSamplePage.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>AlertSamplePage.qjson</a>

**Quick UI alert.qjson component**
 <a href=""
onclick="this.href='?q=qjsons/alert.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>alert.qjson</a>