# Quick Release Notes - Sprint 23

## Vuetify 

### New Features

- Vuetify **intersect** directives added. This feature can only be used for Vuetify components and usage can be found in [Intersection observer directive — Vuetify (vuetifyjs.com)](https://vuetifyjs.com/en/directives/intersect/#usage) 

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/intersect.png">



- Stacked logs are will be flushed into new **logHandler.qjson** file on **Messaging component logHandler method**  in QUI projects. (https://jira.softtech.com.tr/browse/PLT-8970)

- **onContextMenuPreparing** event is added to DxDataGrid.

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/DxDataGrid-rightClickMenu.gif" width="800px" height="auto">



- QIdleTimer component added. It  is a component for detecting idle Time of the user for given miliseconds in idleTime property. You can find example usage and description in the help menu.

- External Localization integration was done. Localization information obtained from an external service or database that is not defined in the Quick environment. External Localization information is added to Global Localization information. ( https://jira.softtech.com.tr/browse/PLT-8118 )

  There is a **"settings\qjson\pipeline.qjson"** page in the application shell. A service call should be made in the PreRender event of the Messaging component on the pipeline.qjson page to get localization information. In the onSuccess event that will run when your service call is successful, The localization information from the service is added to the Global Localization information with the quick.importLocalization() method.

  >importLocalization(langCode:string, localization :Record<string, string>, options: { overrite?:boolean } = {})

  Example <a href="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/Localization/pipeline.js" target="_blank">pipeline.js</a>

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Localization/ExternalLocalization.gif" width="800px" height="auto">



- Add New Language With ( LTR / RTL ) ( https://jira.softtech.com.tr/browse/PLT-7777,  https://jira.softtech.com.tr/browse/PLT-7761 )

  You can add and delete the new language from the **"Localization > Add Language"** screen in the menu. When adding a new language, you can specify the language's RTL (RightToLeft) property. 

  **You can add language in 2 ways.**

  * You can do it on a page basis. In this case, it will only be valid for the relevant page.

  * You can add it to the globalLocalization.qjson page in the application shell. In this case it will apply to the entire application. To use the globally defined languages and localization information in the editor, it will be sufficient to save the url address of the shell application in the "Domain Service Prefix" menu in the editor. The localization information in globalLocalization.qjson will be uploaded to the editor.

  Example <a href="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/Localization/localization_AddLanguageRTL_Sample.js" target="_blank">AddLanguageRTL_Sample.js</a>

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Localization/Localization_AddLanguage.PNG" width="500" height="auto"><img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Localization/Localization_AddLanguageRTL.gif" width="500" height="auto">



- While preparing the page in Quick, you can get the defined globalLocalization information. You need to specify the path of the shell application from the **"Settings > Domain Service Prefix"** screen in the menu.

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Localization/GlobalLocalization_ImportToQuick.gif" width="800px" height="auto">



- Quick 2.0 editor tutorial video was taken to create educational materials.

- weekdayFormat function prop is added to VDatePicker & VInlineDatePicker. Day notations can be changed by user's request. (PLT-9256)

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VDatePicker_weekdayFormat.gif" width="800px" height="auto">



- maxHeight prop is added to VCard.
- headerPadding prop is added to QLightbox. Users can give any padding value to header part of the component. (PLT-8739)

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QLightBox_headerPadding.gif" width="800px" height="auto">



- Dynamic menu feature added to VNavigationDrawer. The menu is organized using create component methods given the VNavigationDrawer template. It is now completely user manageable.

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/dynamic_menu.gif" width="800px" height="auto">



- Active class is added to VSlideGroup. When selected, the color of active button can be changed. 

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VBtnActiveClasss.gif" width="800px" height="auto">



- VDialog keydown(no parameter) event is changed with keydown(keyboardEvent). VDialog can now close with esc button.

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VDialogCloseWithEscapee.gif" width="800px" height="auto">



- Quick 2.0 IAM refresh token - IdentityProvider settings added the integration.
  


### Bug Fixes

- qValue for VSwitch and VCheckbox now successfully sets the components' values.

- In the NAR application, the maximize-minimizing structure of the customer information screen was broken after the Quick 2.0 screen was opened. The problem has been fixed. ( https://jira.softtech.com.tr/browse/PLT-9513 )

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Nar_CustomerInfo_Minimize.png" width="500px" height="auto"><img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Nar_CustomerInfo_Maximize.png" width="500px" height="auto">



- Components that does not shown in Rally shell added to websdk.ts file. (QFrame)

- VPdfFileViewer removed from search component list.

- QDocumentViewer box shadow is added.

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QDocumentViewer_BoxShadow.gif" width="800px" height="auto">




## Rally & Sprinkle

#### New Features

- Rally UI Pipeline.QJSON file edited and getStoreDataCb method has been added to the Rally UI shell as a Container Service, the values on the shell can be used in the desired places through this Container Service method.

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/RallyPipelineUI.gif" width="800px" height="auto">



- Rally UI IAM login language data is added to store.

#### Bug Fixes

- Fixed an issue opening Quick 2.0 pages. (https://jira.softtech.com.tr/browse/PLT-9248)




## Documentations

- Qjson samples are added to Quick 2.0 component documents.
- DxDataGrid sample usage documents are added to Quick 2.0 editor.
- Localization information has been added to the **"Help > Editor Usage > Localization"** document. 



## Quick Coral

- 29 screens done on IOS and 8 screens done on Android. KVKK, Otp ,Ödeme Planı Detay, Firma Detay, Hesaplama aracları, Karşılama , Proformalar screens on testing Android

  <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/proformaSprint23.png alt="Superapp Animation" style="zoom:20%;" /><img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/firmadetaySprint23.png alt="Superapp Animation" style="zoom:20%;" /><img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/calculatorSprint23.png alt="Superapp Animation" style="zoom:20%;" /><img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/contactusSprint23.png alt="Superapp Animation" style="zoom:20%;" /><img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/o%CC%88demeplan%C4%B1detaySprint23.png alt="Superapp Animation" style="zoom:20%;" />

  

## Quick Android:

- Completed components:

  VTextArea

  VRadio  and VRadioGroup

  VExpansionPanel

  <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/expansionSprint23.png alt="Superapp Animation" style="zoom:80%;" /><img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/radioSprint23.png alt="Superapp Animation" style="zoom:50%;" /><img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/textareaSprint23.jpeg alt="Superapp Animation" style="zoom:50%;" />

- Fixed problems:

  Calculator page issues

  Login page (remember me) issues

  Contact Us page issues

  Checkbox component issues

  Map component issues

  Engine date issues

- Added decimal feature on Textfield

- Added deeplink function for Embedded Banking

- Engine refactored

- Components have been tested and supported for Moralabs:

  VAvatar, VStepper, VExpansionPanel

- Tested screens:

  Proformalar and Contact Us

- SuperApp Imece bugs are fixed

  

## Quick iOS:

- Slider component developed. Missing props are being developed

  <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/SliderComponentSprint23.gif alt="SliderComponent" style="zoom:70%;" /> 

- Simulator documentation completed

- Screens opened to test PLT Support

- Components which moralabs developed have been tested, feedback provided

- SuperApp Imece bugs are fixed