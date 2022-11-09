export default function getColonias(busqueda="68140", pais="MX"){

    
    const apiURL=`https://data.opendatasoft.com/api/records/1.0/search/?dataset=geonames-postal-code%40public&q=${busqueda}&facet=country_code&facet=admin_name1&facet=admin_code1&facet=admin_name2&refine.country_code=${pais}`;
    
    //return apiURL;
    return fetch(apiURL)
    .then(res=>res.json()
    .then(response=>{
        const {records}=response;
        let id=-1;
        const colonias = records.map(colonia=>{
            const {fields}=colonia;
            const {place_name, admin_name1, admin_name2, admin_name3, latitude, longitude}=fields;
            id++;

            return {id, place_name, admin_name1, admin_name2, admin_name3, latitude, longitude};
        });
        return colonias;
    }))
}