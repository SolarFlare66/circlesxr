'use strict';

AFRAME.registerComponent('guide-collision', {
    schema: {},

    init: function () {

        const Context_AF = this;
        let playerEl;
        // Context_AF.avatarRig = CIRCLES.getAvatarRigElement();

       // https://github.com/c-frame/aframe-physics-system/blob/master/AmmoDriver.md#including-the-ammojs-build

       CIRCLES.getCirclesSceneElement().addEventListener(CIRCLES.EVENTS.READY, (e) => {
  
        playerEl= CIRCLES.getMainCameraElement();
        // console.log(playerEl);
        playerEl.setAttribute('ammo-body',{ type:'kinematic', emitCollisionEvents: true});
        playerEl.setAttribute('ammo-shape',{ type: 'capsule', fit:'manual'});
  
        playerEl.addEventListener("collidestart", function(e) {
            console.log("Player has collided with body #" + e.detail.targetEl.id);
            // console.log("Player has collided with body #");
    
            e.detail.targetEl; // Other entity, which playerEl touched.
            });

      });
  

        
    },
  });