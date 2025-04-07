'use strict';

AFRAME.registerComponent('guide-collision', {
    schema: {
        guideZone:{type: 'string', default:''}
    },

    init: function () {

        const Context_AF = this;
        let playerEl;
        // Context_AF.avatarRig = CIRCLES.getAvatarRigElement();

       // https://github.com/c-frame/aframe-physics-system/blob/master/AmmoDriver.md#including-the-ammojs-build

       CIRCLES.getCirclesSceneElement().addEventListener(CIRCLES.EVENTS.READY, (e) => {
  
        playerEl= CIRCLES.getMainCameraElement();
        // console.log(playerEl);
        // adding aframe physics components to player camera element
        playerEl.setAttribute('ammo-body',{ type:'kinematic', emitCollisionEvents: true});
        playerEl.setAttribute('ammo-shape',{ type: 'capsule', fit:'manual'});
  
        // playerEl.addEventListener("collidestart", function(e) {
        //     console.log("Player has collided with body #" + e.detail.targetEl.id);
        //     // console.log("Player has collided with body #");
    
        //     e.detail.targetEl; // Other entity, which playerEl touched.
        //     });

      });

      Context_AF.el.addEventListener("collidestart", function(e) {
        console.log("Object has been collided with by: " + e.detail.targetEl.id);
        console.log(`Emitting animation event: ${Context_AF.data.guideZone}Start`);
        document.querySelector(`#${Context_AF.data.guideZone}`).emit(`${Context_AF.data.guideZone}Start`, null, false);

        // e.detail.targetEl; // Other entity, which touched.
        // document.querySelector(data.guideZone).setAttribute('animation__grow', {property: 'scale', to: {x:5, y:5, z:5}, dur: 2000, easing: linear, loop: false, autoplay })
    
    });

    Context_AF.el.addEventListener("collideend", function(e) {
        console.log("Object is no longer colliding with: " + e.detail.targetEl.id);
        console.log(`Emitting animation event: ${Context_AF.data.guideZone}End`);
        document.querySelector(`#${Context_AF.data.guideZone}`).emit(`${Context_AF.data.guideZone}End`, null, false);

        // e.detail.targetEl; // Other entity, which touched.
        // document.querySelector(data.guideZone).setAttribute('animation__grow', {property: 'scale', to: {x:5, y:5, z:5}, dur: 2000, easing: linear, loop: false, autoplay })
    
    });
      
  

        
    },
  });