async function fetchVillagers(){
    const res = await fetch('https://acnhapi.com/v1/villagers/');
    const data = await res.json();
    console.log(Object.entries(data));
    const villagers = document.getElementById('cards');
    Object.entries(data).forEach(([key, value]) => {
        Object.entries(value.birthday).forEach(([]))
    })
    for (const [key, value] of Object.entries(data)){
        return (`${key} => ${value.birthday} => ${value.gender} => ${value.species} => ${value.image_uri}`)
    }
}
fetchVillagers();

//example
var data={"Car":{"wheels":4,"InStock":{"Toyota":{"Model1":10,"Model2":5},"Honda":{"Model1":12,"Model2":3}}},"Bicycle":{"wheels":2,"InStock":{"Toyota":{"Model1":25,"Model2":14},"Honda":{"Model1":22,"Model2":13}}}};
const $vehicles = document.getElementById("cards");
Object.entries(data).forEach(([key,value])=>{
    Object.entries(value.InStock).forEach(([vehicleName,models])=>{
        Object.entries(models).forEach(([modelName, count], index)=>{
            $vehicles.innerHTML += `<div>${key}, ${vehicleName}, Model ${index + 1}: ${count}</div>`
        })
        $vehicles.innerHTML += `<div>${key}, ${vehicleName}, Wheels: ${value.wheels}</div>`
    });
    $vehicles.innerHTML += '<br>'
});
