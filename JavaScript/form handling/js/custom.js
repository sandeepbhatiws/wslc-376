var states = [
    {id: 1, name: 'Maharashtra',country_name: 'India'},
    {id: 2, name: 'Karnataka',country_name: 'India'},
    {id: 3, name: 'Tamil Nadu',country_name: 'India'},
    {id: 4, name: 'West Bengal',country_name: 'India'},
    {id: 5, name: 'Gujarat',country_name: 'India'},
    {id: 6, name: 'Ontario',country_name: 'Canada'},
    {id: 7, name: 'Quebec',country_name: 'Canada'},
    {id: 8, name: 'British Columbia',country_name: 'Canada'},
    {id: 9, name: 'Alberta',country_name: 'Canada'},
    {id: 10, name: 'Manitoba',country_name: 'Canada'},
    {id: 11, name: 'New South Wales',country_name: 'Austraila'},
    {id: 12, name: 'Victoria',country_name: 'Austraila'},
    {id: 13, name: 'Queensland',country_name: 'Austraila'},
    {id: 14, name: 'Western Australia',country_name: 'Austraila'},
    {id: 15, name: 'South Australia',country_name: 'Austraila'}
];


document.getElementById('country').addEventListener('change',(event) => {
    const data = states.filter((value) => {
        if(value.country_name == event.target.value){
            return value;
        }
    })

    var stateOptions = '<option value="">Select State</option>';

    data.forEach((value) => {
        // stateOptions +='<option value="'+ value.name +'">'+ value.name +'</option>';
        stateOptions += `<option value="${ value.name }">${ value.name }</option>`;
    });

    document.getElementById('state').innerHTML = stateOptions;
})

var userData = [];

function displayData(){
    if(userData.length > 0){

        var userList = '';
        userData.forEach((value,index) => {
            userList += `
            <tr>
                <td>${ index+1 }</td>
                <td>${ value.name }</td>
                <td>${ value.email }</td>
                <td>${ value.mobile_number }</td>
                <td>${ value.country_name }</td>
                <td>${ value.state_name }</td>
                <td><button onclick="deleteUser(${ index })">Delete</button></td>
            </tr>`;
        });

        document.getElementById('fetch-data').innerHTML = userList;
    } else {
        var noRecordFound = `
            <tr align="center">
                <td align="center" colspan="7">No Record Founds !!</td>
            </tr>
        `;

        document.getElementById('fetch-data').innerHTML = noRecordFound;
    }
}

displayData();

document.getElementById('formHandler').addEventListener('submit',(e) => {
    e.preventDefault();
    
    const data = {
        name : e.target.name.value,
        email : e.target.email.value,
        mobile_number : e.target.mobile.value,
        country_name : e.target.country.value,
        state_name : e.target.state.value,
    }

    // userData = [...userData,data];     // Jis order m insert karooge us order m show hooga

    userData = [data, ...userData];     // reverse order m show hooga
    // userData.push(data);
    displayData();

    // e.target.name.value = '';
    // e.target.email.value = '';

    e.target.reset();

    var stateOptions = '<option value="">Select State</option>';
    document.getElementById('state').innerHTML = stateOptions;

    console.log(data);
})

function deleteUser(index){
    if(confirm('Are you sure you want to delete ?')){
        userData.splice(index,1);
        displayData();
    }
    
}