# Release Notes 13.03.2023

### Plateau UI Release Notes - Sprint 6

#### ![party-horn 1](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/party-horn.svg) New Features


##### **UI Module Web**

- The **@stechquick** packages available in global npm (https://registry.npmjs.org/) have been transferred to scorenexus.isbank. In order for packages to be retrieved from scorenexus.isbank, the **.npmrc** file must have the following definition. For scorenexus.isbank, there must be **İş Bank Vpn** connection.

  ```js
  registry=https://scorenexus.isbank/repository/npm-stechquick-registry-proxy-repo/ 
  strict-ssl=false
  ```
- A document containing the steps to be followed in order to install the QUI application on İş Bank systems (ScoreTFS, XLRelease, Openshift ) has been prepared. In order to set an example, sample-qui application has been installed.

	* Creating a repo using Faber ( https://faber.isbank/ )
	* Viewing the project created with Faber in scoretfs https://scoretfs.isbank/
	* Creating a QUI project, making nginx.conf definitions and dockerfile definitions
	* Build and Deployment steps
	* Openshift definitions ( https://console-openshift-console.apps.vega.kube.intisbank/ )

- In IAM integration, it is provided to open the loginless pages before IAM login. Infrastructure has been made ready for IAM Unsecure Pages to be opened. The pages to be used as **unsecurePages** must be defined in the settings.yaml file.  

  ```js
  backendInf:
  iam:
    active: false
    options:
      url: 'https://identity-provider.emtia.fafplatform.onplateau.com/auth/'
      realm: emtia
      clientId: ui-web-client
      onLoad: login-required
      identityProvider:
        type: queryString
        order: 2
    pkceMethod: "S256"
    unsecurePages: 
      - /static/qjsons/page1.qjson
      - /static/qjsons/page2.qjson
  ```
  
- **VRangeSlider** 
  
  Added Events:
  
	| Name | Description                   |
	| --------- | ----------------------------- |
	| change(value: any[])     | Emitted when the input is changed by user interaction |
	| input(value: any[])     | The updated bound model |
	
- **VSlider**

  Added Events:

	| Name | Description                   |
	| --------- | ----------------------------- |
	| change(value: number)     | Emitted when the input is changed by user interaction |
	| input(value: number)    | The updated bound model |


- **VTextField**

  Added Props:
  
  | Name      | Type    | Default | Description       |
  | --------- | ------- | ------- | ----------------- |
  | color | string | undefined   | Applies specified color to the control - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)) |


- **dateFromNow()** Data Formatting method has been added. it is used to get the difference in time between one time and the present time.
	> dateFromNow(dateString: string, formatType?: string) : string
	> UI settings.yaml param: displayDateFormat
	> Default formatType : "DDMMYYYY"
	> > ```js
	> > let fromNow = quick.Quick.dateFromNow("01032023"); // present time 08/03/2023
	> > output for language TR : "7 gün önce"
	> > output for language EN : "7 days ago"
	> > ```
	> > ```js
	> > let fromNow = quick.Quick.dateFromNow("02/03/2023","DD/MM/YYYY"); // present time 08/03/2023
	> > output for language TR : "6 gün önce"
	> > output for language EN : "6 days ago"
	> > ```

- **store.deleteAll()** method has been added.

	> quick.store.deleteAll(name: string)
	>
	> > ```js
	> > quick.store.deleteAll('&') --> Delete All SharedStore
	> > quick.store.deleteAll('$') --> Delete All GlobalStore
	> > quick.store.deleteAll('#') --> Delete All BagStore
	> > quick.store.deleteAll('default')  --> Delete All PageStore
	> > ```

- VAppBar component has been restricted to being at the top of the page when used in the editor for mobile design.

- VFooter component has been restricted to being at the bottom of the page when used in the editor for mobile design.

- VExpansionPanels, VCarousel, VStepper, VSlideGroup components have been shifted to template component. Opens with their children, when one of them selected.

	**VCarousel template**

    <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VCarousel/VCarouselTemplate.png" width="640" />

	**VExpansionPanels template**

    <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VExpansionPanels/VExpansionPanelsTemplate.png" width="640" />
	
    **VSlideGroup template**	

    <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VSlideGroup/VSlideGroupTemplate.png" width="640" />
	
    **VStepper template**

    <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VStepper/VStepperTemplate.png" width="640" />

      
##### **UI Module Android**

- Monoapp analysis was done.

##### **UI Module IOS**

- Requests fired on app launch converted to single request.

- Dynamic font addition analysis performed.

- iOs General Support

- Abone Sepeti screen development support.

- işCep integration.

- StudioApp designed.

- StudioApp development.


##### **UI Module SuperApp**

- Logging infrastructure was established for SuperApp, post-test arrangements were made. 


#### ![bugs](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/bugs.svg) **Bug Fixes**


##### **UI Module Web**

- **QRichText** component's ToolBarcolor prop has been fixed. ( https://jira.softtech.com.tr/browse/PLT-15040 )
  
  >ToolBarcolor = 'blue'
  
  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QRichText_ToolBarcolor.PNG" width="640" />
  
- Fixed the **QPhoneInput** component formatting the phone number according to the selected country. 
  
  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QPhoneInput_FormatPhoneByCountryCode.PNG" width="640" />


- Resolved an issue regarding failing HTTP requests using localproxy file from QUI projects.

- A bug in the dynamic menu feature of the VNavigationDrawer component has been fixed.

- A bug in the dialog inline date picker feature of the VDatePicker component has been fixed.

- Removed the inline date picker feature of the VDatePicker component.

- For the vuetify components, the vuetify links found in the Docusaurus and quick Editor have been edited.

  
##### **UI Module Android**

- Abone Sepeti bugs fix.

- VInlineDatepicker date format fixed.

- Textfield text alignment fixed, append icon added.

- Fixed VTab issue.

- InlineDatepicker problems solved.

- Vselect issues resolved.

- Checkbox issues fixed.

##### **UI Module IOS**

- InlineDatePicker default cornerRadius issue fixed.

- Vtextfield padding problem fixed when icon exists

- Vtextfield partial white background fixed when placeholder is empty.

- Footer and appbar bugfix for absolute prop.

##### **UI Module Mobile Support**

- AboneSepeti findings were analyzed and improvements were made. 

