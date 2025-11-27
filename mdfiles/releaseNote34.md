# Quick Release Notes - Sprint 34

## Vuetify 

### New Features

- On a large scale, we keep working on the input masked library transition and the Swagger generation in Symphony.

- We keep expanding our test coverage by adding more detailed test cases.
  
- An event name validation is set for custom events. If the name field of a custom event is empty, the editor notifies the user, and also it is not permitted to cancel the code screen.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/eventValidation.gif)

- VImg component is made tiff extent supportable. 

- Messaging Delay Fixed: The second parameter it took in the editor appeared as an array in intellisense. But it appeared as an object in the code side. Users will no longer have to type "any". At the same time, they will be able to give parameters whenever they want.

- Quick Editor with the new UI design is open for use by the team for testing purposes. It is planned to release the first version to open for use by Citizen Developers soon.
  
  
### Bug Fixes

- The IBAN format of the Text Field component was corrupted when the keyboard language of the computer was changed. Fixed by adding tr language to property code.

  
## Rally & Sprinkle

### New Features

--

### Bug Fixes

- On r-search component, length variable of the search key is defined with a new prop **searchLength**. It is now optional to define the number of characters that will search the database or service response. [https://jira.softtech.com.tr/browse/PLT-13191]

- Dynamic retrieval of iam information. After defining the environment variables, the information was automatically read.

- Adding validation when a digit that does not start with the phone number is entered in the phone number component. [https://jira.softtech.com.tr/browse/PLT-13150]


## Documentations - Editor Help 

- More of solved issues and their solution methods are added to Discourse.( https://discourse.rally.softtech/ )


## Quick Coral

--

### Quick Android:

* İŞCEP SuperSDK Integration Documentation.

###### Engine:

* Alert.qjson refactoring.

* Degrade development completed.

###### CSS:

--

###### Components: 

* VParallax development completed.

* VMenu, VTimeline, VParallax, VRangeSlider tested.

* VButtonToggle component bug fixed.

* QMap, selecting address and address parse development is completed.

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_sprint34_qmap_adress_select.gif" alt="review_quick_ios" style="zoom: 37%;" />

### Quick IOS:

* QuickMobile github actions development completed.

* MiniAppTester github actions development in progress.

###### SuperSDK:

* Migration of superSdk to Github is complete.

###### Components:

* Missing components of Moralabs were analyzed and edited.(Socket, DataFooter, DataTable, DataTableHeader )

###### Engine:

* Added corner radius for gradient 

  <img src="http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/iOS_Sprint34_gradient_corner_radius.png" alt="review_quick_ios" style="zoom: 37%;" />


### Coral Support :

###### PLT Support:

* Support to Abonesepeti 

* Android PLT Support given.
