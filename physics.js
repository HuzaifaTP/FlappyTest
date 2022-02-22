import Matter from "matter-js";

var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composites = Matter.Composites,
  Events = Matter.Events,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Composite = Matter.Composite,
  Bodies = Matter.Bodies;

const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;
  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
        Matter.Body.setVelocity(entities.Bird.body, {
          x: 8,
          y: -8,
        });
    //   Matter.Body.applyForce(
    //       entities.Bird.body, , 1)
    
    });

  Matter.Engine.update(engine, time.delta);
  
  return entities;
}; //dispatch allows us to send messages from index.js in entites to game engine

export default Physics;
