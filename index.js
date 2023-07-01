function loginUser(e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log(email, password)

    // if (JSON.parse(localStorage.getItem('userData')).length == 0) {
    //     alert('please create acount')
    // }
    // else {
    var userInformation = JSON.parse(localStorage.getItem('userData'));
    // userInformation.map((item) => {
    //     if (item.email == email && password == item.new_password) {
    //         window.location.href = 'registration.html';

    //     }

    // })

    var itemFount = userInformation.find((item) => item.email == email && password == item.new_password);
    if (itemFount) {
        window.location.href = 'univerisity-form/index.html';
    }
    else {
        alert("passwors are wrong");
    }

}


function register(e) {
    e.preventDefault();
    var email = document.getElementById('email_2').value;
    var new_password = document.getElementById('new_password').value;
    var confrom_password = document.getElementById('confrom_password').value;

    var dataObj = [{
        "id": 1,
        "email": email,
        "new_password": new_password,
        "confrom_password": confrom_password
    }];

    if (new_password === confrom_password) {
        if (!localStorage.getItem('userData')) {
            localStorage.setItem('userData', JSON.stringify(dataObj));
            location.reload();
        }
        else {
            var check = false;
            var users = JSON.parse(localStorage.getItem('userData'));
            users.map((item) => {
                if (item.email == email) {
                    check = true;
                    alert('this email already exist')
                    return;
                }
            })

            if (!check) {
                check = false;
                var obj = JSON.parse(localStorage.getItem('userData'));

                Array.prototype.push.apply(obj, dataObj)

                console.log(JSON.stringify(obj))

                localStorage.removeItem('userData')
                localStorage.setItem('userData', JSON.stringify(obj));

                location.reload();
            }

        }
    }
    else {
        alert('password and confirmation password are not same')
    }
}