
const cl = console.log;
let form = document.getElementById(`form`);
let email = document.getElementById(`email`);
let password = document.getElementById(`password`)
const loginAPI = eve =>{
    let promise = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(eve.email=== `singeshreshth@gmail.com` && eve.password === `Nikhil`){
                resolve(`You have successfully logged In`)
            }else{
                reject(`Invalid Username or Password`)
            }
        }, )
    },1500);
    return promise
}
const onSubmit = eve =>{
    eve.preventDefault();
    let obj={
        email : email.value,
        password : password.value
    }
    loginAPI(obj)
    .then((res) =>{
        Swal.fire({
            icon: 'Success',
            title: res,
            timer: 2000,
           
          })
    })
    .catch((err) =>{
        Swal.fire({
            icon: 'error',
            title: err,
            timer: 2000,
           
    })
})
.finally(()=>{
    form.reset()
})
}
form.addEventListener('submit',onSubmit)



