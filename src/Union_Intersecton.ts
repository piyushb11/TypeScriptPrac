const inputValue = (value: string | number | boolean) => {
    if (typeof value === 'number') {
        console.log(value);

    } else {
        console.log("string ", value);

    }
}

inputValue(10);
inputValue("abc");


type PersonDetails = {
    name: string,
    age: number
}
type employeeDetails = {
    emp_id: number,
    depart: string
}

type empDetails = PersonDetails & employeeDetails;

const emp: empDetails = {
    name: 'vinod',
    age: 20,
    emp_id: 1111,
    depart: 'jjj'
}
