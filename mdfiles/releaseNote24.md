# Quick Release Notes - Sprint 24

## Vuetify 

### New Features

- changeTitle method (**changeTitle(childName: string, newTitle: string)**) is implemented to Golden Layout. Now, the items' titles can be set to the provided value using the changeTitle method.

- **click-outside, resize and ripple** directives have added into "Directives" section. (see the Directives document "Help > Editor Usage > Directives" )

- logHandler has updated. The **qjson file is no more needed** and the system has been moved into **pipeLine.qjson** file. (see the Client Side Log Handling)

- **Dark theme** of the component libraries can be activated by using the setTheme method giving the "dark" parameter to it. It can be switched with "light" theme by giving parameter as the same keyword to setTheme method. (see the Theme Change document)

- Default CSS theme and component options have changed. Detailed usage and the files can be seen in [Zero height](https://zeroheight.com/45e2aa440/p/03e8ac-project-styling).

- **dark** prop has opened on available components.

- Added **propType** field to components in component List file. Thus, the properties of the components other than the normal property were made executable. Such as *maxlength* prop given value with *attr*.
  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/propType.png" width="200px" height="auto">

- Alert.qjson can be used in shell applications with webSdk integration.

	![VChart_Document_Information](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/AlertQjson_IntegratedToWebSdkShell.jpeg)
	
- Pipeline Component is used to manipulate the request before it goes and manipulate the response before it come back to page. There were already onBeforeRequest, onAfterResponse events. onAfterResponse was manipulating successful response. **Added onAfterErrorResponse event** that manipulates failed response. **Added onPostRender event**, this event is triggered after each page render in the application.

	Example
	<a href="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/pipelineComponent/pipelineSample.qjson" target="_blank">pipelineSample.qjson</a>
	<a href="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/pipelineComponent/pipeline.qjson" target="_blank">pipeline.qjson</a>

-  Fixed exporting object child member variables to excel using **exportToXlsx()**.  ( https://jira.softtech.com.tr/browse/PLT-9348 )

  Example <a href="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/exportToXlsx_Sample.qjson" target="_blank">exportToXlsx_Sample.qjson</a>
	
	```
	let items: object[] = [
		{ fat: { a1: { a: "aa1" } }, bat: "b1" },
		{ fat: { a1: { a: "aa1" } }, bat: "b1" },
		{ fat: { a1: { a: "aa1" } }, bat: "b1" },
		{ fat: { a1: { a: "aa1" } }, bat: "b1" }
	]
	let headers: object[] = [{ value: 'fat.a1.a', text: 'Fat (g)' }, { value: 'bat', text: 'bat (g)' }];
  
	quick.Quick.exportToXlsx({ fileName: "deneme", items, headers });
	```
  
- Qlightbox dragByBody prop is added so as to make the qlightbox draggable by body or not.

	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QLightBox_dragByBody.gif)

- QPhoneInput changeCountryCode event is added. It is triggered when the country is changed but not the phone part.

	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QPhoneInput_changeCountryCode.gif)
	
  
### Bug Fixes

-  Fixed the execution of **runTimeDefaultValue** field in the componentList.js comparing it with the prop value.

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/runTimeDefaultValue.gif" width="800px" height="auto">

- DisableLoading can be given differently in service request calls in the same event.
	
	```
	const req: IRequest = {
	  url: "https://httpbin.org/get", 
	  data: null, 
	  blockRender: false, 
	  http: "get",
	  onFail: null, 
	  onSuccess: null,
	  responseField: "respo",
	  disableLoading : true
	};
	
	quick.Request.async(req);
	```
	
- Although blockRender=true was given in service calls made in PreRender, the service response was not expected. The problem has been fixed. ( https://jira.softtech.com.tr/browse/PLT-9784 )	
	
	```
	const req: IRequest = {
	  url: "https://httpbin.org/get", 
	  data: null, 
	  blockRender: true, 
	  http: "get",
	  onFail: null, 
	  onSuccess: null,
	  responseField: "respo",
	  disableLoading : true
	};
	
	quick.Request.async(req);
	```
	
- quick.Quick.toDate() was working according to the default "DDMMYYYY" format, not the given format. Now it works according to the given format. ( https://jira.softtech.com.tr/browse/PLT-9703 )	
	
	```
	let formatType = "YYYYMMDD";
	let dateString = "20220114";
	let date = quick.Quick.toDate(dateString, formatType);
	```

- After opening a page in the RenderingComponent structure, the child page that was closed when switching from the main page to another page was not hibernate. This issue has been fixed. ( https://jira.softtech.com.tr/browse/PLT-9915 )	

- Triggering the change events of the components in the Qlightbox has been provided
  
	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QlightboxInnerEvents.gif)    
    
    
- Tooltip: cssClass z-index issue is fixed.( https://jira.softtech.com.tr/browse/PLT-9754 )
    
	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/tooltipcssClass.gif)
    

## Rally & Sprinkle

### New Features

- HideToolbar prop added to control the visibility of style part in RallyBasicEditor component

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/RBasicEditorHideToolBar.gif)

  
- 255 character definitions were made to the textfield component for 2.0 screens running in the rally shell and to the rinput component for screens running on the 1.0 side. ( https://jira.softtech.com.tr/browse/PLT-9315 )
  
### Bug Fixes

- in RallyUI, Fixed the issue where service errors were not displayed as Alerts. ( https://jira.softtech.com.tr/browse/PLT-9684 ) 

- Multitab problem solved on RallyUI ( https://jira.softtech.com.tr/browse/PLT-8716 )

	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/MultitabIssue.gif)
	


## Documentations - Editor Help 

- Container Services Methods document is written. 

- Golden Layout document has been revised.

- Directives document has been revised.

## Quick Coral


- 29 screens done on IOS and 9 screens done on Android. Hesaplama Araçları,KVKK,Ayarlar,Bize Ulaşın,Firma Detay,Proformalar,Sigorta Poliçeleri, Karşılama Ekranı (Home), Beni Hatırlalı Karşılama Ekranı, Beni Hatırla'lı Giriş, Kullanıcı değiştir, OTP, Yaklaşan Ödemeler Detay, BA/BS Mutabakat, Ayarlar, Navigasyon Ana Menü, Ana Ekran Dashboard, Proje Listesi, Talep İzleme, Taleplerim ve Proje Listesi )

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_otp_sprint24.gif"  style="zoom:20%;" />
  
  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_rememberMe_sprint24.gif"  style="zoom:20%;" />
  
  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/slideGroupArrow_sprint24.gif" style="zoom:20%;" />
  
  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/slider_sprint24.gif"  style="zoom:20%;" />

### Quick Android:

- Completed components:

  VAlert component development

- Fixed problems:

  Fixed layout corruption when vselect validation messages shows

  Otp focus problems fixed

  Icon files updated

  Methods to get icons and fonts updated

  Expansion Panel bug is fixed. Some of them would be expanded by default.

  Carousel delimiter bug is fixed

  VListGroup bug is fixed. Expanded ListGroups would be colored with css data.

  VBtnToggle component problems solution

  Problems solved for remember me login : If the application is killed, it is redirected to the remember me login, Scope slote structure has been edited

  Problems in the change user screen: Bottom sheet problem, the problem that the desired page does not open when you click on the icon

  Fixing settings screen problems: Settings screen showing accounts registered to the phone, Name and surname not showing correctly, BtnTooglle component not showing correctly

  Insurance Policies screen issues : Checkbox display changed, Checkbox events called

  Vtextfield added vade-ay format

  Added source-sans-pro font

  

- Horizontal stepper component development is completed

- Vertical stepper component development is completed

- InLineDatePicker is updated. Range property is activated.

- Took few steps on simulation app, and the progress is going on...

- Component and engine improvements


### Quick IOS:

- Slidegroup component started to be developed.

- Slider component development completed.(hint prop, knob circle, touch track, events)

- Consent management started to be developed.

   <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/slideGroupArrow_sprint24.gif" style="zoom:20%;" />
  
   <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/slider_sprint24.gif"  style="zoom:20%;" />

- Quick mobile simulator development completed.

- Css updates

- Xcode 13.2.1 edits

- Source Sans Pro font added

- Base component height inherit fix 

- BaseComponent disabled alpha edit

- VRadio label bold fix

- QDocumentViewer webview height fix 

- VSelect nil fix 

- VSelect InputLabel fix

- Missing icons added
