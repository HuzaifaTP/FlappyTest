import Matter from "matter-js"
import Bird from "../components/Bird";
import {Dimensions} from 'react-native';
import Floor from "../components/Floor";

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width;

export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false}) //enable sleeping improves performance of the app at the expense of accuracy
    let world = engine.world
    world.gravity.y = 0.4;


    return {
    
        physics: {engine, world},
        Bird: Bird(world, 'red', {x:100, y:550}, {height:40, width: 40}),
        Floor: Floor(world, 'green', {x:windowWidth/2, y:windowHeight}, {height:50, width: windowWidth}),

    }
}