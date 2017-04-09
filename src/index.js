const commaless = function (source) {
    if(!source) return source;
    const space = " ";
    const squareBrackets = /\[(.*?)\]/; 
    const matches = source.match(squareBrackets).slice(-1);
    const replaces = matches.map(match => match.split(space).map( s => s + ",").join(space));
    const output = matches.reduce((source, match, index) => source.replace(match, replaces[index]), source);
    return output;
};

module.exports = commaless;