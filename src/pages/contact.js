import { useState } from 'react'


const data = [
  {
    employeeId: '01',
    name: 'John Doe',
    email: 'johndoe@email.com',
    position: 'Frontend Developer',
    phone: '773123456',
  },
  {
    employeeId: '02',
    name: 'Sara',
    email: 'sara@email.com',
    position: 'HR Executive',
    phone: '334123456',
  },
  {
    employeeId: '03',
    name: 'Mike',
    email: 'mike@email.com',
    position: 'Backend Developer',
    phone: '554123456',
  },
  {
    employeeId: '',
    name: '',
    email: '',
    position: '',
    phone: '',
  },
  {
    employeeId: '',
    name: '',
    email: '',
    position: '',
    phone: '',
  },


]

const EditableTable = () => {
  const [employeeData, setEmployeeData] = useState(data)

  const onChangeInput = (e, employeeId) => {
    const { name, value } = e.target

    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    )

    setEmployeeData(editData)
  }

  return (
    <div className="container">
      <h1 className="title">Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map(({ employeeId, name, email, position, phone }) => (
            <tr key={employeeId}>
              <td>
                <input
                  name="name"
                  value={name}
                  type="text"
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Name"
                />
              </td>
              <td>
                <input
                  name="email"
                  value={email}
                  type="text"
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Email"
                />
              </td>
              <td>
                <input
                  name="position"
                  type="text"
                  value={position}
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Position"
                />
              </td>
              <td>
                <input
                  name="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => onChangeInput(e, employeeId)}
                  placeholder="Type Phone"
                />
              </td>

            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default EditableTable