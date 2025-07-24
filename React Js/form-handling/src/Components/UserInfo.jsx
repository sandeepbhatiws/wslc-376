import React from 'react'

export default function UserInfo({ userData, setUserData }) {

    const deleteUser = (index) => {
        if(confirm('Are you sure you want to delete ?')){
            const finalData = userData.filter((v,i) => {
                if(i != index){
                    return v;
                }
            })

            var newData = JSON.stringify(finalData);
            localStorage.setItem('userInfo',newData);

            
            setUserData([...finalData]);
        }
        
    }

    return (
        <>
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
                                userData.map((v, i) => {
                                    return (
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{v.name}</td>
                                            <td>{v.email}</td>
                                            <td>{v.mobile_number}</td>
                                            <td>{v.country_name}</td>
                                            <td>{v.state_name}</td>
                                            <td>
                                                <button onClick={() => deleteUser(i)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr align="center" className='center'>
                                    <td align="center" colspan="7">No Record Founds !!</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
