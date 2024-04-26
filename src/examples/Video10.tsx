import { useState } from "react";
import './Video10.css';

export interface IUser {
    name: string;
    age: number;
    city: string;
}

const Video10 = () => {

    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number | string>("");
    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);

    // const [users, setUsers] = useState<IUser[] | null>([
    //     { name: "name1", age: 25, city: "Hà Nội" },
    //     { name: "name2", age: 26, city: "Đà Nẵng" },
    //     { name: "name3", age: 27, city: "Hồ Chí Minh" },
    // ])
    const [users, setUsers] = useState<IUser[] | null>([])

    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);


    return (
        <>
            <div>Example video 10:  hello world </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    <input type="text" value={name} /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input type="text" value={age} /><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select>
                        {city.map(item => {
                            return (
                                <option key={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>

                <input type="submit" value="Submit" />
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
                        {users?.map(user => {
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

export default Video10;