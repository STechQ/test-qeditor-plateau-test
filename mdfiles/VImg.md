## VImg

## Quick

| Attribute | Description          |  Type   |  Default   |
| --------- | -------------------- | :-----: | :--------: |
| QID       | Id of the component  | String  | EdtrComp_1 |
| Render    | Render the component | Boolean |     -      |

## Others

| Attribute    | Description                                                  | Type           |     Default     |
| ------------ | ------------------------------------------------------------ | -------------- | :-------------: |
| alt          | Alternate text for screen readers                            | String         |    undefined    |
| aspect-ratio | Calculated as width/height. Will be calculated automatically if omitted | String-Number  |    undefined    |
| contain      | Prevents the image from being cropped if it doesn’t fit      | Boolean        |    undefined    |
| eager        | Will force the components content to render on mounted.      | Boolean        |      false      |
| height       | Sets the height for the component                            | String-Number  |    undefined    |
| lazySrc      | Something to show while waiting for the main image to load, typically a small base64-encoded thumbnail. Use [vuetify-loader](https://github.com/vuetifyjs/vuetify-loader) to generate automatically | String         |    undefined    |
| maxHeight    | Sets the maximum height for the component                    | String-Number  |    undefined    |
| maxWidth     | Sets the maximum width for the component                     | String-Number  |    undefined    |
| minHeight    | Sets the minimum height for the component                    | String-Number  |    undefined    |
| minWidth     | Sets the minimum width for the component                     | String-Number  |    undefined    |
| options      | Options that are passed to the [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) constructor. | Object         |       {}        |
| position     | Overrides the default to change which parts get cropped off. Uses the same syntax as background-position | String         | 'center center' |
| sizes        | Define sizes of Snackbars                                    | String         |    undefined    |
| src          | The image URL. This prop is mandatory                        | String-Object  |    undefined    |
| srcset       | A set of alternate images to use based on device size        | String         |    undefined    |
| transition   | The transition to use when switching from `lazy-src` to `src` | Boolean-String | fade-transition |
| width        | Sets the width for the component.                            | String-Number  |    undefined    |

## Example



![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VImg/VImg-1.png)


![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VImg/VImg-2.png)


[Images.json](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/VImg/images.qjson)

# QJSON SAMPLES

<a href="" onclick="this.href='?q=qjsons/images.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>images</a>

<a href="" onclick="this.href='?q=qjsons/tiffImage.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>tiff Format Image</a>


