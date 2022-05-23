function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('',model_loaded )
}
function model_loaded(){
    console.log("model is loaded")
}