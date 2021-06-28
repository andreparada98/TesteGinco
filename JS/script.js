const names = ['André', 'João', 'Aline', 'Victor'];

document.getElementById('client-name').addEventListener('input', (e)=>{

    let namesArray = [];

    
    if(e.target.value){
        namesArray = names.filter(name => name.toLowerCase().includes(e.target.value));
        namesArray = namesArray.map(name => `<li>${name}</li>`)
    }

    showNamesArray(namesArray);
    
});

function showNamesArray(namesArray){
    const html = !namesArray.length ? '' : namesArray.join('');
    document.querySelector('ul').innerHTML = html;
}