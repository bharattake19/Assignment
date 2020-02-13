export class Address{
    public Area:string;
    public City:string;
    public Country:string;
    public employees:Employee;
    constructor(area,city,country){        
        this.Area=area;
        this.City=city;
        this.Country=country;
        this.employees;
    }
}
export class Employee{
    public EmpId:number;
    public FirstName:string;
}