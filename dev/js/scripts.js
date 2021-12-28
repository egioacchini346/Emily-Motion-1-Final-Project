import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);

gsap.set("#ball",{ y:-600, opacity: 0, transformOrigin:"center"});

const mainTL = gsap.timeline() 

function ball(){
    const tl=gsap.timeline();
    tl.to("#ball", {opacity: 1, duration: .30}, "same")
    .to("#ball", {y:0, duration: .7}, "same")

    CustomBounce.create("myBounce", {strength: 0.7, squash: 4});
    tl.to("#ball", duration, {y:550, ease: "myBounce"})

    //.to("#ball", {duration: 0.6, y:70, ease:"circ.in", repeat:-1, yoyo:true})
    return tl; 
}
function dot (){
    const tl=gsap.timeline();
   
    return tl; 
}

function morphteacup(){
    
}

mainTL.add(ball())
mainTL.add(dot())
mainTL.add(morphteacup())

    
GSDevTools.create();
