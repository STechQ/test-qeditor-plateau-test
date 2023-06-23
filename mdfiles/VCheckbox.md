## Checkbox

## Quick

| Attribute | Description          |  Type   |  Default   |
| --------- | -------------------- | :-----: | :--------: |
| QID       | Id of the component  | String  | EdtrComp_1 |
| Render    | Render the component | Boolean |     -      |

## Others

| Attribute         | Description                                                  | Type              |         Default          |
| ----------------- | ------------------------------------------------------------ | ----------------- | :----------------------: |
| class             | prop that determines the class to add to the checkbox        | String            |        undefined         |
| qValue            | Specifies the vmodel value of the checkbox.                  | Boolean           |          false           |
| color             | Applies specified color to the control - it can be the name of material color (for example `primary or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). | String            |        'primary'         |
| disabled          | Disable the input                                            | Boolean           |          false           |
| error             | Puts the input in a manual error state                       | Boolean           |          false           |
| errorCount        | The total number of errors that should display at once       | Number \| String  |            1             |
| errorMessages     | Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. | Array             |            []            |
| hideDetails       | Hides hint and validation errors. When set to `auto` messages will be rendered only if there’s a message (hint, error message, counter value etc) to display | Boolean \| String |        undefined         |
| indeterminateIcon | The icon used when in an indeterminate state                 | String            | '$checkboxIndeterminate' |
| inputValue        | The **v-model** bound value                                  | Any               |        undefined         |
| label             | Sets input label                                             | String            |      'My CheckBox'       |
| loading           | Adds a loading icon animation                                | Boolean           |          false           |
| multiple          | Changes expected model to an array                           | Boolean           |          false           |
| offIcon           | The icon used when inactive                                  | String            |      '$checkboxOff'      |
| onIcon            | The icon used when active                                    | String            |      '$checkboxOn'       |
| hint              | Hint text                                                    | String            |        undefined         |
| ripple            | Applies the [v-ripple](https://vuetifyjs.com/directives/ripple) directive. | Boolean\|Object   |           true           |
| rules             | Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string` | Array             |            []            |
| success           | Puts the input in a manual success state                     | Boolean           |          false           |
| successMessages   | Puts the input in a success state and passes through custom success messages. | String \| Array   |            []            |
| validateOnBlur    | Delays validation until blur event                           | Boolean           |          false           |
| readonly          | Puts input in readonly state                                 | Boolean           |          false           |


## Events

| Attribute         | Description                                           |
| ----------------- | ----------------------------------------------------- |
| click(mouseEvent) | Emitted when input is clicked                         |
| change(checked)   | Emitted when the input is changed by user interaction |

## Example

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VCheckbox/VCheckbox.png)


### QJson

<a href="" onclick="this.href='?q=qjsons/CheckboxDisabledExample.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>CheckboxDisabledExample</a>

<a href="" onclick="this.href='?q=qjsons/CheckBoxQvalue.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>CheckBoxGetValue Example</a>