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
