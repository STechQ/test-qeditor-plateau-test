

## Quick

| Attribute | Description          |  Type   |  Default   |
| --------- | -------------------- | :-----: | :--------: |
| QID       | Id of the component  | String  | EdtrComp_1 |
| Render    | Render the component | Boolean |     -      |

## Others

| Attribute          | Description                                                  | Type    | Default |
| ------------------ | ------------------------------------------------------------ | ------- | :-----: |
| steps              | Define steps of QTutorial component, steps prop takes two parameters **text** and **compID**. **Text** parameter specifies the description of the step, **compID** specifies the component we want to include in highlight. | Array   |    -    |
| nextButtonLabel    | Next button label                                            | String  |  Next   |
| skipButtonLabel    | Skip button label                                            | String  |  Skip   |
| prevButtonLabel    | Previous button label                                        | String  |  Back   |
| doneButtonLabel    | Done button label                                            | String  |  Done   |
| hidePrevButton     | Hide the previous button in the first step? Otherwise, it will render a disabled button. | Boolean |    -    |
| showStepNumbers    | Show steps number in the red circle or not, `true` or `false` | Boolean |    -    |
| keyboardNavigation | Navigating with keyboard or not, `true` or `false`           | Boolean |    -    |

## Events

| Attribute     | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| beforeExit    | Trigger when you exit the QTutorial component or when you press the skip button |
| onafterchange | Trigger when you chane step of the QTutorial component       |
| oncomplete    | Trigger when you complete QTutorial component                |

### Methods

| Attribute | Description                                                  |
| --------- | ------------------------------------------------------------ |
| start     | Start QTutorial component                                    |
| goToStep  | Start QTutorial component from step that you define. (Exp: goToStep(2)) |

### 
## QTutorial Data Values
| Attribute | Description                                                  |
| --------- | ------------------------------------------------------------ |
| currentStepValue     | Get currentStep value of the component                                  |


# QJson Samples
<a href="" onclick="this.href='?q=qjsons/QTutorialFinalDemo.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>QTutorial</a>
