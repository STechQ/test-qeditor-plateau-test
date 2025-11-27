## VFileInput

## Quick

| Attribute       | Description                      |  Type   |  Default   |
| --------------- | -------------------------------- | :-----: | :--------: |
| QID             | Id of the component              | String  | EdtrComp_1 |
| Render          | Render the component             | Boolean |     -      |
| DiscardSettings | DiscardSettings of the component | Boolean |     -      |



## **Others**

| Attribute         | Description                                                  | Type                        |             Default              |
| ----------------- | ------------------------------------------------------------ | --------------------------- | :------------------------------: |
| qValue            | includes attributes such as the name of the uploaded file, its size, when it was uploaded | Object                      |                -                 |
| accept            | prop that gives the file types to be accepted in string(e.g. : 'image/*') | String                      |                -                 |
| appendIcon        | Appends an icon to the component, uses the same syntax as `v-icon` | String                      |            undefined             |
| autoFocus         | Enables autofocus                                            | Boolean                     |              false               |
| chips             | Changes display of selections to chips                       | Boolean                     |              false               |
| class             | prop that controls the classes added on the component        | String                      |                -                 |
| clearIcon         | Applied when using clearable and the input is dirty          | String                      |             '$clear'             |
| clearable         | Add input clear functionality, default icon is Material Design Icons mdi-clear | Boolean                     |               true               |
| counter           | Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation. | Boolean \| Number \| String |            undefined             |
| counterSizeString | The text displayed when using the counter and show-size props. | String                      | '$vuetify.fileInput.counterSize' |
| dense             | Reduces the input height                                     | Boolean                     |              false               |
| disabled          | Disable the input                                            | Boolean                     |              false               |
| error             | Puts the input in a manual error state                       | Boolean                     |              false               |
| errorCount        | The total number of errors that should display at once       | Number \| String            |                1                 |
| errorMessages     | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the rules prop. This field will not trigger validation | String \| Array             |                []                |
| filled            | Applies the alternate filled input style                     | Boolean                     |              false               |
| flat              | Removes elevation (shadow) added to element when using the solo or solo-inverted props | Boolean                     |              false               |
| hideDetails       | Hides hint and validation errors. When set to `auto` messages will be rendered only if there’s a message (hint, error message, counter value etc) to display | Boolean \| String           |            undefined             |
| hideInput         | Display the icon only without the input (file names)         | Boolean                     |              false               |
| hint              | Details text                                                 | String                      |            undefined             |
| label             | Sets input label                                             | String                      |            undefined             |
| loading           | Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - primary, secondary, success, info, warning, error) or a Boolean which uses the component color (set by color prop - if it’s supported by the component) or the primary color | Boolean \| String           |              false               |
| multiple          | Adds the multiple attribute to the input, allowing multiple file selections. | Boolean                     |              false               |
| outlined          | Applies the outlined style to the input                      | Boolean                     |              false               |
| placeholder       | Sets the input’s placeholder text                            | String                      |            undefined             |
| prefix            | Displays prefix text                                         | String                      |            undefined             |
| prependIcon       | Prepends an icon to the component, uses the same syntax as `v-icon` | String                      |             '$file'              |
| prependInnerIcon  | Prepends an icon inside the component’s input, uses the same syntax as `v-icon` | String                      |            undefined             |
| rounded           | Adds a border radius to the input                            | Boolean                     |              false               |
| rules             | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` | Array                       |                []                |
| shaped            | Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled` | Boolean                     |              false               |
| solo              | Changes the style of the input                               | Boolean                     |              false               |
| suffix            | Displays suffix text                                         | String                      |            undefined             |
| showSize          | Sets the displayed size of selected file(s). When using true will default to *1000* displaying (kB, MB, GB) while *1024* will display (KiB, MiB, GiB). | Boolean \| Number           |              false               |
| singleLine        | Label does not move on focus                                 | Boolean                     |              false               |
| smallChips        | Changes display of selections to chips with the small property | Boolean                     |              false               |
| success           | Puts the input in a manual success state                     | Boolean                     |              false               |
| successMessages   | Puts the input in a success state and passes through custom success messages. | String \| Array             |                []                |
| truncateLength    | The length of a filename before it is truncated with ellipsis | Number \| String            |                22                |
| type              | Sets input type                                              | String                      |              'file'              |
| validateOnBlur    | Delays validation until blur event                           | Boolean                     |              false               |

 

## **Events**

| Attribute           | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| change              | Emitted when the input is changed by user interaction `File[]` |
| click:mouseEvent    | Emitted when input is clicked                                |
| click:prepend       | Emitted when prepended icon is clicked                       |
| click:prepend-inner | Emitted when prepended inner icon is clicked                 |
| click:append-outer  | Emitted when appended outer icon is clicked                  |
| click:append        | Emitted when appended icon is clicked                        |
| focus               | Emitted when component is focused                            |



### Slots

| Attribute     | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| append        | Adds an item inside the input and after input content        |
| append-outer  | Adds an item outside the input and after input content       |
| counter       | `{   props: {     dark: boolean,     light: boolean,     max: string | number,     value: string   } }` |
| default       | The default Vue slot.                                        |
| label         | Replaces the default label                                   |
| message       | `{   key: number, // the messages index,   message: string, // the message }` |
| prepend       | Adds an item outside the input and before input content      |
| prepend-inner | Adds an item inside the input and before input content       |
| progress      | Slot for custom progress linear (displayed when loading prop is not equal to Boolean False) |
| selection     | Slot for defining a custom appearance for selected item(s). Provides the current **index**, **text** (truncated) and file. |




![VFileInput-1](uploads/22cf03684221c628d35a9499c4083a18/VFileInput-1.png)
![VFileInput-2](uploads/5a3c8708ab424bcaabb3e7c1aa56cbd4/VFileInput-2.png)
![VFileInput-3](uploads/28c17fecc500a56d65fd492804e051da/VFileInput-3.png)

# SAMPLE QJSONS

<a href="" onclick="this.href='?q=qjsons/fileInput.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>fileInput</a>

<a href="" onclick="this.href='?q=qjsons/VFileInput_ImagePicker.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VFileInput_ImagePicker</a>

<a href="" onclick="this.href='?q=qjsons/VFileInputGetUploadedContent.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VFileInputGetUploadedContent</a>

<a href="" onclick="this.href='?q=qjsons/VFileInput-Slot-VIcon-Dolu.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VFileInput-Slot-VIcon-Dolu</a>

<a href="" onclick="this.href='?q=qjsons/VFileInput_ImagePicker.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VFileInput_ImagePicker</a>

<a href="" onclick="this.href='?q=qjsons/VFileInputGetUploadedContent.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VFileInputGetUploadedContent</a>

