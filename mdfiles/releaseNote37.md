# Quick Release Notes - Sprint 37

## Vuetify 

### New Features

- Added **showToolBar property** and **scrollEnd event** to **QDocumentViewer** component. ShowToolBar prop hides and shows the page transitions located in the upper section. The ScrollEnd event is triggered when the page reaches the bottom (height property needs to be given).

  

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QDocumentViewer-showToolBar.gif)

  

- **LegendFontSize** and **titleFontSize** props have been added to each of the components **BarChart, DoughnutCart and LineChart**.(https://jira.softtech.com.tr/browse/PLT-13731)

  

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ChartsFontSize.gif)



- **Eager prop** has been added to the **VContainer Component**. If the eager prop is false, it does not render the contents of the page when the page is opened. The user can render their page according to their preference using eager prop.

  

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/eager-vcontainer.gif)

  

- An addition has been made in the editor that can use all types of Roboto fonts.

  

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/font-change.PNG)

  

- Added a template that will enable the direction feature as vertical of the VCol Component to be turned on when a new page is opened in the editor or when the component is added to the page.

  

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/vcolTemplate.gif)

  

- To accelerate the loading of qjson files, pjson and lrids and redundant sourceMapping fields are removed while building. Thus, qjson files have been minimized and the performance has been increased by speeding up their loading from the network. Users can use it in their projects exported in microUI, QUI and Plateau Studio.

  
### Bug Fixes

- When press the edit button of the overlay components while getting out from edit mode, the component has been duplicated on treelist. That bug has been solved. (https://jira.softtech.com.tr/browse/PLTUI-244)

### IAM

- IAM Logout - Redirected to first login url on logout relative to realm and subdomain.

### Symphony

- Swagger is introduced to Symphony projects. Now project builds provide a Swagger folder along with easy access to the project's swagger-ui and its's swagger-api on project start.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/swaggerFolder.PNG)

   

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/swaggerConsole.PNG)

  

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/swaggerUI.PNG)


## Rally & Sprinkle

### New Features

---

### Bug Fixes

---

## Documentations - Editor Help 

- More of solved issues and their solution methods are added to Discourse. (https://discourse.rally.softtech/)

- Create Qui Project and Websdk Integration, Error Handling, Application Theme Change, Rendering Component, Preview Screen with Simulator, Settings.yaml, Editor Shortcuts, Component Copy Paste documents are newly added. 

  Some documents are updated :  Logging, Data Storage, UI Validation, Get Component, DxDataGrid, QMenu, QLegend.

  Plateau UI Web Documents: https://studio.onplateau.com/docs/ui/docs/getting-started


## Quick Coral

--

### Quick Android:

* Mobile Simulator debug mode completed
* Function trigger analysis from shell
* Analyzed crash on device configration change
* Automating android quick libraries build using Github actions
* Repackaging code structure for fast build and minimize dependencies

###### Components: 

* VSlideGroup component development completed phase1
* LiveConnection component tested
* Method trigger fix for Live Connection

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_Sprint37_LiveConnection.gif" style="zoom: 40%;" /> 


### Quick IOS:

* İşCep QuickSuperSdk integration completed
* QuickSdk integration documentation updated
* Iscep SuperSdk integration document updated
* Super SDK shell functions that trigger permissions checked with approveConsents and owner info
* Unit Tests written by moralabs checked
* Miniapp simulator added to SuperSdk project
* Platform component owner started to develop
* Alert.json bridge issue fixed
* Providing template project for Mobile QUI
* Loading freeze issue fixed

###### Components: 

* ProgressLinear alignment issue on Abone Sepeti fixed


### Coral Support :

* Screen development support given to Abone Sepeti.