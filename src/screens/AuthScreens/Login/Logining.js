import { Alert } from "react-native";

const LoginUser = (email, pass, navigation, Setloading) => {

    Setloading(true)

    if (email?.length > 0 && pass?.length > 0) {

        const data = {
            "lab_name": "Sky Blue Laboratory",
            "access_key": "dAb6324R2745050217b949a5265d8bb0d86sec6Tqe04b74d5o4175a20dTl",
            "email_address": email,
            "password": pass
        };

        fetch('https://api.labcloud.pk/api/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data?.message === 'Login successfully') {
                    navigation.navigate('BottomTabs')
                } else {
                    Alert.alert('Login fail no user found');
                    Setloading(false)
                }

            })
            .catch((error) => {
                console.error('Error:', error);
                Setloading(false)
            })
    }
    else {
        Alert.alert('Please fill form');
        Setloading(false)
    }

}


export {
    LoginUser
}