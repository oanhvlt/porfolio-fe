
interface IProps {
    name: string;
    age: number;
    address?: string;
}

const Video13 = (props: IProps) => {
    //props là javascript object
    const { name, age, address = 'address 1' } = props;

    return (
        <div>
            Example in video 13 - hello {name} - {age} - {address}
        </div>
    )
}

export default Video13;