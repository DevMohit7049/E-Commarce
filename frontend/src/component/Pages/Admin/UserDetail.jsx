import React from 'react'

const UserDetail = () => {
    
  return (
    
    <>
         <div className="container d-flex justify-content-between mt-4">
        <h4>User Details</h4>
        
      </div>

      <div className="container mt-4">
        <table className=" table table-bordered">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Location Name</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1.</td>
              <td>Mohit</td>
              <td>
                <button className="btn btn-primary">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>


          </tbody>
        </table>
      </div>
    </>
  )
}

export default UserDetail