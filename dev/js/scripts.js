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
gsap.set("#liquidmedium",{opacity: 0, scale:2, y:100, transformOrigin:"center"});
gsap.set("#liquidlight",{opacity: 0, scale: 2, y:120,transformOrigin:"center"});
gsap.set("#batter",{opacity: 0, transformOrigin:"center"});
gsap.set("#teal-stroke",{opacity: 0, transformOrigin:"center"});
gsap.set("#light-blue-stroke",{opacity: 0, transformOrigin:"center"});

gsap.set(".bubble", {opacity: 0});


gsap.set("#M",{opacity: 0, transformOrigin:"center"});
gsap.set("#A_2",{opacity: 0, y:4, transformOrigin:"center"});
gsap.set("#D",{opacity: 0, transformOrigin:"center"});
gsap.set("#sand-colored-tea",{opacity: 0, transformOrigin:"center"});

gsap.set("#lb-inside-stroke",{opacity: 0, y: 1, x:-10, transformOrigin:"center"});
gsap.set("#lb-outside-stroke",{opacity: 0, transformOrigin:"center"});
gsap.set("#teal-inside-stroke",{opacity: 0, transformOrigin:"center"});
gsap.set("#teal-outside-stroke",{opacity: 0, transformOrigin:"center"});

gsap.set(".bubble2", {opacity: 0});
gsap.set(".bubble3", {opacity: 0});

const mainTL = gsap.timeline() 

function ball(){
    const tl=gsap.timeline();
    tl.to("#ball", {opacity: 1, duration: .30}, "same")
    tl.to("#ball", {y:0, duration: 1}, "same")
    tl.fromTo("#stroke-1", {drawSVG:"50% 50%"}, {duration: .8, drawSVG:"0% 100%"},"-=0.2")
    tl.fromTo("#stroke-2", {drawSVG:"50% 50%"}, {duration: .8, drawSVG:"0% 100%"},"-=0.2")
    tl.to("#ball", {duration: 1, morphSVG:"#top-of-hat"}, "-=1.2")
 //hat
    tl.to("#bottom-of-hat", {opacity: 1, duration: .30}, "sTARt")
    tl.to("#stroke-1", {opacity: 0, duration: .80}, "Same")
    tl.to("#stroke-2", {opacity: 0, duration: .80}, "Same")
    tl.to("#rectangle-fill", {opacity: 1}, "Same")
 //swirl strokes
    tl.from("#proper-teal-inside", {drawSVG:0, duration: 8}, "Start")
    tl.from("#proper-teal-outside", {drawSVG:0, duration: 8}, "Start")
 //bubbles
    tl.to(".bubble", {y:5, duration: .05, opacity: 1, stagger: 0.2}, "sTARt")
    tl.to(".bubble", {y:0, duration: .01, opacity: 0, stagger: 0.2})
    tl.to(".bubble3", {y:5, opacity: 1, duration: .3, stagger: 0.06}, "-=20")
    tl.to(".bubble3", {y:0, opacity: 0, duration: .3, stagger: 0.06}, "-=20")
    tl.to(".bubble3", {y:5, opacity: 1, duration: .3, stagger: 0.06}, "-=14")
    tl.to(".bubble3", {y:0, opacity: 0, duration: .3, stagger: 0.06}, "-=14")
    tl.to(".bubble3", {y:5, opacity: 1, duration: .3, stagger: 0.06}, "-=12")
    tl.to(".bubble3", {y:0, opacity: 0, duration: .3, stagger: 0.06}, "-=12")

 //bottom hat disappearing
    tl.to("#bottom-of-hat", {opacity: 0}, "-=26")
    tl.to("#teal-stroke", {opacity: 1},"-=21")
    tl.from("#proper-lb-outside", {drawSVG:0, duration: 6}, "-=20")
    tl.to("#light-blue-stroke", {opacity: 1},"-=14")
 //strokes leaving
    tl.to("#light-blue-stroke", {opacity: 0, duration: 5},"-=8")
    tl.to("#teal-stroke", {opacity: 0, duration: 5},"-=8")

    tl.to("#proper-teal-inside", {opacity: 0}, "-=10")
    tl.to("#proper-teal-outside", {opacity: 0},"-=10")
    tl.to("#proper-lb-outside", {opacity: 0}, "-=10")
    tl.to("#lb-outside-stroke", {opacity: 1}, "-=10")
    tl.to("#teal-inside-stroke", {opacity: 1}, "-=10")
    tl.to("#teal-outside-stroke", {opacity: 1}, "-=10")

    tl.fromTo("#lb-outside-stroke", {drawSVG:"100% 0%"}, {duration: 8, drawSVG:"0% 0%"}, "-=8")
    tl.fromTo("#teal-inside-stroke", {drawSVG:"100% 0%"}, {duration: 8, drawSVG:"0% 0%"}, "-=8")
    tl.fromTo("#teal-outside-stroke", {drawSVG:"100% 0%"}, {duration: 8, drawSVG:"0% 0%"}, "-=8")

    return tl; 
}


function water(){
    const tl=gsap.timeline();
    tl.to("#end-dot", {opacity: 1, x:1, y:2, duration: .2},"Dot")
    tl.to("#end-dot", {morphSVG:"#A_2", duration: .5}, "dot")
    tl.to("#e-7",{opacity: 1, duration: .85},"Dot")
    tl.to("#e-57",{opacity: 1, duration: .85},"Dot")
    tl.to("#e-7", {morphSVG:"#D", duration: .5}, "dot")
    tl.to("#e-57", {morphSVG:"#M", duration: .5},"dot")
   
    
    //bubbles in/out
    tl.to(".bubble2", {y:5, opacity: 1, duration: .5, stagger: 0.06}, "dot")
    tl.to(".bubble2", {y:0, opacity: 0, duration: .5, stagger: 0.06},"dot")
    tl.to("#blue-dot",{opacity: 1, duration: 1},"-=2")

    return tl;
}



function dot (){
    const tl=gsap.timeline();
    
    tl.to("#yellow-dot",{opacity: 1, duration: .3})
    tl.from("#blue-dot",{opacity: 0, duration: .3})
    tl.to("#yellow-dot", {duration: 1, morphSVG:"#top"})
    return tl; 
}

function teacup(){
    const tl=gsap.timeline(); 
    tl.fromTo("#top-stroke", {drawSVG:"50% 50%"}, {duration: .2, drawSVG:"0% 100%"}, "sameTime")
    tl.fromTo("#bottom-stroke", {drawSVG:"50% 50%"}, {duration: .2, drawSVG:"0% 100%"}, "sameTime")
    tl.fromTo("#back-side-stroke", {drawSVG:"50% 50%"}, {duration: .2, drawSVG:"0% 100%"}, "sameTime")
    tl.fromTo("#under-side-stroke", {drawSVG:"50% 50%"}, {duration: .2, drawSVG:"0% 100%"}, "sameTime")
    tl.to("#bottom",{opacity: 1, duration: .4}, "SAme")
    tl.to("#handle",{opacity: 1, duration: .4}, "SAme")
    tl.to("#top-stroke",{opacity: 0, duration: .2}, "SAMe")
    tl.to("#bottom-stroke",{opacity: 0, duration: .2}, "SAMe")
    tl.to("#back-side-stroke",{opacity: 0, duration: .2}, "SAMe")
    tl.to("#under-side-stroke",{opacity: 0, duration: .2}, "SAMe")
    tl.to("#bottom",{rotation:-36, x:1.2, duration: .4}, "SaMee")
    tl.to("#handle",{rotation:-40, x:-31, y: -18, duration: .4}, "SaMee")
    tl.to("#yellow-dot",{rotation:-40, duration:.4}, "SaMee")
    tl.to("#shape-covering-d",{opacity: 1},"SaMee")
    return tl; 
}

var liquidmedium = document.querySelector("#liquidmedium");
var liquidlight = document.querySelector("#liquidlight");

var bBoxGroup = liquidmedium.getBBox();
var bBoxGroup2 = liquidlight.getBBox();

function pour(){
    const tl=gsap.timeline(); 
    tl.from("#tea", {drawSVG:0, duration: 3})
    tl.from("#sand-color-tea", {scale: 1.2, drawSVG:0, duration: 3},"SAMME")
    tl.to("#tea",{opacity: 0}, "-=.2" )
    tl.to("#sand-color-tea",{opacity: 0}, "-=.01" )
    tl.to("#blocker-to-tea",{opacity: 1, y:-100, duration: 7}, "SAMME")
    tl.to("#liquidmedium", {opacity: 4, duration: 1, x: -bBoxGroup.width / 2, ease: "none", repeat: 2}, "SAMME")
    tl.to("#liquidlight", {opacity: 7, duration: 2, x: bBoxGroup2.width / 2, ease: "none",  repeat: 1}, "SAMME")
    tl.to("#liquidmedium", {opacity: 4, duration: 4, y:-200}, "SAMME")
    tl.to("#liquidlight", {opacity: 7, duration: 4, y:-200 }, "SAMME")
    //returning back
    tl.to ("#shape-covering-d", {opacity: 0, duration: .3}, "-=3")
    tl.to("#bottom",{rotation:0, duration: .3}, "-=3")
    tl.to("#handle",{rotation:0, x:0, y: 0, duration: .3}, "-=3")
    tl.to("#yellow-dot",{rotation:0, duration: .3}, "-=3")
    tl.to("#batter",{opacity: 1}, "-=3")
    tl.to("#dark-brown-batter", {opacity: 0, duration: 0.1}, "-=3")
    return tl;
}



mainTL.add(ball())
mainTL.add(water())
mainTL.add(dot())
mainTL.add(teacup())
mainTL.add(pour())





GSDevTools.create();
