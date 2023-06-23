# Quick Release Notes - Sprint 35

## Vuetify 

### New Features

- A new platform has been released for Plateau UI documentation. All information about Quick Editor under the Help menu can be reached here. Plateau UI | Plateau UI (https://studio.onplateau.com/docs/ui)  

  ![enter image description here](http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/plateauUI.gif)

    

- **Following UI updates has been made:**  

	* **Edit menu**  now has only two elements: Undo and Redo.  

	* **Localization menu**  has 3 elements. Language transitions are made from "Languages"  

	* **Labs menu** has been removed and "Mobile QR" button has moved to top menu.  

	* **Help menu** has 3 links. "Documents" redirects to our new documentation service which you can have access to all component details and samples.  

	* **Softtech Akademi** redirects to **akademi.softtech.com.tr** which has all lectures and courses about Quick Editor. 
	
	* **Component Samples** opens a qjson page that contains component samples.  

	* Editor's genereal color pallette is also changed. 

    ![enter image description here](http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/topMenu_updates.PNG)
  
	* **Edit and highlight buttons** are updated. Edit button renamed as "Preview mode" and designed as a switch button. Highlight button's icon changed. For notifications, a new library and a new design have implemented.  

  ![enter image description here](http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/edit-highlight-notification.gif)
  
    * **Left block of the editor** which contains component list and tree list is resizable. Width of left block can be changed from right border. Also, tree list is resizable and height of tree list can be changed from top border.

  ![enter image description here](http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/resize.gif)


- The VPdfFileViewer component has been integrated into the QDocumentViewer component. Thus, components that perform the same function were combined.   

- The height property has been added to the DxDataGrid component.   

- Added loadIcon and loadChildren properties to Vtreeview component.  

- Added activeClass to VListItemGroup. 

- Added rounded prop to VInlineDatePicker.

- Added rounded prop to VSelect and VCombobox.

  ![enter image description here](http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/rounded.gif)  

- Added hint and persistentHint prop to VInlineDatepicker.

  ![enter image description here](http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/hint.gif)
  
- setIcon prop has been added to the qmap component. You can change the location of the markers on the map via Prop.

- Solved the problem of not detecting the first character of the component's prob value in editor.

- In the editor, the part of the GoldenLayout component that makes the field that brings relevant information about the component is not working like other components has been fixed.

- The problem in the tests that prevents the package from being released has been fixed.

- The part that causes the component to break if no value is given in QDocumentViewer has been fixed.

- Improvements have been to logging and error writing.

- The setInterval structure of the Qtimer component has been changed and reconfigured to work with the webWorker.

- Worker to be used in QTimer and QIdleTimer components has been integrated.
  
### Bug Fixes

---


## Rally & Sprinkle

### New Features

- Localization equivalents of metadata were not available in Quick 2 screens. With the new development, these equivalents are also used on screens.

### Bug Fixes

---

## Documentations - Editor Help 

- More of solved issues and their solution methods are added to Discourse.( https://discourse.rally.softtech/ )




## Quick Coral

--

### Quick Android:

* Simulator bugfix.
  * Merges completed.
  * Loading problem fixed.


* Order problem in dynamic component fixed.

###### Components: 

* Textfield cursor bug fix.
* Vmenu,VRangeSlider,VTimeline tested and feedback returned to moralabs.
* Label
  * Label align fix in leasing proforma screen.


* FileInput
  * Engine problem solved.
* VDialog
  * Color problem in background fixed.
* CheckBox
  * In leasing taleplerim screen fixed.

* BottomSheet
  * scroll problem fixed.
* ExpansionPanel
  * align problem fixed.
* VStepper
  * StepperItem's appearing problem fixed.
* NavigationDrawer
  * Prevent opening menu in all screens.
* VSelect
  * bug fixed in leasing hesaplama araçları screen.

* BreadCrumbs

  * fixed bug about becoming visible.

* In leasing home screen align problems fixed.


### Quick IOS:

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_Sprint35_sownloadDocumentExample.gif" alt="review_quick_ios" style="zoom: 37%;" />

* MiniAppTester github actions development in progress.

* Redirection from editör page to simulator with qrcode added.

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_sprint35_simulatorNotInstalledOnDevice.gif" alt="review_quick_ios" style="zoom: 40%;" /><img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_sprint35_simulatorInstalledOnDevice.gif" alt="review_quick_ios" style="zoom: 40%;" />

###### SuperSDK:

* Supersdk mobilequi project created for testing fast.

###### Components:

* DownloadDocument and VSlideGroup component developed

* DataTable, Snacbar, VMenu, BottomNavigation, DevExpress components tested and results sent to Moralabs.

###### PLTs:

* Bugs with VTextArea,VInlineDatePicker,VFileInput fixed.

* Android Mobil Uygulama Geneli Popup X İkonu; ikonun içinde bulunduğu butonun xsmall propu kapatılarak plt çözüldü.

* Leasing bugs in Anasayfa and Taleplerim screens fixed.

### Coral Support :

###### PLT Support:

* Bugs with VTextArea,VInlineDatePicker,VFileInput fixed.

* Android Mobil Uygulama Geneli Popup X İkonu; ikonun içinde bulunduğu butonun xsmall propu kapatılarak plt çözüldü.

* Leasing bugs in Anasayfa and Taleplerim screens fixed.

* Screen support given to Abone Sepeti.

* Bug about VImg svg format analyzed.

* Support about jira accounts.

* Android Simulator tested.
