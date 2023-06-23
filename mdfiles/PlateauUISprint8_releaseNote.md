# Release Notes 24.04.2023

### Plateau UI Release Notes - Sprint 8

## ![](https://stechq.github.io/cdn/release/notes/plateau-studio/plateau-studio-common/plateau-studio/party-horn.svg) New Features



#### **UI Module**

-  **reset** method added to QReCaptcha component. Method resets the reCAPTCHA widget.

> ```ts
> components.myReCaptcha.reset();
> ```

- The Preview Mode state of the current qjson is now holding. When a qjson is selected, it opens with the mode (Preview or Edit Mode) as it was left.

- A new masking type is added to the VTextField component. It provides input masking for Turkish phones with country code. It can be selected in the format prop with the name:  turkishPhoneWithCountryCode.
<img src="https://stechq.github.io/cdn/release/notes/plateau-studio/plateau-web/release-notes/v1.3.0/phone-masking.gif" width="640"/>

- Changed default value of VContainer component class to 'container' and added old default value 'container--fluid' as prop options.

- noGutters property added to VRow and VCol components for removing deafult margin-padding.

- Case sensitive settings written for button and tab components in the editor were not visible in livepreview. With the new style improvements, these css values are added by default to these components.



- Layout area has been updated. Align and justify have been swapped depending on the direction.
<img src="https://stechq.github.io/cdn/release/notes/plateau-studio/plateau-web/release-notes/v1.3.0/layout.gif" width="640"/>

- VMenu component now comes with a default template when added to the page.
<img src="https://stechq.github.io/cdn/release/notes/plateau-studio/plateau-web/release-notes/v1.3.0/VMenuTemplate.gif" width="640"/>
<br />

- **line-height** property is added under the style tab of QLabel component.
<img src="https://stechq.github.io/cdn/release/notes/plateau-studio/plateau-web/release-notes/v1.3.0/line-height.png" width="640"/>



#### **Plateau Mobile**

**iOS**
- Miniapp simulator updated with new frameworks.
- Added studioapps to the application list with a link on the client.
- Mapped fonts added to project.
- Added style props in QDocumentViewer, VDialog, VNavigationDrawer, VMenu.
- Updated style props of VAlert, VSlider.
- Style props code refactoring started for improving code quality.

**Android**
- Added custom component platform setting information.
- Added style props in VSlideGroup, Messaging, VRadioGroup, VMenu.


**UI Module SuperApp Support**

- Improvements were made to the screens according to the changes made in the Abonesepeti designs.
- iOS SuperSdk-İşCep merged.


## ![](https://stechq.github.io/cdn/release/notes/plateau-studio/plateau-studio-common/plateau-studio/bugs.svg) **Bug Fixes**


#### **UI Module**

- In Qjson requests, the header information defined in settings.yaml file is removed. Therefore, unused header additions will not be added in Qjson requests.

- Microsoft font weight list fixed with the following:
    - 400, 600 and 800 weights in Arial type
    - 100, 400. 500, 700 and 800 weights in Segoe UI type
<img src="https://stechq.github.io/cdn/release/notes/plateau-studio/plateau-web/release-notes/v1.3.0/microsoftFonts.gif" width="640"/>

- Fixed an issue when selecting more than two breakpoints. Thus, a breakpoint can be selected with a maximum of 4 separations.
<img src="https://stechq.github.io/cdn/release/notes/plateau-studio/plateau-web/release-notes/v1.3.0/BPChanges.gif" width="640"/>

- Fixed bug in layout multiplexing to get responsive display.

- Default margin and padding values (for VContainer, VCol, VRow and VBtn) are now displayed in Style Editor.

- Fixed a bug that caused VBtnToggle style color changes to not work properly.  

- Fixed a bug that caused VBtnToggle-VBtn border style changes to not work properly.

**Android**

- VTextfield text align issue fixed. 

- VSlider, VRangeSlider change and input event fixed.

- VCarousel change event fixed.

- QDocumentViewer pdf format fixed. 

- ProgressLinear align issue fixed.

- ProgressLinear color issue fixed.

- VSlideItem background issue fixed.

  

**iOS**

- QLabel font issue fixed.

- MiniApp crash improvements made.
