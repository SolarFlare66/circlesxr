AFRAME.registerComponent('opacity-toggle', {
  init: function () {
    let el = this.el;
    el.addEventListener('click', function () {
      let material = el.getAttribute('material');
      if (material) {
        material.opacity = (material.opacity === 0) ? 1 : 0;
        el.setAttribute('material', 'opacity', material.opacity);
      }
    });
  }
});