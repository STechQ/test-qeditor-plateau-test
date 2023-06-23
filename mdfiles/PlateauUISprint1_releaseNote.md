# Plateau UI Release Notes - Sprint 1
**28.11.2022**

## Vuetify 

### New Features

- tiff extension support is added to the QImgZoom component.

- Google recaptcha v2 component has been added to the environment.
![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/recaptcha.gif)

- "Delete All" button is added to Local Resources modal. All saved local resources can be deleted at once by clicking "Delete All" button. Also, some UI changes are made for that modal.
![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/LocalResource-DeleteAll.gif)

- CSS design changed in the right click menu of the editor that we use to modify events and props of a component.
![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/rightClick.PNG)

- Due to the performance issues in Inputmask, we have completed the first phase of **quickInputFormat** instead of Inputmask. This stage includes only **decimal** data masking. The following properties are supported in the first phase: quick:true, alias: "decimal", groupSeparator, rightAlign, radixPoint, digits, max, min, enforceDigitsOnBlur, allowMinus, placeholder, preventPaste.
(https://jira.softtech.com.tr/browse/PLT-12641 , https://jira.softtech.com.tr/browse/PLT-13895)
    

  
### Bug Fixes

--

### Plateau Studio

- In Quick Editor, components can be deleted now via pressing delete button on keyboard.

- In Plateau  Studio main page, we have one more choice for creating applications. It had only blank application, now it has template application too.
![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/IDEHomePage.png)

- In Plateau Studio main page, application creation buttons design has been changed.


### Symphony

- Http request methods are now accessible through register function's sym object as **sym.request.httpMethod.**

## Rally & Sprinkle

### New Features

--

### Bug Fixes

- The problem of opening a new tab on Quick2 pages has been fixed and the store has been moved. 
(https://jira.softtech.com.tr/browse/PLT-13690)

- Fixed active page display issue in menu in Quick2 page redirection 
(https://jira.softtech.com.tr/browse/PLT-14266)

- **customLoaderExists** parameter has been passed on apiPostBlob method.

- Incorrect event triggering in **customConfirm** usage has been fixed. 
(https://jira.softtech.com.tr/browse/PLT-14279)

- Fixed the blank screen issue when returning to the page in Quick1 pages from Quick2 pages 
(https://jira.softtech.com.tr/browse/PLT-14174)


## Documentations - Editor Help 

- More of solved issues and their solution methods are added to Discourse. (https://discourse.rally.softtech/)

- Plateau UI Web Documents: https://studio.onplateau.com/docs/ui/docs/getting-started



## Mobile

--

### Android:

* İscep Abone Sepeti integration
* İşCep credit card listing development has been completed.
* Distrubute quick sdk over gradle URL.
* Added gradle task which copies local aars libraries to client app project.


###### Components: 

* SlideGroup component phase 1 completed

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_Sprint38_SlideGroup.jpeg" style="zoom: 0%;" />


######  SuperSDK:

* Fixed RenderView performance issue
* Owner information of custom component from miniapps has been received.
* Fixed the display problem of custom component in miniapps. 

* Shell function trigger permissions have been adjusted.
* Consent controls have been adjusted.
* Hosttrigger method has been edited.
* Getting loading, alert, pipeline, css from SuperApp service completed. 

 <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_Sprint38_ConsentControl.jpeg" style="zoom: 50%;" />




### IOS:

* İscep Abone Sepeti integration
* Loading problem solved
* İşCep credit card listing development has been completed.


###### Components: 

* Fixed the issue where the slide group component did not appear for the Abone Sepeti pages.

* The horizontal prop of the bottom navigation component was not working for the Abone Sepeti pagess. The problem has been fixed.

* Piechart component development started and continues.

* <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_Sprint38_pieChart.jpeg" style="zoom: 40%;" /><img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_Sprint38_donutChart.jpeg" style="zoom: 40%;" />


### Mobile Support :

--
