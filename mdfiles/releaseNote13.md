Quick Release Notes - Sprint 13

Vuetify (version:)
------------------

### **New Features:**

-   The problem in the Custom Component validation feature has been
    added. Methods like Quick.reset, Quick.validate, Quick.validateAll
    can now work for custom component as well.

-   **Restored** event has been added on the messaging component with
    rshell version 0.7.255. This event is triggered when the page is
    loaded from history, such as backing up through the browser.

    ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/messaging/MessagingEvents.png)

-   The getDeviceId() method has been added to the editor. Thus,
    improvements can be made on the editor according to iOS and Android
    device ID information. For use, you can call it as
    **Quick.platform.getDeviceId()**.

-   VInlineDatePicker, VChekbox and VRadiogroup components have been
    added in comparison
    components.![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ComparisonComponents.png)

-   The **compareText** field is opened on comparison components, which
    can be used in cases where compareValue is not desired to be
    displayed as tooltip
    content.![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/compareText.png)

-   Disable loading icon on web service call.

    ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/DisableLoading.PNG)

-   Dynamic header manipulation on web service call.

    ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/pipeline.gif)

-   VInlineTimePicker click:hour event added (PLT-5734)

     

-   VSubElement component added. This component will be used instead of
    VCardTitle and VListTitle by setting class property.

-   VChipGroup component has been added and test written. (PLT-5781)

    ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VChipGroup2.png)

     

-   Carousel change event has been added (PLT-6090)

-   VInlineDatepicker empty value has been changed as null. (PLT-5855)

-   VTreeView selectionType prop has been added.

-   VDataTable selection prop is added.

-   VRadioGroup multiple prop is added.

-   Splitting the text of the Qlabel by new line \\n feature is added to
    QLabel

    ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QLabel_newLine.PNG)

     

-   VirtualScroll component added to editor.

-   VInlineTimePicker alignment problem is resolved (PLT-6152)

    ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VInlineTimePicker_alignment.PNG)

-   In case of using Plateau UI in a single tab, it is provided to
    perform the process on the common renderer and the load is reduced.

-   Multiple domain structure on container services has been removed
    from extensions and turned into a built method.

-   Rally UI Plateau UI have been made functionally working with the new
    build structure.

 

### **Bug Fixes:**

-   The Rendering Component RenderGo method can be used for
    re-rendering.

-   Comparison of VCheckbox component in VDataTable has been fixed.

-   **QLegend** validation problem is resolved(PLT-6146).

-   **QLegend** multiple selection for VCombobox and VSelect problem are
    resolved. (PLT-6145).

    ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QLegend_MultipleSelection.gif)

-   Tooltip location problem. (PLT-6052)

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/TooltipLocationProblem.png)

-   GroupBox Component's visible prop not working problem is fixed.
    (PLT-5622)
-   BlockRender is not working on web service call. (PLT-6229)
-   Datepicker alignment is resolved. (PLT-6035)
-   QLabel localization prop added. (PLT-6069)

 

Sprinkle(sprinkle-ui version:)
------------------------------

### **New Features:**

-   RallyColumnSelect validation property is added.

    ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/RColumnSelect_validation.png)

     

-   RCustomerSearch note properties are added. (PLT-6116)

-   RTable multipleselection validation.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/RTableMultipleSelectValidation.PNG)

### **Bug Fixes:**

-   VDataTable horizontal scroll problem occuring in ui is resolved
    (PLT-6135)

 

 
