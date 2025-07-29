
const person = {
    email: '',
    password: ''
};


function button(){
    if(email !== ''){
        email.innerHTML = 'put in your email';
    }else if (password !== ''){
        password.innerHTML = 'put in your email';
    }else {
        alert('Sucessful');
    }
}