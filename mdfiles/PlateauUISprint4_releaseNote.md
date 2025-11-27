# Release Notes 30.01.2023

### Plateau UI Release Notes - Sprint 4

#### ![party-horn 1](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/party-horn.svg) New Features


##### **UI Module Web**

- **VInlineDatepicker** 
  
  Added Props:
  
  | Name         | Type    | Default | Description                           |
  | ------------ | ------- | ------- | ------------------------------------- |
  | solo         | boolean | false   | Changes the style of the input        |
  | soloInverted | boolean | false   | Reduces element opacity until focused |

  
  
- **quick.Quick.go()** now takes an optional parameter called **options**. 

  When the newTab option is set to true, the page specified opens in a new tab without store values. The store is transmitted to the new tab if and only if the store options are set to true. Only applies to WEB.

     ```ts
	options?: {
		newTab?:  boolean;
		store?: boolean;
	}
     ```
	

     ```ts
     quick.Quick.go('/static/qjson/pageName.qjson', { newTab:  true, store:  true });
     ```

- **QRichText** 

  ( https://jira.softtech.com.tr/browse/PLT-14822 )

  Added Props:
  
  | Name      | Type   | Default | Description                                |
  | --------- | ------ | ------- | ------------------------------------------ |
  | height    | string | auto    | Changes the height of the component.       |
  | minHeight | string | auto    | Sets the minimum height for the component. |

  Added Methods:
  
  | Name            | Parameters      | Description                                                  |
  | --------------- | --------------- | ------------------------------------------------------------ |
  | insertContent() | content: string | Inserts the passed value into the document at the cursor position. |



- **VList**

  Added Props:

  | Name    | Type    | Default | Description                                         |
  | ------- | ------- | ------- | --------------------------------------------------- |
  | rounded | boolean | false   | Rounds the VListItem edges.                         |
  | shaped  | boolean | false   | Provides an alternative active style for VListItem. |

  ​	



- The render area of the Quick editor is changed into an iframe. This feature makes it resizable and helps users to see the current resolution of the design area. Also, on the top menu, some preset device resolutions are added. Users can specify a custom resolution, too. All can be seen in preview mode. 


<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/RenderArea_Frame.gif" style="width: 640px;" />


- **iconOptions** and **imageOptions** properties have been added to **QMenu** component. The size and color of the icons added to the menu can be changed with the iconOptions feature. The size of the images added to the menu can be changed with the imageOptions feature.

  ( https://jira.softtech.com.tr/browse/PLT-14767 )
  
     ```ts
     interface IQMenuMenuDataItem {
        code: string,
        imagePath?: string,
        options?: {
            iconOptions?: {
                size?: string | number,
                xSmall?: boolean,
                small?: boolean,
                large?: boolean,
                xLarge?: boolean,
                color?:string 
            }, 
            imageOptions?: { 
                width?: string | number,
                height?: string | number
            } 
        },
        children?: Array<IQMenuMenuDataItem>,
        menuItem: boolean
     }
     ```

    

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QMenu/Qmenu_imagePathOptions.gif" style="width: 640px;" />

- **QDocumentViewer** 

   Added new functionality and visual enhancements for the toolbar used for pdf in the QDocumentViewer component. 

	( https://jira.softtech.com.tr/browse/PLTUI-1016 )
	

  Added Props:	

  | Name                      | Type    | Default | Description                                                  |
  | ------------------------- | ------- | ------- | ------------------------------------------------------------ |
  | pdfToolbarBackgroundColor | string  | #fafafa | Changes the color of the toolbar used in case the user displays a pdf. |
  | pdfBackgroundColor        | string  | #eeeeee | Changes the background color used in case the user is shown the pdf. |
  | hidePagination            | boolean | false   | Hides the pagination section on the toolbar.                 |
  | hideDescription           | boolean | false   | Hides the fileDescription section on the toolbar.            |
  | hideDownload              | boolean | false   | Hides  the download section on the toolbar.                  |
  | hideRotate                | boolean | false   | Hides the rotating part on the toolbar.                      |
  | hideZoom                  | boolean | false   | Hides the zoom options on the toolbar.                       |
  | displayOnScroll           | boolean | false   | Renders page by page while scrolling due to the speed of pdf rendering large files. |
  | fileDescription           | string  | ""      | Displays the file definition according to the string given on the toolbar. At the same time, when the download feature is used, the file is downloaded with the string name given here. |
  
  Added Methods:

  | Name           | Parameters         | Description                                                  |
  | -------------- | ------------------ | ------------------------------------------------------------ |
  | nextPage()     |                    | Goes to the next page.                                       |
  | previousPage() |                    | Goes to the previous page.                                   |
  | zoomIn()       |                    | Enlarges the size of the displayed pdf by 10%.               |
  | zoomOut()      |                    | Reduces the size of the displayed pdf by 10%                 |
  | goToPage()     | pageNumber: number | Goes to the desired pdf page.                                |
  | downloadPdf()  |                    | Downloads pdf documents. The name of the file to be uploaded is determined by the string given to the file description property. |
  | rotate()       |                    | Rotates the displayed pdf page 90 degrees.                   |



​	

​										<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QDocumentViewer_newFeatures.PNG" style="width: 640px;" />  


- In order to solve the problem of rendering base64 encoded files with a certain file size for the **QFrame** component, it is provided to be converted into blob objects and used as a source. Thus, they can now be rendered.

  

- **processHtml** property has been added to process some HTML in the text property of the **QLabel** component. 
  Supported tags; **a, b, i** tags. Users will be able to interact with these tags. 
  

  ( https://jira.softtech.com.tr/browse/PLT-14253 )
  

     ```ts
     'Google''da yeni bir sayfa açmak için bu bağlantıya <a target="_blank" href="https://www.google.com">tıklayınız.</a>'
     ```
  Google'da yeni bir sayfa açmak için bu bağlantıya <a target="_blank" href="https://www.google.com">tıklayınız.</a>
	
  

  Added Props:	
  
     | Name                      | Type    | Default | Description                                                  |
     | ------------------------- | ------- | ------- | ------------------------------------------------------------ |
     | processHtml | boolean  | false | Process some HTML in the text property. Supported tags; **a, b, i** tags. |
  

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QLabel/QLabel_Url.gif" style="width: 640px;" />



- Multiple requests will no longer be sent to pages specified in settings.yaml. Thus, the application information will be retrieved at once, and it will be running faster. The settings.proxy.js file no longer exists. Instead, the settings_web.js, settings_mobile.json, and settings_iam.js files are created.



- Overall performance enhancements have been done.


##### **UI Module Android**

* **PieChart/DonutChart** component development completed and checked

   <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_Sprint41_dougnutChart.gif" style="width: 360px;"  />

- Added solo prop to the following components:

  * VAutocomplete
  * VSelect
  * VFileInput
  * VCombobox
  * VTextarea
  * VTextField
  
##### **UI Module IOS**


- Added style props.We added the styles of the components completed in the editor on the mobile side.

  * VCol
  * VTimeline and VTimelineItem 
  * Vtextfield
  * vbtn
  * qlabel
  * VAutoComplete
  * Checkbox
  * DatePicker
  * VRadio
  * VCard
  * VRow
  
  
  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ios_Sprint41_ComponentStyles.gif" style="width: 360px;"  />
   



- Added solo prop to the following components:
  * VAutocomplete
  * VSelect
  * VFileInput
  * VCombobox
  * VTextarea
  * VTextField


#### ![bugs](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/bugs.svg) **Bug Fixes**


##### **UI Module Web**

- The values written to the onClear event of the **VInlineDatePicker** component were looping within themselves. This issue has been fixed.

  
##### **UI Module Android**


<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/android_Sprint41_abone_sepeti_akis.gif" style="width: 360px;" />

- Adjusted the space between vcontainers

- Checking for crash due to block definition in editor onsuccess

- Formatted phone number

- Glide error while loading images

- Not going back when pressing the back icon

- Resolving service requests issues

- Add subscriber dialog crash issue

- VTextfield input problem fix

- VInlineDatePicker background problem fix 

- Fixed inlineDatepicker date format

- VInlineDatePicker style fixed

- VTab component problems solved

- VAutoComplete component problems solved 

- VImg component problems solved

- VCard component problems solved

- Removed arrow icons when VSlide group is empty

- Fixed vTextfield styles

