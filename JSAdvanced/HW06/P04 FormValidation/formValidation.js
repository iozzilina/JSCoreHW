function validate() {
    // TODO
    
    // get all html to jquery elements
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyCheckbox = $('#company');

    let companyInfo = $('#companyInfo');
    let companyNumber = $('#companyNumber');

    let submitBtn = $('#submit');

    let validDiv = $('#valid');

    //set global valid
    let isValid = true;

    //checkbox make company div visible

    companyCheckbox.on("change", function(){
        if(companyCheckbox.is(':checked')){
            companyInfo.css('display','block');
        } else {
             companyInfo.css('display','none');
        }
    });

    // validate all dislayed fields on submit
    submitBtn.on('click', function(ev){
        //prevent default form behaviour (refresh page)
        ev.preventDefault();
        validateForm();

        if(isValid){
            validDiv.css('display','block');
        } else {
            validDiv.css('display','none');
        }
    });

    function validateForm(){
        isValid = true;

        if(companyCheckbox.is(':checked')){
            validateCompanyNumber();
        }

        validateInputWithRegex(username, /^[A-Za-z\d]{3,20}$/g);
        validateInputWithRegex(email, /^.*?@.*?\..*$/g);
       
        if(password.val()===confirmPassword.val()){
           validateInputWithRegex(password, /^\w{5,15}$/g);
           validateInputWithRegex(confirmPassword, /^\w{5,15}$/g);
        } else {
             password.css('border','solid red');
             confirmPassword.css('border','solid red');
             isValid = false;
        }
    }


    function validateInputWithRegex(input, pattern){
        if(pattern.test(input.val())){
            input.css('border','none');
        } else {
            input.css('border','solid red');
            isValid = false;
        }
    }

    function validateCompanyNumber(){
        let numValue =+companyNumber.val();
        if(numValue>=1000 && numValue<=9999){
            companyNumber.css('border','none');
        }else{
            companyNumber.css('border','solid red');
            isValid = false;
        }

    }
}
