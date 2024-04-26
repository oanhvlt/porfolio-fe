
import React, { useState } from "react";
import './Video10.css'

export interface ITest {
    name: string;
    age: number
}

interface IUser {
    name: string;
    age: number | string;
    city: string;
}

interface IProps {
    defaultName: string;
    defaultAge: number;
}

const Video15 = (props: IProps) => {
    const { defaultName, defaultAge } = props;

    //todo: gán default value
    const [name, setName] = useState<string>(defaultName);
    const [age, setAge] = useState<number | string>(defaultAge);

    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
    const [selectedCity, SetSelectedCity] = useState<string>("Hà Nội");


    const [users, setUsers] = useState<IUser[]>([]);

    // const handleSubmit = () => {
    //     const user = {
    //         name: name,
    //         age: age,
    //         city: selectedCity
    //     }
    //     setUsers([...users, user]);
    //     setName('');
    //     setAge('');
    // }
    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        const user = {
            name: name,
            age: age,
            city: selectedCity
        }
        // users.push(user); //modify state directly
        // setUsers(users)

        setUsers([...users, user]); //spread syntax
        setName("");
        setAge("");
    }
    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return (
        <>
            <div>Example video 15: </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input type="text" value={name} onChange={handleOnchange} /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input type="text" value={age} onChange={(e) => { setAge(e.target.value) }} /><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select onChange={(e) => { SetSelectedCity(e.target.value) }}>
                        {city.map(item => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>

                {/* <button type="submit" value="Submit" onClick={handleSubmit}>Submit</button> */}
                <input
                    type="submit"
                    value="Submit"
                    onClick={handleSubmit}
                />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            < th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (
                                <tr key={user.name}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.city}</td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video15;
