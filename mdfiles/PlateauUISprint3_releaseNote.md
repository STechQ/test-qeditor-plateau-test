# Plateau UI Release Notes - Sprint 3
**09.01.2023**

## Vuetify 

### New Features

-  **timeout** (number) (optional) param has been added to HTTP service request.  The default timeout is set to 0 which indicates no timeout. With that default value, any remote end can keep us waiting for the requested resource for an indefinite period. Timeout values are in miliseconds, { timeout: 2000 } means 2 seconds.

   ```
	const req: IRequest = {
		url: "https://httpbin.org/get", 
		data: null, 
		blockRender: false, 
		http: "get",
		onFail: null, 
		onSuccess: null,
		responseField: "respo",
		timeout : 2000	
	};

	quick.Request.async(req);
   ```

-  **expandOnHover** (boolean) (default false) param has been added to QMenu component. Collapses the QMenu to a mini-variant until hovering with the mouse. ( https://jira.softtech.com.tr/browse/PLT-14618 )

   ![QMenu_expandOnHover](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QMenu_expandOnHover.gif)

-  Added a different type to the QImgZoom component that zooms in on the mouse. When this type is selected, instead of opening the zoom operation on the side, it zooms in the area where the picture is found.
In addition, the .rotate() method that can perform rotation operation has been opened. Two buttons have been added to the bottom right of the picture that can rotate the picture 90 degrees to the right or left.
 
    ![enter image description here](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QImgZoomType2.gif)

### Bug Fixes

-  In large sized Qjsons, when a random component is selected and its event has been changed, the problem of copying that change to another component has been resolved.

- The first file uploaded to the QdocumentViewer component is opened, but when another file is uploaded, the uploaded file does not open, it shows the first uploaded file. This problem has been fixed.(https://jira.softtech.com.tr/browse/PLT-14642)

- After monaco shell opened from events tab, when pressing enter or space on keyboard, monaco shell had been duplicated. It has been fixed.


## Rally & Sprinkle

### New Features

--

### Bug Fixes

--

## Destek

Abone Sepeti screens were made.

## Documentations - Editor Help

- Plateau UI Feature Set Component documentation is added .(https://wiki.softtech.com.tr/display/PLTUI/Plateau+UI+Feature+Set)

- Plateau UI Feature Set Editör documentation is added.

- QLightBox- VDataTable tests were done.

- More of solved issues and their solution methods are added to Discourse. (https://discourse.rally.softtech/)

- Plateau UI Web Documents:  https://studio.onplateau.com/docs/ui/docs/getting-started



## Mobile



### Android:

* İsCep integration of Abone Sepeti done 
* Make Secure Payment added to Abone Sepeti
* The issue of obtaining a certificate from İşcep has been completed.
* New style structure completed.
* Simulator problems fixed and code structure edited.
* Rendering components over screen viewmodel when screen lifecycle is ready for render views
* Css inline-flex property bug fixed.
* Prevent multiple css update call.

###### Components: 

* PieChart development completed.

* VTabs structure changed.

* Fixed tabItems not showing correctly in VTabs component.

* Tab header added according to the number of tabItems. 

* Fixed the label that not appearing in the VRadioGroup

* VCheckbox padding fixed.

* Fixed childs alignment in VExpansionPanelHeader.


######  SuperSDK:

--

### IOS:

* Miniapp simulator made working again (Added certificates)

* Loading freeze problem fixed.

* AssertionFailures checked and edited.

* Mobile client deploy/export analysis.

* Simulator problems fixed.

* Style improvements have been made for some components.(VCheckbox, VRadio, VAutoComplete, VBtn, QLabel)

   <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_Sprint40_styleGelistirmeleri.jpeg" style="zoom: 45%;" />


###### Components: 

* Checked inlineDatePicker for borderRadius.
* VRadio component issues fixed.
* The DoughnutChart library has been changed and the component has been developed.
* VTabs edited and added missing props. (centered,center active,fixed tabs)
* Styles edited for VBtn and VLabel.


###### SuperSDK: 

* IsCep makeSecurePayment has been developed.

### Mobile Support :

* Development of abonesepeti screens.