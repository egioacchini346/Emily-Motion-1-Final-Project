import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);

gsap.set("#ball",{ y:-600, opacity: 0, transformOrigin:"center"});
gsap.set("#top-of-hat",{opacity: 0, transformOrigin:"center"});
gsap.set("#bottom-of-hat",{opacity: 0, transformOrigin:"center"});
gsap.set("#bottom-of-hat-stroke",{opacity: 0, transformOrigin:"center"});

const mainTL = gsap.timeline() 


function ball(){
    const tl=gsap.timeline();
    tl.to("#ball", {opacity: 1, duration: .30}, "same")
    tl.to("#ball", {y:0, duration: 1}, "same")
    tl.to("#ball", {duration: 1, morphSVG:"#top-of-hat"})

    return tl; 
}

function hatbotttom(){
    const tl=gsap.timeline();
    tl.fromTo("#stroke-1", {drawSVG:"50% 50%"}, {duration: 1, drawSVG:"0% 100%"}, "sametime");
    tl.fromTo("#stroke-2", {drawSVG:"50% 50%"}, {duration: 1, drawSVG:"0% 100%"}, "sametime");
    tl.to("#bottom-of-hat", {opacity: 1, duration: .30})


    return tl; 
}


mainTL.add(ball())
mainTL.add(hatbotttom())


    
GSDevTools.create();


