document.querySelector('.menuitems').addEventListener('click',() =>{
    document.querySelector('.container').classList.toggle('change');
    });

document.querySelector('.scroll-btn').addEventListener
('click', () => {
    document.querySelector('html').style.scrollBehavior
    ='smooth';
    setTimeout(() =>{
        document.querySelector('html').style.scrollBehavior
    ='unset';
    },1000)
})
class ProgressBar{
    constructor(element, initialValue = 0){
        this.valueElem = element.querySelector('.progress-bar-value');
        this.fillElem = element.querySelector('.progress-bar-fill');

        this.setValue(initialValue);

        console.log(this.valueElem);
        console.log(this.fillElem);
    }

    setValue (newValue){
        if(newValue < 0){
            newValue = 0;
        }
        if(newValue > 100){
            newValue = 100;
        }
        this.value=newValue;
        this.update();
    }

    update (){
        const percentage= this.value + '%';

        this.fillElem.style.width = percentage;
        this.valueElem.textContent = percentage;
    }
}
const pb1=new ProgressBar(document.querySelector('.progress-bar'), 78);

let chart = document.getElementById('chart').getContext('2d');

let connectchart = new Chart(chart, {
        type: 'bar',
        data:{
            labels: ['01/07/2006', '02/07/2006', '03/07/2006', '04/07/2006', '05/07/2006'],
            datasets: [{
                label: 'Connections',
                data: [
                    5058,
                    7437,
                    7248,
                    8280,
                    27189
                ],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                ],
                borderWidth:2,
                borderColor: '#777',
                hoverBorderWidth: 3,
                hoverBorderColor:'#000',
            }]
        },
        options: {}
});