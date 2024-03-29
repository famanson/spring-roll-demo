/**
 * Collection of useful utilities.
 */

// String format util
String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};

String.prototype.escapeRegex = function() {
    var str = this;
    return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};

String.prototype.capitalise = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
