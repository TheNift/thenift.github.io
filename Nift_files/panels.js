const info_buttons = document.querySelectorAll('.info-button');
const info_panels = document.querySelectorAll('.info-panel');

for (let button of info_buttons) {
    button.addEventListener('click', ()=> {
        for(let i = 0; i < info_panels.length; i++) {
            if(info_panels[i].id == button.id) {
                if(info_panels[i].classList.contains('shown')) {
                    info_panels[i].classList.remove('shown');
                } else {
                    info_panels[i].classList.add('shown');
                }
            } else {
                if(info_panels[i].classList.contains('shown')) {
                    info_panels[i].classList.remove('shown');
                }
            }
            if(info_panels[i].id == "projects") {
                if(info_panels[i].classList.contains('shown')) {
                    document.body.style.overflow = visible;
                } else {
                    document.body.style.overflow = hidden;
                }
            }
        }
    });
}