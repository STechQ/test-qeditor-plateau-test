## Before Using: About TypeScript
If you need information about TypeScript, you can check out the resources below:
*  [What is TypeScript?](https://github.com/microsoft/TypeScript)
*  [TypeScript In 5 Minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
*  [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)

## Where Can I Use Typescript In Quick?
Currently, available **in component events**. 

## Usage

### How To Use In Quick?
In the code editor, you should choose the TypeScript from the language options combobox as seen below. If you don't choose anything, **by default [QScript](https://gitlab.softtech/quickpublic/quick/-/wikis/QScript) will prevail**.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/typescript/clickTypescript.png)

### How To Access The Quick Library?
The Quick Library is under the "quick" object.

| Intellisense preview | Example (EM.trace) |
| ------ | ------ |
| ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/typescript/intellisensePreview.png) | ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/typescript/emTrace.png) |

#### Some important uses of the Quick Library
##### Data Storage & Data Transfer Between Pages with Store
>quick.store.set(name: string, value: any);
```
quick.store.set('personalInfo', storeData);
```

##### Transition Between Pages with quick.Quick.Go
>quick.Quick.go(qjsonPath: string)
```
quick.Quick.go('exampleMicroUI/secondExamplePage.js')
```

**For other usage details, please check the "[QScript Document](https://gitlab.softtech/quickpublic/quick/-/wikis/QScript)".**

### How To Access Components?
Components are under the "components" object.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/typescript/accessComponent.png)

* **Sample 1:** Directly setting the value of a component.

```
components.UserNameComp.value = "Orbay";
```

* **Sample 2:** Getting and setting the value of a component through an object. 

```
interface IUser {
    id: number;
    name: string;
}

const myUser: IUser = {
    id: 1,
    name: "Orbay"
};

components.UserNameComp.value = myUser.name;
```
## Ceveats
### return from a function vs an event
```ts
function count(items:Array<number>, search){
    const result = items.filter(item => item == search).length;
    return result; // return of a function
}

const items = [1,2,3,4,5,4];
const retVal = count(items, 4);

quick.EM.trace("result: " + retVal);
quick.return(retVal); // return of an event (stop execution and return)
quick.EM.trace("this line will not execute");
```