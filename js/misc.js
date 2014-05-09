/* Non-Angular javascript things */

document.addEventListener('scroll',function(){
    var headerHeight = this.getElementById('header').clientHeight,
        bodyTop = this.getElementById('body').scrollTop,
        currentClass = document.getElementById('ld-header').className;
    if (headerHeight < bodyTop) {
        if (currentClass.indexOf("fixed") == -1) {
            this.getElementById('ld-header').className = currentClass + " fixed";
        }
    } else {
        this.getElementById('ld-header').className = currentClass.replace("fixed", "");
    }
});