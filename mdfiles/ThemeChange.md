# Theme Change

**default, devextreme and goldenlayout** CSSs are added with the same keywords at the application launch. The CSS of the pages is managed in settings.yaml and there are 2 ways of giving CSS:

1. One CSS array

![image](https://gitlab.softtech/quickpublic/quick/-/wikis/uploads/eb05fd5942f63a07c627d120eea7cde6/image.png)

*Figure 1. One CSS array*   
                      

   In this situation, all the CSS files under csspath will be applied to your pages. This means there isn't any alternative theme.

2. List of CSS arrays

  ![css](uploads/0fbd8a7d0bf95874933a882c5e996b43/css.PNG)

​                             *Figure 2. Multiple themes*


   If multiple theme options are possible, one theme should be set as default theme with the name "default" so that it can be applied from the beginning.

​     

## API

### Get Theme List

This returns the themes. For the first case where there is only one css array, this method will return an empty array as there is not an alternative theme. In the second case where there are multiple possible themes, this method returns the names of the themes in an array. getThemeList() returns [] for Figure 1 while it returns ["default","myTheme","darkTheme"]. 

> quick.Quick.theme.getThemeList()

In the editor, you can call getThemeList() as **Quick.theme.getThemeList()**. 
For example, if you call **Quick.theme.getThemeList()** in a combobox items prop, the combobox items will be the theme names defined in settings.yaml csspath.

![image](https://gitlab.softtech/quickpublic/quick/-/wikis/uploads/e5e3a868089a6cd7c6c1de67fc5f807c/image.png)

![image](https://gitlab.softtech/quickpublic/quick/-/wikis/uploads/97f6e0a929ddece656e269778b911a41/image.png)


### Set Theme

This method changes the theme and does not return anything. To be able to use this method, there should be multiple themes as shown in Figure 2.

In the editor, you can call setTheme method as Quick.theme.setTheme(themeName:string) in the events.

For example, if you call Quick.theme.setTheme(EdtrComp_98.internalValue) in a combobox's change(value) event, the theme will change immediately after you select a theme name from the combobox.

> quick.Quick.theme.setTheme(themeName: string)
>
> Example;
>
> ​        Quick.setTheme("compact");
>
> ​        Quick.setTheme("dark");
>
> ​        Quick.setTheme("dark-compact");

### Add Theme 

Add a theme from the settings.yaml cssPath field. This theme doesn't remove previously added ones, it is added as a new CSS. 

> quick.Quick.theme.addTheme(themeName: string)

### Remove Theme 

This method can be used to delete a previously added CSS address. Default added CSSs can be deleted as well.

> quick.Quick.theme.removeTheme(themeName: string)

![image](https://gitlab.softtech/quickpublic/quick/-/wikis/uploads/bfdf0523b241f6cf63dc85931e8ea24a/image.png)

  *Figure 3. custom dark theme is selected*


![image](https://gitlab.softtech/quickpublic/quick/-/wikis/uploads/22fa717dd4d7217b7b0d4223121c62ec/image.png)

  *Figure 4. myTheme is selected*


Below, you can find the sample usage of dynamic theme change related with the above examples.

Example file: <a href="" onclick="this.href='?q=qjsons/themeExamplePage.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>themeExamplePage</a>


## Dark Theme

To apply the dark themes of the component libraries(Vuetify, devextreme, goldenlayout), you can activate the setTheme method by giving the **"dark"** parameter and dark themes of all libraries are applied automatically. 

To revert to the open theme, the setTheme method must be given a **"light"** parameter.

> quick.Quick.theme.setTheme("dark")

or

> quick.Quick.theme.setTheme("light")


Example settings.yaml and cssPath field for dark theme is shown below:

```yaml 
  devextreme:
  - "https://cdn3.devexpress.com/jslib/20.1.3/css/dx.light.css"
  devextreme-dark:
  - "https://cdn3.devexpress.com/jslib/20.1.3/css/dx.dark.css"
  devextreme-light-compact:
  - "https://cdn3.devexpress.com/jslib/20.1.3/css/dx.light.compact.css"
  devextreme-dark-compact:
  - "https://cdn3.devexpress.com/jslib/20.1.3/css/dx.dark.compact.css"
  goldenlayout:
  - "https://golden-layout.com/files/latest/css/goldenlayout-light-theme.css"
  goldenlayout-dark:
  - "https://golden-layout.com/files/latest/css/goldenlayout-dark-theme.css"
```