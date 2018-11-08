import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
//import {THREE} from './lib/threejs/three'
import THREE from './lib/threejs/three'

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);

  console.log("test")
  console.log(THREE)
  //console.log(Box3)



});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});


Template.threejs.onRendered(function () {



  //new THREE.PerspectiveCamera( param.camera.fov, this.window_size.width / this.window_size.height, param.camera.near, param.camera.far );
  var camera = new THREE.PerspectiveCamera( 70, 320/240, 1, 1000 );
  camera.position.z = 40;
  camera.position.x = 0;
  camera.position.y = 10;

  camera.lookAt( new THREE.Vector3(0,0,0) );
  var scene = new THREE.Scene();

  scene.add(camera)

  //console.log(this.view)
  console.log(this.findAll('#mycanvas'))

  var glrenderer = new THREE.WebGLRenderer();

  glrenderer.setClearColor(0x000088);
  glrenderer.autoClear = true;

  console.log(glrenderer.domElement)

  this.find('#mycanvas').appendChild(glrenderer.domElement)
  glrenderer.setSize(320,240)

  //그리드헬퍼
  var helper =  new THREE.GridHelper( 50, 8 ,0x00ff00,0xff0000);
  //helper.setColors(0x00ff00,0xff0000);
  scene.add(helper);

  //씬노드 추가
  var geometry = new THREE.CubeGeometry(5,5,5);
  var material = new THREE.MeshBasicMaterial(
    {
      color: 0x00ff00,
      wireframe : true
    }
  );
  var node = new THREE.Mesh(geometry, material);
  node.name = 'wire_cube';
  scene.add(node);

  var clock = new THREE.Clock();

  function loop() {

    let deltaTick = clock.getDelta();

    node.rotation.x += THREE.Math.degToRad(45) * deltaTick;
    node.rotation.y += THREE.Math.degToRad(45) * deltaTick;

    //랜더링 (화면에 반영)
    glrenderer.render(scene,camera)
    requestAnimationFrame(loop);
  }

  loop();

})