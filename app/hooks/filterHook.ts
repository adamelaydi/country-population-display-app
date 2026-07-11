
import data from "../../public/data.json"

export function filterCountries(Region: string="", Country:string="") {
    // console.log(data)
    let result;
    if (Region=="all"){
        if(Country==""){
            result= data;
        }
        else{
            const countries=data.filter((country) =>{
            return ((country.name.toLowerCase())==Country)?country:null;
        });

            result= countries;
        }
    } 
    else{
        const countries=data.filter((country) =>{
            return ((country.region.toLowerCase())==Region)?country:null;
        });
        if(Country==""){
            result= countries;
        }
        else{
            const Countries=countries.filter((country) =>{
            return ((country.name.toLowerCase())==Country)?country:null;
        });
            result= Countries;
        }
        
    }
    console.log(result)
    return result;
}
