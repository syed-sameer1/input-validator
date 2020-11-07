function validate(input, type){
    let input_val = $(input).val();
    
    switch(type) {

        case 'name', 'text':

            var letters_regex = /^[A-Za-z\s]+$/;

            // check for input null value
            if(input_val == ''){

                console.log('wrong');
                return false;

            // check for input first word is space    
            }else if(input_val.charAt(0) == ' '){

                console.log('wrong');
                return false;

            // check for only letters    
            }else if(!(input_val.match(letters_regex))){

                console.log('wrong');
                return false;

            // check for input last word is space
            }else if(input_val.charAt(input_val.length - 1) == ' '){

                console.log('wrong');
                return false;

            }

          break;

        case 'number':

            var number_regex = /^[0-9]+$/;
            
            // check for input null value
            if(input_val == ''){

                console.log('wrong');
                return false;

            // check for input first word is space    
            }else if(input_val.charAt(0) == ' '){

                console.log('wrong');
                return false;

            // check for only letters    
            }else if(!(input_val.match(number_regex))){

                console.log('wrong');
                return false;

            // check for input last word is space
            }else if(input_val.charAt(input_val.length - 1) == ' '){

                console.log('wrong');
                return false;

            }

        break;

        case 'email':

            var email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

            // check for input null value
            if(input_val == ''){

                console.log('wrong');
                return false;

            // check for input first word is space    
            }else if(input_val.charAt(0) == ' '){

                console.log('wrong');
                return false;

            // check for only email    
            }else if(!(input_val.match(email_regex))){

                console.log('wrong');
                return false;

            // check for input last word is space
            }else if(input_val.charAt(input_val.length - 1) == ' '){

                console.log('wrong');
                return false;

            }

        break;

        case 'comment', 'address':
            
            // check for input null value
            if(input_val == ''){

                console.log('wrong');
                return false;

            // check for input first word is space    
            }else if(input_val.charAt(0) == ' '){

                console.log('wrong');
                return false;

            // check for only letters and number    
            }else if(input_val.charAt(input_val.length - 1) == ' '){

                console.log('wrong');
                return false;

            }

        break;

        default:

          console.log('sorry not valid type')
          return false;

    }

    return true;
}