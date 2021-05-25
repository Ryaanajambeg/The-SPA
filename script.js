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