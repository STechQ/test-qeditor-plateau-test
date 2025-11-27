# Localization

## LR method

To access localization create a key and write down the localization of this key. \
<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Localization/PageLocalization_AddLR.gif" width="800px" height="auto">

Use this key anywhere in the page with **LR** method. 
This method returns the language equivalent of the given key parameter with current language of the system.

> quick.LR(key: string) // return localization of the key

## Set Language

Set the system language to given parameter if it has been added before in localization file.

> quick.Quick.setLanguage(LRType: string)

## Get Language

Get the system language  Default value is **tr-TR**

> quick.Quick.getLanguage()

## Localization Types

There are 3 different localization structures in Quick.

* **Page Localization**     : Localization information that is valid only on the page where it is defined.

* **Global Localization**   : Localization information that is valid throughout the entire application.

* **External Localization** : Localization information obtained from an external service or database that is not defined in the Quick environment. External Localization information is added to Global Localization information.

## Page Localization

You can access it from the **"Localization > Local Resources"** menu in the top menu in Quick editor. You can add, modify and delete new localization. You can export the Localization information you defined to excel file and import it from excel file to Quick.


<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Localization/PageLocalization_AddLR.gif" width="650" height="500">


<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Localization/PageLocalization_ExportImportLR.gif" width="650" height="500">


## Global Localization

There is a page called globalLocalization.qjson **(settings\globalLocalization.qjson)** in the application shell. You can add localization information by opening this page in Quick. You can add, modify and delete new localization. You can export the Localization information you defined to excel file and import it from excel file to Quick.

While preparing the page in Quick, you can get the defined globalLocalization information. You need to specify the path of the shell application from the **"Settings > Domain Service Prefix"** screen in the menu.

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Localization/GlobalLocalization.gif" width="650" height="500">


<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Localization/GlobalLocalization_ImportToQuick.gif" width="650" height="500">


## External Localization

There is a **"settings\qjson\pipeline.qjson"** page in the application shell. You can find detailed information about pipeline.qjson on **"Help > Editor Usage > Pipeline Yapısı"** page. A service call should be made in the PreRender event of the Messaging component on the pipeline.qjson page to get localization information. In the onSuccess event that will run when your service call is successful, The localization information from the service is added to the Global Localization information with the quick.importLocalization() method. If the language is changed in the application, there is no need to do anything extra. quick.Quick.setLanguage("en-US"); it is enough to do.

**overrite = true** --> if Global Localization has same key then overrite it, Take external localization value.

**overrite = false** --> if Global Localization has same key then don't take external localization value, ignore it.

> quick.importLocalization(langCode:string, localization :Record<string, string>, options: { overrite?:boolean } = {})
> > ```js
> > let langCode = "en-US"; 
> > let localization = {
> >         pageTitle: "Page Title:",
> >         pageNumber: "Page Number:",
> >         totalPageCount : "Total Page Count:"
> >     };
> > let options = { overrite: true };	
> > 
> > quick.importLocalization(langCode, localization, options);
> > ```


Example: <a href="" onclick="this.href='?q=qjsons/pipeline.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>pipeline.js</a>


<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Localization/ExternalLocalization.gif" width="650" height="500">


# Multi Language And ( LTR / RTL )

## Add New Language With ( LTR / RTL )

There are 2 default languages in Quick, "en-TR", "en-US". Apart from these languages, you can add new language to your application. You can add and delete the new language from the **"Localization > Add Language"** screen in the menu. When adding a new language, you can specify the language's RTL (RightToLeft) property.

**You can add language in 2 ways.**

* You can do it on a page basis. In this case, it will only be valid for the relevant page.

* You can add it to the globalLocalization.qjson page in the application shell. In this case it will apply to the entire application. To use the globally defined languages and localization information in the editor, it will be sufficient to save the url address of the shell application in the "Domain Service Prefix" menu in the editor. The localization information in globalLocalization.qjson will be uploaded to the editor.

You can also define the **rootLangCode** value in the settings.yaml file in the qui application shell **( rootLangCode : "ar-XA" )**.  For projects with webSdk integration, you can specify the application rootLangCode in the config definition passed in containerServices **( config.LRType = lang; )** . This value will be the opening language code of the application.


Example <a href="" onclick="this.href='?q=qjsons/localization_AddLanguageRTL_Sample.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>localization_AddLanguageRTL_Sample</a>



<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Localization/Localization_AddLanguage.PNG" width="650" height="500">


<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Localization/Localization_AddLanguageRTL.gif" width="650" height="500">