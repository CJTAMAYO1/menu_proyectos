const teams = ["Liverpool","Dortmun","Chelsie"];

setTimeout(() => console.log('taera asincrona'), 2000);

console.log('sigue ejecutando')
console.log(teams);

function getTeams(){
    return teams;
}

function asinGeTeams(){
    setTimeout(()=> teams, 2000);
}



console.log(getTeams());
console.log('Final de codigo');

console.log(asinGeTeams());
console.log('termina el llamdo de function');