const signupContainer_elem = document.querySelector('.signup-container')
        const loginContainer_elem = document.querySelector('.login-container')


        const signup_firstName_elem = document.querySelector('.signup-firstName')
        const signup_lastName_elem = document.querySelector('.signup-lastName')
        const signupEmail_elem = document.querySelector('.signup-Email')
        const signupPassword_elem = document.querySelector('.signup-Password')

        const loginEmail_elem = document.querySelector('.login-Email')
        const loginPassword_elem = document.querySelector('.login-Password')

        let userInfo = {}

        let allUserInfo;
        loadData()


        function login(){
            loadData()
            for (let user of allUserInfo.users){
                if(user.email === loginEmail_elem.value && user.password === loginPassword_elem.value){
                    alert('success');
                    loginEmail_elem.value = ''
                    loginPassword_elem.value = ''
                    return
               }
            }
            alert("wrong email or pass");
        }

        function register(){
            loadData()
            userInfo = {
                firstName: signup_firstName_elem.value,
                lastName: signup_lastName_elem.value,
                email: signupEmail_elem.value,
                password: signupPassword_elem.value,
            }

            if(userInfo.firstName.trim().length  === 0 ||
                userInfo.lastName.trim().length === 0 ||
                userInfo.email.trim().length === 0 || 
                userInfo.password.trim().length === 0 
            ){
                alert('Input all required Information!')
            }else {
                allUserInfo.users.push(userInfo)

                localStorage.setItem('userInformation', JSON.stringify(allUserInfo))
                alert('registered successfully!')
                signup_firstName_elem.value = ''
                signup_lastName_elem.value = ''
                signupEmail_elem.value = ''
                signupPassword_elem.value = ''
            }

            
        }
    
        function loadData(){
            allUserInfo = JSON.parse(localStorage.getItem('userInformation'))
            if(!allUserInfo || !Array.isArray(allUserInfo.users)){
                    allUserInfo = {
                        users: []
                    }
            }
        }

        function linkToSignUp(){           
            signupContainer_elem.style.zIndex = '1'
            loginContainer_elem.style.zIndex = '0'
            signupContainer_elem.style.opacity = '1'
            loginContainer_elem.style.opacity = '0'
        }

        function linkToLogin(){
            signupContainer_elem.style.zIndex = '0'
            loginContainer_elem.style.zIndex = '1'
            signupContainer_elem.style.opacity = '0'
            loginContainer_elem.style.opacity = '1'
        }