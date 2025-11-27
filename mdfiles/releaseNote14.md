# Quick Release Notes - Sprint 14

## Vuetify 

###### **New Features:**

- process.changeProcessMetadata function added to quick 2.0 with websdk (0.2.664) .

  `process.changeProcessMetadata({ key })`

- use of GlobalStoreContext is provided when switching between Pages in the TKB project. (PLT-5027, PLT-6385) 

- The samples of the documents were enriched as Typescript and Qscript. In addition, samples can be opened directly in the editor. 

- Added Capera option and link to the project selection in the editor.  

  

###### **Bug Fixes:**

- When Quick.go() is called from the CustomComponent inside the qjson file loaded into the RenderingComponent, only the RenderingComponent is changed. (PLT-5366)

- The problem of not creating expansion panel with createComponent in Tab created with createComponent has been resolved. (PLT-6246)

- Fixed an issue with names added other than default child names of components (PLT-6055)

- Fixed an issue where subcomponents in the deleteComponent method remained in the component list (PLT-5994)

    

## Sprinkle

###### **New Features:**

- changeProcessMetadata function added to quick 1.0 with rallyshell ( 0.7.226)

  `process.changeProcessMetadata({ key })`

  

###### **Bug Fixes:**

- Quick 2.0 Component destroy mechanism has been fixed for Rally.

