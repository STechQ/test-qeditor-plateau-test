## Create Component

Creates a new component from given template component. 
1.   Make a new component in editor. It can be rendered or not by 'Render' prop. Template component can be any type like container, button etc.
2.   Accessing the component(s) easily **will be useful** in naming(QID) new component(s) that are easy to remember.
3.   In the template component, new data can be accesed with **data** prefix. The prop value of a component can be accessed as **data.newData** in order to assign newly created values.
4.   New component can be placed in 3 type of location in the page: 
     *   Inserts the new component **before** the location of the template component(place = 'Before')
     *   Append then new component **after** the location of the template component(place = 'After')
     *   If place parameter is not given or equals to 'Default', the new component will be appended to **end of the page**. (place = 'Default' | undefined)
5.   Call Quick.createComponent when it is needed to with above parameter types.
6.   New component(s) will be created as **templateQID + '_' + newCompQID** parameter.
7.   placeQID is the parameter indicating which component the newly created draft components will be placed in.
**Note: ** All components should be created with unique QIDs. If newCompQID field is not unique, then existing component will be replaced by the new one and can not be reachable any more.

> quick.Quick.createComponent({templateCompQID: string, newCompQID: string, dataSource?: any, place?: 'Before' | 'After' | 'Default', placeQID?: string})
> > ```js
> > quick.Quick.createComponent({templateCompQID='EdtrComp_1', newCompQID='uniqueValue', dataSource= {name='Test Comp Name', id=[{test='object'}], place='Before', placeQID='EdtrComp_2'})
> > ```

Example file: <a href="" onclick="this.href='?q=qjsons/dynamicComp.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>Dynamic Component</a>

Example file: <a href="" onclick="this.href='?q=qjsons/placeQidDynamic.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>PlaceQID Dynamic Component</a>


## Delete Component

deleteComponent method can be used to delete a created component. This method also deletes all the child components and breaks the connection with the parent component if it is exist.

> quick.Quick.deleteComponent(comp: ComponentInstance)
> > ```js
> > quick.Quick.deleteComponent(EdtrComp_1)
> > ```

Example file: <a href="" onclick="this.href='?q=qjsons/deleteComponent.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>Delete Component</a>

## Find Component Relative

This method returns the desired dynamic component created with the template, by giving child component inside that dynamic created component. You should pass the child component instance and desired component template id as parameter.

> quick.Quick.findCreateComponentRelative (sourceComp: ComponentInstance, targetCompID: string)
> > ```js
> > const component = quick.Quick.findCreateComponentRelative(quick.this,"tmpCrsItemLatePayment")
> > ```


Example file: <a href="" onclick="this.href='?q=qjsons/findAndDeleteRelatedDynamicComp.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>Find And Delete Related Dynamic Comp</a>

## Get Component

If the id of a component is unknown (it may be a newly created component)
- getComponent can be used if the component is created and can not be found on "components" keyword but the id of it known
- getComponentIdByInstance can be used to access the id of this component.

> quick.Quick.getComponent(compID: String)
> > ```js
> > quick.Quick.getComponent("EdtrComp_1")
> > ```

> quick.Quick.getComponentIdByInstance(componentInstance: ComponentInstance)
> > ```js
> > quick.Quick.getComponentIdByInstance(sourceComp: ComponentInstance)
> > ```

## Update Component

Quick.updateComponent can be used to update a component. The instance of the component must be given as a parameter.

> quick.Quick.updateComponent(componentInstance: any)
> > ```js
> > quick.Quick.updateComponent(components.EdtrComp_1)
> > ```

## Set Component Property With Its Children 

Setting the property of a component can be done as stated above (interaction between components) or via the Quick.setComponentsProperty API. 

> quick.Quick.updateComponent(compId: string, propertyName: string, propertyValue: string)

This method changes the property of the component, and if it has sub-components, they also set their properties with the same value given.

## Set Component Class

Since the class properties of the components are located differently from the other properties, there is a need to use a special metho which is called Quick.setComponentClass. 

> quick.Quick.setComponentClass(componentInstance: IComponent, classes: Array<string>)
> > ```ts
> > quick.Quick.setComponentClass(components.EdtrComp_1, ["testClass1", "testClass2"])
> > ```