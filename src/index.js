//
import san from 'san';
import './index.css'

let App = san.defineComponent({
    template: '<div>'+
    '<p class="title">Hello World</p>'+
    '<p class="title">wait for {{ content }} for a long time</p>'+
    '</div>',

    initData: function(){
        return {
            'content':'IFE2018'
        }
    }
})

let app = new App()
app.attach(document.body)