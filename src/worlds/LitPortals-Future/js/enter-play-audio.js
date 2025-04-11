

AFRAME.registerComponent('enter-play-audio', {
    init: function () {

        const Context_AF = this;

      document.querySelector('#user-gesture-enter').addEventListener('click', function() {

        console.log('playing sound after user enters experience');
        // adding delay
        setTimeout(() => { Context_AF.el.components.sound.playSound(); }, 2000);

      });


      
      // not good practice but couldnt figure out how to get when the button is click outside component
      document.querySelector('#rotate_desc_control').addEventListener('click', function(){
        console.log('');


      });

    }
  });