import api from "./index";

export async function offer (value){
    
    const {data} = await api.get("/offer")
    data.filter(offer=>offer.company.continent = value)
    console.log(data)
    return data
}
 

