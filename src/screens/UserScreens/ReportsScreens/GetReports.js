import { Alert } from "react-native";

const GetReports = (SetData, Setloading) => {

    Setloading(true)



    const data = {
        "lab_name": "Sky Blue Laboratory",
        "access_key": "dAb6324R2745050217b949a5265d8bb0d86sec6Tqe04b74d5o4175a20dTl",
    };

    fetch('https://api.labcloud.pk/api/get-test-list', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data?.tests)
            if (data.status === 'success') {
                SetData(data?.tests)
            }
            Setloading(false)
        })
        .catch((error) => {
            console.error('Error:', error);
            Setloading(false)
        })

}


export {
    GetReports
}