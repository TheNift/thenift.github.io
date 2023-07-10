const info_buttons = document.querySelectorAll('.info-button');
const info_panels = document.querySelectorAll('.info-panel');

for (let button of info_buttons) {
    button.addEventListener('click', ()=> {
        for(let i = 0; i < info_panels.length; i++) {
            if(info_panels[i].id == button.id) {
                if(info_panels[i].classList.contains('shown')) {
                    // info_panels[i].classList.remove('shown');
                } else {
                    info_panels[i].classList.add('shown');
                }
            } else {
                if(info_panels[i].classList.contains('shown')) {
                    info_panels[i].classList.remove('shown');
                }
            }
        }
    });
}