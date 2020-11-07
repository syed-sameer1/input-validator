# input-validator


## How to Use

```javascript 
validator(input, type);
```

### parameters

**input** \
write input *class* name with **( . )** or *ID* name with with **( # )**.

**type** \
there are **5** type of validation

- text
- number
- email
- address
- comment

---

## How it works

**text**

- if input is empty
- if the first letter is whitespace
- if last letter is whitespace
- if any number or special character exist

**number**

- if input is empty
- if the first number is whitespace
- if last number is whitespace
- if any letter or special character exist

**email**

- if input is empty
- if the first number is whitespace
- if last number is whitespace
- if email format is not correct

**address**

- if input is empty
- if the first number is whitespace
- if last number is whitespace

**comment**

- if input is empty
- if the first number is whitespace
- if last number is whitespace

*In all of these cases, It will return* `false`

---

## Example

### HTML

```html
<input id="input_id" type="text">
```
### javascript
```javascript 
let is_valid_name = validator('#input_id', 'text');

if(is_valid_name){

    alert('name is valid');

}else{

    alert('please enter only letters');

}
```
**Note :-** *HTML* input tag's attribute `type` value `text` and validator function parameter `type` value `text` is note must be same.