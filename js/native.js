String.prototype.capitalise = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// String format util
String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};