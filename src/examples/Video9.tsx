import { useState } from "react";

const Video9 = () => {

    let [name, setName] = useState<string | number>('test'); //<T>: generic
    name = '123'
    //setName('123');
    return (
        <div> Video 9: {name}</div>
    )
}

export default Video9;