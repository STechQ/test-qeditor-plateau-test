# Quick Release Notes - Sprint 33

## Vuetify 

### New Features

- Fixed the lack of multitab integration in shell applications (applications using the PlateauUI package). **singleTab** field is made available by setting **false** in settings.yaml file.

- The development has been completed, which allows the rendering engine to level the logs that it prints and send it to the logHandler method in pipeline.qjson.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/minEngineLogLevel.png)

- The loading.qjson file can be used in projects with WebSdk integration.

- Added pageNameArray parameter to hostTrigger method. It was transmitted to the mobile side.

- **getAddress** event has been added to **Qmap** component.

- GoldenLayout and devexpress component theme files can be implemented from **settings.yaml** with links or local file paths. You can call setTheme method as Quick.theme.setTheme(themeName:string) in the events for changing theme. **Quick.theme.setTheme("compact")**

```js
csspath:
  default: 
    - /static/css/goldenlayout-base.css
    - /static/css/dx.common.css
    - /static/css/main.css
    - /static/css/goldenlayout-light-theme.css
    - /static/css/dx.light.css
  compact: 
    - /static/css/goldenlayout-base.css
    - /static/css/dx.common.css
    - /static/css/myHappyTheme1.css
    - /static/css/goldenlayout-light-theme.css
    - /static/css/dx.light.compact.css
  dark:
    - /static/css/goldenlayout-base.css
    - /static/css/dx.common.css
    - /static/css/myDarkTheme.css
    - /static/css/goldenlayout-dark-theme.css
    - /static/css/dx.dark.css
  dark-compact:
    - /static/css/goldenlayout-base.css
    - /static/css/dx.common.css
    - /static/css/myDarkTheme.css
    - /static/css/goldenlayout-dark-theme.css
    - /static/css/dx.dark.compact.css
 ```
 
- **QImgZoom** component has been added to the Quick Editor. QImgZoom component allows users to get a zoomed display when hovered over the Picture.  

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QImgZoom.gif)
  
  
### Bug Fixes

- Fixed issue with Custom Child component in editor.

- The problem that the cell types cannot be specified when exporting to excel in RTable has been fixed. (https://jira.softtech.com.tr/browse/PLT-12690)

  ![Custom Export](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/sprinkle_custom_excel_Export.png)

  ![Custom Export](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/sprinkle_custom_excel_Export2.png)



  
## Rally & Sprinkle

### New Features

- Parameterized iam integration was performed for tkb env. it can be used by changing the pre-deploy parameters in the iam_env file.

### Bug Fixes

- When the value of the RallyNumericInput component was updated using getformdata and setformdata, its old value was returned. It has been fixed and the current value is returned. (https://jira.softtech.com.tr/browse/PLT-12695)

## Documentations - Editor Help 

- More of solved issues and their solution methods are added to Discourse.( https://discourse.rally.softtech/ )


## Quick Coral

--

### Quick Android:

###### Engine:

* Alertqjson analysis and development completed

* Shadow analysis and development completed
* Degrade analysis completed development in progress.
* Refactoring on MiniAppTester and ConsentManagement

###### CSS:

* Css style analysis completed.

###### Components: 

* VSelect align problem fixed at request page.
* Padding updates are done for checkbox while filtering bug is in progress
* Missing components of Moralabs were analyzed and notes were written. (VTimeline, VTimelineItem, VBreadcrumbs, VMenu, VParallax, VRangeSlider, VSnackBar, VSlideGroup, VBadge)

### Quick IOS:

###### SuperSDK:

* SuperSdk can be installed to project by pod
* Supersdk installation and usage documentation written

###### Components:

* Border left added

* VSlideGroup component bug fixed

* Qmap event call and edits completed
  
  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_sprint32_QMap_EventAdress.gif" alt="review_quick_ios" style="zoom: 37%;" />
  
  
  
* İşcep QuickSDK Integration Documentation was prepared and added to the wiki , discourse.

* Missing components of Moralabs were analyzed and notes were written.(VSlideGroup, SocketList, DataFooter, DataTable, DataTableHeader)

###### Engine:

* Gradient development completed

 <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_sprint32_GradientCard.png" alt="review_quick_ios" style="zoom: 37%;" />
  

### Coral Support :

###### PLT Support:

* Entered data directly to checkboxes on ProjectGuarenteeList and Request pages via qjson.

* Prepared a sample qjson for the Slidegroup component

* Trying to make Requests page with DataTable
