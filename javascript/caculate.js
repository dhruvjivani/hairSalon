
let services = [
    {
        name:'nail art',
        price:50,
        duration:60
    },
    {
        name:'eyebrows',
        price:20,
        duration:20
    },
    {
        name:'package',
        price:1000,
        duration:60
    }
];

function calculateTotal(){
    let hairdresser = document.getElementById('stylist').value;

    let isnailart = document.getElementById('nailart').checked;
    let iseyebrows = document.getElementById('eyebrows').checked;
    let ispackage = document.getElementById('package').checked;

    let choosenServices = [];

    if(isnailart){
        choosenServices.push(services[0]);
    }

    if(iseyebrows){
        choosenServices.push(services[1]);
    }

    if(ispackage){
        choosenServices.push(services[2]);
    }

    let totalPrice = 0;
    let totalDuration = 0;

    for(let item of choosenServices){
        totalPrice = totalPrice+item.price;
        totalDuration = totalDuration + item.duration;
    }

    document.getElementById('total-cost').textContent = '$ '+ totalPrice;
    document.getElementById('total-duration').textContent = '$ ' + totalDuration;

    alert('Your booking is completed.');
}
