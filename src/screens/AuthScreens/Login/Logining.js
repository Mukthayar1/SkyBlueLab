import { LoginUserIs } from "../../../store/reducer/AppReducer";
const LoginUser = (email, pass, navigation, Setloading, SetErrorMsg, SetShowError, dispatch) => {

    Setloading(true)

    if (email?.length > 0 && pass?.length > 0) {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "lab_name": "Sky Blue Laboratory",
            "access_key": "dAb6324R2745050217b949a5265d8bb0d86sec6Tqe04b74d5o4175a20dTl",
            "email_address": email,
            "password": pass
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://api.labcloud.pk/api/login", requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data?.message);
                if (data?.message == 'Login successfully') {
                    dispatch(LoginUserIs(true));
                    navigation.navigate('BottomTabs');
                } else {
                    SetErrorMsg('invalid username or password');
                    SetShowError(true);
                    Setloading(false);
                }

            })
            .catch((error) => {
                console.error('Error:', error);
                SetShowError(true);
                Setloading(false);
            })
            .catch(error => console.log('error', error));

        const data = {
            "lab_name": "Sky Blue Laboratory",
            "access_key": "dAb6324R2745050217b949a5265d8bb0d86sec6Tqe04b74d5o4175a20dTl",
            "email_address": email,
            "password": pass
        };


    }
    else {
        SetShowError(true)
        SetErrorMsg('Please fill form');
        Setloading(false)
    }

}


export {
    LoginUser
}