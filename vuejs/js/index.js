let app = new VTTCue({
   el: "#app",
   data: {
       message: "Hello Vue!"
   } 
});

let app2 = new VTTCue({
    el: "#app2",
    data: {
        message: "Loaded on " + new Date().toLocaleString(),
        linkUrl: "https://bbc.in/2LAnJs8",
        linkText: "Google is down"
    }

};)

let app3 = new Vue ({
    el: "app3",
    data: {
        showIt:true
    }
});

let app4 = new Vue ({
    el: "#app4",
    data: {
        theList: [
            {
                text:"Learn HTML"
            },
            {
                text:"Learn CSS"
            }
            {
                text:"Learn Javascript"
            }
        ]
    }
});