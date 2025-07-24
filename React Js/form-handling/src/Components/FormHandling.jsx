import React, { useState } from 'react'
import states from '../data/states';

export default function FormHandling() {

    var [userData, setUserData] = useState([]);
    var [stateData, setStateData] = useState([]);

    const filterStates = (event) => {
        const newStates = states.filter((v,i) => {
            if(v.country_name == event.target.value){
                return v;
            }
        })
        setStateData([...newStates]);
    }

    const formHandler = (event) => {
        event.preventDefault();

        var user = {
            name : event.target.name.value,
            email : event.target.email.value,
            mobile_number : event.target.mobile.value,
            country_name : event.target.country.value,
            state_name : event.target.state.value,
        }

        var finalData = [user, ...userData];
        setUserData(finalData);
        event.target.reset();
        setStateData([]);
    }

    const deleteUser = (index) => {
        if(confirm('Are you sure you want to delete ?')){
            const finalData = userData.filter((v,i) => {
                if(i != index){
                    return v;
                }
            })
            setUserData([...finalData]);
        }
        
    }

    return (
        <>
            <div class="form-container">
                <h2>Basic Form</h2>
                <form onSubmit={ formHandler } autocomplete="off">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div class="form-group">
                        <label for="mobile">Mobile Number</label>
                        <input type="tel" id="mobile" name="mobile" required/>
                    </div>
                    <div class="form-group">
                        <label for="country">Country</label>
                        <select onChange={ filterStates } name="country" required>
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="Canada">Canada</option>
                            <option value="Austraila">Austraila</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="state">State</label>
                        <select id="state" name="state" required>
                            <option value="">Select State</option>
                            {
                                stateData.map((v,i) => {
                                    return(
                                        <option value={v.name}>{v.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button type="submit" class="submit-btn">Submit</button>
                </form>
            </div>

            <div class="table-container">
                <h2>User Data</h2>
                <table id="data-table" border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Country</th>
                            <th>State</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.length > 0
                            ?
                                userData.map((v,i) => {
                                    return(
                                        <tr>
                                            <td>{ i+1 }</td>
                                            <td>{v.name}</td>
                                            <td>{v.email}</td>
                                            <td>{v.mobile_number}</td>
                                            <td>{v.country_name}</td>
                                            <td>{v.state_name}</td>
                                            <td>
                                                <button onClick={ () => deleteUser(i) }>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            :
                            <tr align="center"className='center'>
                                <td align="center" colspan="7">No Record Founds !!</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

function GetUserData() {
    return (
        <>
            Fetch Data
        </>
    )
}