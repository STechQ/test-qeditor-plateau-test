| Type | Example |
| ------ | ------ |
| String | `'Hello OmniScript'`|
| String Literal | `'Hello {customer.name}'`, `'6+9 is {6+9}'` is same as `'6+9 is ' + (6+9)`|
| Boolean | `true`,`false`|
| Number | `5`,`129`|
| Negative Number | `0-5` (wrong:`-5`,`+5` ) |
| Array | `[1, 2, 3]` |
| Object | `{a=1, b=2, a.['a-b']=3}` |

## Comment
```js
//comment
a=1 //comment
//comment
```

## Assignment
```js
a=1
b='hello'
c=true
d=[1,2,3]
e={a=1, b=2, c=3}
```
## Function Call
```js
a=[1,2,3]
a.push(5)
```

## if-else
`(!)You should use curly braces.`\
`(!)Closing curly brace must be at the end of last line.`
```js
if(a == '1')
{ ...
  ...}
else if(a == '2')
{ ...
  ...}
else
{ ...
  ...}
foreach(item in array){
  if(item.obj!=null){
    EM.trace()}
  else  if(item.otherObj!=null){
    EM.trace()}
emptyObj={}}    
```

## foreach
```js
foreach(item in itemList){
  ...
  ...
}
```

## break
```sh
foreach (item in itemList){
  if (...){
     break
  }
}
```

## continue
```js
foreach (item in itemList){
  if (...){
     continue
  }
}
```

### foreach & if & break & continue & return example
```js
a = [1,2,[1,2,3,4,5],4,5]
retVal = []
foreach (item in a){
    if (Math.floor(item) != item){
        foreach(z in item){
            if (z==4){
                continue
            }
            retVal.push(z)
        }
        continue
    }
    if (item == 2){
        continue
    }
    if (item ==4){
        break
    }
    retVal.push(item)
}
retVal  // return value is [1, 1, 2, 3, 5]
```
## return
### normal return
although example below returns a value sometimes stopping execution and returning a value comes handy.
```js
 retVal
 ```
 ### stop and return
in a situations where execution should be stopped a return call can be used
 ```js
 return (retVal)
 EM.trace('this line is not executed')
 ```
another example
```js
foreach (item in items) {
    if (...){
        return(item) // return with item
    }
}
return(null) // return with null
```
## Number Class

### parse() 
> Converts an string value to a number
Number.parse(value: string)
```js
Number.parse('49546.3900')     
    --> output: 49546.39
```
## Date Class

### now()
returns a single moment in time in a platform-independent format.
```js
currentDate=Date.now()
```

### parse()
> Converts an string value to a date
 Date.parse(value: string)
```js
Date.parse('2019-07-10T00:00:00.000+0300')  
   --> output: Wed Jul 10 2019 00:00:00 GMT+0300 (GMT+03:00)
```
### compare()
Comparing two dates in qScript: \
`Date.compare(firstDate, secondDate)` returns true,false or "Equal" by comparing the first parameter with the second parameter. Parameters are accepted as Date type.
>`Date.compare('2019-10-03', '2019-10-04')` returns false \
`Date.compare('2019-10-04', '2019-10-03')` returns true \
`Date.compare('2019-10-04', '2019-10-04')` returns "Equal"

### time()
Returns the number of milliseconds since 1970/01/01.
```js
obj=Date.time()
EM.trace(obj)
```
### ISOString()
Returns a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively) and it takes client's current time.
```js
currentDate=Date.ISOString()
EM.trace(obj)
```
## Math Class

### floor
> Math.floor
### random()
> Math.random(min: number, max: number)

### findIndex()
Returns the index of searched key in an array.
> Math.findIndex(array, searchKey, findIndexKey)
```js
myArr=[{title='My Title', id=0, details=[{title='Detail 1', value='Value 1'}],remarks={title='a',value=0}},
{title='My Title2', id=1, details=[{title='Detail 2', value='Value 2'}],remarks={title='a',value=0}}]
searchObj=myArr[1]
index=Math.findIndex(myArr, 'id', searchObj.id)
```
Can be used where index of a search object is now known such as event handlers.
### round()
Round a number to the nearest integer. It also rounds digits number with given index parameter
> roundedNumber=Math.round(number, index)

```js
roundedNumber=Math.round('2.45')         // sets roundedNumber to **2** \
roundedNumber=Math.round('2.55')         // sets roundedNumber to **3** \
roundedNumber=Math.round('2.5675839')    // sets roundedNumber to **3** \
roundedNumber=Math.round('2.5675839', 0) // sets roundedNumber to **3** \
roundedNumber=Math.round('2.5675839', 1) // sets roundedNumber to **2.6** \
roundedNumber=Math.round('2.5575839', 1) // sets roundedNumber to **2.6** \
roundedNumber=Math.round('2.4475839', 1) // sets roundedNumber to **2.4** \
roundedNumber=Math.round('2.5675839', 2) // sets roundedNumber to **2.57** \
roundedNumber=Math.round('2.5645839', 2) // sets roundedNumber to **2.56**
```

## Extentions
### String
#### length()
> Returns length of string
#### split(splitter: string)
> split(splitter: string)

```js
ExampleString = 'Simulated Data Plan'
SplittedString = ExampleString.split(' ')[0]
--> SplittedString output: 'Simulated'
```
#### indexOf(searchElement, index?)
> The indexOf() method returns the first index at which a given element can be found in the string, or -1 if it is not present.
```js
ExampleString.indexOf('Banana')
```
#### substring(startIndex:number,endIndex?:number)
> .substring(startIndex:number,endIndex?:number)

```js
ExampleString = 'Simulated Data Plan'
SubString1 = ExampleString.substring(10)
--> SubString1 output: 'Data Plan'
SubString2 = ExampleString.substring(0,9)
--> SubString2 output: 'Simulated'
```
### Array
#### length()
> Returns length of array
```js
fruits = ['Banana','Apple', 'Mango']
EM.trace(fruits.length()) 
--> console output: 3
```
#### push()
> Adds new items to the end of an array
```js
fruits = ['Banana','Apple', 'Mango']
fruits.push('Kiwi')
```

#### concat()
> The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
```js
array1 = ['a', 'b', 'c']
array2 = ['d', 'e']
array3 = array1.concat(array2)

output ---> ['a', 'b', 'c', 'd', 'e']
```

#### remove(index:number)
> Removes an object from given array with given index(number) parameter
```js
fruits = ['Banana','Apple', 'Mango']`
fruits.remove(2)
```
#### sort()
> Sort an array with no parameter.
```js
fruits = ['Banana','Apple', 'Mango']`
fruits.sort()
```
#### indexOf(searchElement:string, index?:number)
> The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
```js
fruits = ['Banana','Apple', 'Mango']`
fruits.indexOf('Banana')
```
#### reverse()
> Reverse an array with no parameter.
```js
fruits = ['Banana','Apple', 'Mango']
fruits.reverse()
```
### Object
All [JS Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) class(**not prototypes**) is accessible in QScript. Object.keys, Object.values ets. methods can be use in QS. 
#### toString()


#### toISOString()
Converts the date object to ISOFormattedString.

```js
myDate='Thu Jan 16 2020 00:00:00 GMT+0300 (GMT+03:00)'
EM.trace(myDate.toISOString())
```
### Number
#### Number.fixed(digits: Number)
Formats a number point notation with given digits.
```js
a=100
fixedNum = a.fixed(2)
--> fixedNum will be '100.00'
```
## Remarks
### String
#### Quote in string
use 2 single quotes inside a string
> 'alper''den'  -> alper'den
#### Non breaking space character
character displayed as a space but acts like a normal character
> 'two{string.space}{string.space}{string.space}words' -> two&nbsp;&nbsp;&nbsp;words

#### InString Escape char
\ is the escape char in strings

```js
EM.trace('hello{3+5}') // hello8
EM.trace('hello\{3+5}') // hello{3+5}
EM.trace('hello\{3+5\}') // hello{3+5}
EM.trace('hello\\{3+5}') // hello\8
EM.trace('hello\t{3+5}') // hello	8
EM.trace('hello\n{3+5}') // hello↵8
EM.trace('hello\alper{3+5}') // helloalper8  // \ removes itself if it can not escape anything
```

### Quick Format Methods
Set common UI format types in UI settings.yaml file (settings-proxy.js for editor) as follow. If UI formats are not defined in settings.yaml, formatted strings display with engine default format types.\
```js
FormattingDefinition:
  longDateFormat: 'DD.MM.YYYY HH:MM'
  shortDateFormat: 'DD.MM.YYYY'
  longTimeFormat: 'HH:MM:SS'
  shortTimeFormat: 'HH:MM'
  moneyFormat: 'tr-TR'
  serviceDateFormat: 'DDMMYYYY'
```

### toMoney()
> toMoney(value: number, formatType?: string, opt?: Intl.NumberFormatOptions, bigDecimal?: boolean):String
formatType --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#using_locales

opt --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#using_options

```js
num = Number.parse('49546.3900')
money = Quick.toMoney(num)
--> money output: 49.546,39
```

```js
Quick.toMoney(555, 'tr-TR', {minimumFractionDigits= 2})
// Output is 555,00
```

```js
Quick.toMoney('97888888888888,48 ', undefined, undefined, true)
// Output is 97.888.888.888.888,48
```
### toDecimal()
> toDecimal(value: string, radixPoint?: string):number

>Takes a string, removes all formatting/cruft and returns the raw decimal value.\
If radixPoint is not given, the value of radixPoint in settings.yaml file is used.\
radixPoint --> Digit sembols\
UI settings.yaml param: radixPoint\


```js
decimalValue = Quick.toDecimal("123.456.789,23 TL") //--> settings.yaml radixPoint: ','
decimalValue = Quick.toDecimal("123456789,23") //--> settings.yaml radixPoint: ','
decimalValue = Quick.toDecimal("123.456.789,23 TL", ",")
decimalValue = Quick.toDecimal("123456789,23", ",")
--> decimalValue output: 123456789.23
```

```js
decimalValue = Quick.toDecimal("123,456,789.23") //--> settings.yaml radixPoint: '.'
decimalValue = Quick.toDecimal("123456789.23 TL") //--> settings.yaml radixPoint: '.'
decimalValue = Quick.toDecimal("123,456,789.23", ".")
decimalValue = Quick.toDecimal("123456789.23 TL", ".")
--> decimalValue output: 123456789.23
```

### toDate()
> toDate(dateString:string, formatType:string ):Date\
UI settings.yaml param: serviceDateFormat

### toShortDate()
> toShortDate(value: Date, formatType:string ):String
```js
dateString1 = Quick.toShortDate(Date.now(), 'DD.MM.YYYY')
dateString2 = Quick.toShortDate(Date.now()) //--> settings.yaml shortDateFormat: 'YYYY/MM/DD'
--> dateString1 output: 10.11.2020
--> dateString2 output: 2020/11/10
```
### toLongDate()
> toLongDate(value: Date, formatType:string ):String

### toShortTime()
> toShortTime(value: Date, formatType:string ):String

### toLongTime()
> toLongTime(value: Date, formatType:string ):String

<a href="" onclick="this.href='?q=qjsons/dataTableFormatColumn.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>dataTableFormatColumn.js</a>
