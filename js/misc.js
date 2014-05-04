/* Non-Angular javascript things */
var nonFixedClass = document.getElementById('ld-header').className;
document.addEventListener('scroll',function(){
//    console.log("body: " + this.getElementById('body').scrollTop);
//    console.log("header height: " + this.getElementById('header').clientHeight);
    var headerHeight = this.getElementById('header').clientHeight;
    var bodyTop = this.getElementById('body').scrollTop;
    if (headerHeight < bodyTop) {
        this.getElementById('ld-header').className = nonFixedClass + " fixed";
    } else {
        this.getElementById('ld-header').className = nonFixedClass;
    }
});