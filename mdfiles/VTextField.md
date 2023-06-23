## VTextField

### Masking Usage

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VTextField/textfield-1.png)

Format prop is setting input mask options on VTextField components

| Prop         | options (string)                            | Description                                |
| ------------ | ------------------------------------------- | ------------------------------------------ |
| format       | number, creditcard, email, ipaddress, phone,iban,onlyAlphabetic, regex, bigdecimal | Format types                               |
| formatValues |                                             | Specific format options for number formats |


## Examples

### onlyAlphabetic 

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VTextField/textfield-2.png)

<a href="" onclick="this.href='?q=qjsons/onlyAlphabetic.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>onlyAlphabetic</a>


### Credit Card

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VTextField/textfield-3.png)

<a href="" onclick="this.href='?q=qjsons/creditcard.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>creditcard</a>

### Email

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VTextField/textfield-4.png)

<a href="" onclick="this.href='?q=qjsons/email.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>email</a>



## Number Format Usage

The following format options can be used to format the ‘number’ values. However, if groupseperator and radixpoint are set with the use as default option in the settings of the application, these values you set will be invalid.

### Number Format Options

| Options             |                     Values                      |                         Description                          | Type    |
| ------------------- | :---------------------------------------------: | :----------------------------------------------------------: | ------- |
| alias               | numeric, currency, decimal, integer, percentage | The defaults are those defined in the base numeric alias. The currency alias and others are derived from the numeric alias and can have other defaults. | string  |
| digits              |                                                 | The value can be a number, *, or a quantifier syntax like 2,4 When the quantifier syntax is used, the digitsOptional option is ignored | number  |
| digitsOptional      |                   true,false                    |    Specify wheter the digits are optional. Default: true     | boolean |
| enforceDigitsOnBlur |                   true,false                    | Enforces the decimal part when leaving the input field. Default: false | boolean |
| radixPoint          |                                                 |                 Digit sembols .default: "."                  | string  |
| groupSeparator      |                                                 |           thousand seperator sembols. default: ""            | string  |
| allowMinus          |                   true,false                    |                Allow to enter -.Default: true                | boolean |
| prefix              |                                                 |                 Define a prefix.Default: ""                  | string  |
| suffix              |                                                 |                 Define a suffix.Default: ""                  | string  |
| min                 |                                                 |               Minimum value.Default: undefined               | number  |
| max                 |                                                 |               Maximum value.Default: undefined               | number  |
|shortcuts|  | Define shortcuts. This will allow typing 1k => 1000, 2m => 2000000. To disable just pass **null** **Default: {k: "000", m: "000000"}** | {k: number, m: number }
| rightAlign          |              default: **true**                  |               Align the input to the right             | boolean  |


### Number Format Usage

- Drag and Drop VTextField component

- Set format prop 'number'

- Set formatValues prop with needed format options 

  **Example Setting FormatValues**

  {'alias'='decimal','groupSeparator'='.','radixPoint'=',','digits'=2,'enforceDigitsOnBlur'=true}


![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VTextField/textfield-5.png)

<a href="" onclick="this.href='?q=qjsons/number.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>number</a>

## BigDecimal Format Usage

The following format options can be used to format the ‘bigdecimal’ values. However, if groupseperator and radixpoint are set with the use as default option in the settings of the application, these values you set will be invalid.

### BigDecimal Format Options

| Options             |                     Values                      |                         Description                          | Type    |
| ------------------- | :---------------------------------------------: | :----------------------------------------------------------: | ------- |
| digits              |                                                 |                 fractional digits count                      | number  |
| radixPoint          |                                                 |                 Digit sembols .default: "."                  | string  |
| groupSeparator      |                                                 |           thousand seperator sembols. default: ""            | string  |
| integerDigits       |                                                 |                   integer digits count                       | number  |


### BigDecimal Format Usage

- Drag and Drop VTextField component

- Set format prop 'bigdecimal'

- Set formatValues prop with needed format options 

  **Example Setting FormatValues**

  {'groupSeparator'='.','radixPoint'=',','digits'=2,'integerDigits'=16}


### Regex Format Usage
- Drag and Drop VTextField component. 
- Set format prop 'regex'.
- Set formatValues prop with regex value.

Alert: "\\" character must be used before "{". Ex: [0-9]{2}[A-Z]{24} must be [0-9]\\{2}[A-Z]\\{24}

  **Example Setting FortmatValues**

    {'regex' = '[0-9]\{2}[A-Z]\{24}'}



### Formatted Component Value
To get input value from the component, use the getUnmaskedValue method
```ts
let compValue = components.{{compQID}}.extention.getUnmaskedValue()
```

# SAMPLE QJSONS
<a href="" onclick="this.href='?q=qjsons/VTextField_formatValue_specialChars.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VTextField_formatValue_specialChars</a>

<a href="" onclick="this.href='?q=qjsons/VTextField_formatValue_exceptLetters.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VTextField_formatValue_exceptLetters</a>

<a href="" onclick="this.href='?q=qjsons/VTextField_formatValueSample1.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VTextField_formatValueSample1</a>

<a href="" onclick="this.href='?q=qjsons/VTextField_formatValueSapmle2.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VTextField_formatValueSapmle2</a>

<a href="" onclick="this.href='?q=qjsons/VTextField_keyDown.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VTextField_keyDown</a>

<a href="" onclick="this.href='?q=qjsons/VTextField_rangeOfNumber_validation.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VTextField_rangeOfNumber_validation</a>

<a href="" onclick="this.href='?q=qjsons/VTextField_customValidation.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VTextField_customValidation</a>

<a href="" onclick="this.href='?q=qjsons/VTextField_FocusExample.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VTextField_FocusExample</a>


<!-- NLP: Input alanı kullanımı | Textfield | Textfield kullanımı | Girdi yazma | Sayı değeri girme | Input formatlama | Kullanıcıdan input alma | İnteraktif olarak veri girme | Input değerini başka componentte kullanma | Input değerini nasıl tutarım | Kullanıcıdan data alma | Kullanıcıdan nasıl data alırım | Yazı girme | Sayı girme | Girilen değere karakter sınırı eklemek istiyorum | Alana değer girilemesin istiyrum | Textfield disable yapma | Input | Text input | Standart input | Textfield formatları | Textfield properties | Textfield methods | Textfield formats -->