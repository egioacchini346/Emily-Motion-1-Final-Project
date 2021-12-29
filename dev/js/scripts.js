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
gsap.set("#rectangle-fill",{opacity: 0, transformOrigin:"center"});
gsap.set("#blue-dot",{opacity: 0, transformOrigin:"center"});
gsap.set("#yellow-dot",{opacity: 0, transformOrigin:"center"});
gsap.set("#top",{opacity: 0, transformOrigin:"center"});
gsap.set("#handle",{opacity: 0, transformOrigin:"center"});
gsap.set("#bottom",{opacity: 0, transformOrigin:"center"});
gsap.set("#shape-covering-d",{opacity: 0, transformOrigin:"center"});
gsap.set("#blocker-to-tea",{opacity: 0, transformOrigin:"center"});

const mainTL = gsap.timeline() 



function ball(){
    const tl=gsap.timeline();
    tl.to("#ball", {opacity: 1, duration: .30}, "same")
    tl.to("#ball", {y:0, duration: 1}, "same")
    tl.fromTo("#stroke-1", {drawSVG:"50% 50%"}, {duration: .8, drawSVG:"0% 100%"},"-=0.2")
    tl.fromTo("#stroke-2", {drawSVG:"50% 50%"}, {duration: .8, drawSVG:"0% 100%"},"-=0.2")
    tl.to("#ball", {duration: 1, morphSVG:"#top-of-hat"}, "-=1.2")
    return tl; 
}

function hatbotttom(){
    const tl=gsap.timeline();
    tl.to("#bottom-of-hat", {opacity: 1, duration: .30})

    // hat disappears
    tl.to("#stroke-1", {opacity: 0, duration: .80}, "Same")
    tl.to("#stroke-2", {opacity: 0, duration: .80}, "Same")
    tl.to("#bottom-of-hat", {opacity: 0, duration: .80}, "Same")
    tl.to("#rectangle-fill", {opacity: 1}, "Same")
    return tl; 
}

function dot (){
    const tl=gsap.timeline();
    tl.to("#blue-dot",{opacity: 1, duration: 1})
    tl.to("#yellow-dot",{opacity: 1, duration: 1})
    tl.from("#blue-dot",{opacity: 0, duration: 1})
    tl.to("#yellow-dot", {duration: 1, morphSVG:"#top"}, "SAME")
    return tl; 
}

function teacup(){
    const tl=gsap.timeline(); 
    tl.fromTo("#top-stroke", {drawSVG:"50% 50%"}, {duration: 1, drawSVG:"0% 100%"}, "sameTime")
    tl.fromTo("#bottom-stroke", {drawSVG:"50% 50%"}, {duration: 1, drawSVG:"0% 100%"}, "sameTime")
    tl.fromTo("#back-side-stroke", {drawSVG:"50% 50%"}, {duration: 1, drawSVG:"0% 100%"}, "sameTime")
    tl.fromTo("#under-side-stroke", {drawSVG:"50% 50%"}, {duration: 1, drawSVG:"0% 100%"}, "sameTime")
    tl.to("#bottom",{opacity: 1, duration: 1}, "SAme")
    tl.to("#handle",{opacity: 1, duration: 1}, "SAme")
    tl.to("#top-stroke",{opacity: 0, duration: 1}, "SAMe")
    tl.to("#bottom-stroke",{opacity: 0, duration: 1}, "SAMe")
    tl.to("#back-side-stroke",{opacity: 0, duration: 1}, "SAMe")
    tl.to("#under-side-stroke",{opacity: 0, duration: 1}, "SAMe")
    //need to fix rotation & figure out how to get the morphed top to move again
    tl.to("#bottom",{rotation:-36, x:1.2, duration: 1}, "SaMee")
    tl.to("#handle",{rotation:-45, duration: 1}, "SaMee")
    tl.to("#top",{rotation:-45, duration: 1}, "SaMee")
    tl.to("#shape-covering-d",{opacity: 1},"SaMee")
    return tl; 
}

function pour(){
    const tl=gsap.timeline(); 
    tl.from("#tea", {drawSVG:0, duration: 5})
    tl.from("#sand-color-tea", {scale: 1.2, drawSVG:0, duration: 5})
    return tl;
}

function waves(){
    const tl=gsap.timeline();
    tl.to ("#shape-covering-d", {opacity: 0, duration: 1})
    tl.to("#liquid-medium", {duration:.7, x: -bBoxGroup.width / 2, ease: "none", repeat:2}, "start")
    tl.to("#liquid-light", {duration: .5, x: bBoxGroup2.width / 2, ease: "none", repeat:3}, "start")


function orangebatter(){
    const tl=gsap.timeline(); 
    tl.to("#batter", {opacity: 0})
    return tl;
}

mainTL.add(ball())
mainTL.add(hatbotttom())
mainTL.add(dot())
mainTL.add(teacup())
mainTL.add(pour())
mainTL.add(waves())
mainTL.add(orangebatter())

GSDevTools.create();