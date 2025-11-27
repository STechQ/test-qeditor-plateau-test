# Comparison
A border and tooltip are added to the component as a result of comparing the 2 values ​​given to the fields with QLegend component on the page. One of the 3 results is reflected in the component. 
1. Saved --> When the value field is settled but compare field is empty
2. Updated --> When the value field is different than the compare field
3. Removed --> When the compare field is not empty but the value field is

![QLegendCompareTextField](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QLegend/QLegendCompareTextField.png)

## Comparison of Given Values
The fields below must be filled in order to compare the two values ​​on the component.
- **qValue**(Current component value)
- **compareValue**(Field that helds tooltip value)
- **compareText**(Compared value to be displayed in Tooltip)
- **compareTableValue**(Current value to be displayed in QLegend table)

These fields may vary according to the component behavior. Following table shows the component value dictionary.

| Component         | Value Field | Compare Value |
| ----------------- | ----------- | ------------- |
| VTextField        | qValue      | compareValue  |
| VSelect           | qValue      | compareValue  |
| VCombobox         | qValue      | compareValue  |
| VRadioGroup       | qValue      | compareValue  |
| VCheckbox         | qValue      | compareValue  |
| VInlineDatepicker | qValue      | compareValue  |
| VInlineTimepicker | value       | compareValue  |
| VDataTable        | items       | compareValue  |

```js
// Saved(Green)
textFieldQID.qValue = 'Saved Value'
textFieldQID.compareValue = undefined

// Update(Blue)
textFieldQID2.qValue = 'Updated Value'
textFieldQID2.compareValue = 'Compare Value'

// Remove(Red)
textFieldQID.qValue = undefined
textFieldQID.compareValue = 'Removed Value'
```

**Note**: _When the value field and compare fields are equal, there will be no addition to the component._

## Comparison on VDataTable
In order to compare the data in a table and apply the above-mentioned coloring to the relevant columns in different areas, the following items must be provided:
- **QLegend** component must be on the page
- **CompareDataField** prop has to be filled on VDataTable
- items and compareValue props must be given

Comparison of rows is done over the fields within the given objects where the **CompareDatafield** key matches. If a table column has no slot child, **VChip** within the Tooltip will be added for that column. **Tooltip** value will be compared value and Chip'text value will be the current value.
![QLegendDataTable](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QLegend/QLegendDataTable.png)
## QLegend

This component must be added on the page in order to show changes on the components.
![QLegendDataTable](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QLegend/QLegend.png)

### Sample Page
<a href="" onclick="this.href='?q=qjsons/QLegend.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>QLegend Border</a>