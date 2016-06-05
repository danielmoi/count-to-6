// You will be given two arguments to your program: a username, and a comment. Both will potentially contain HTML-unsafe characters (namely ', ", <, >, and &). Your job is to use tagged template strings to log a safely-escaped HTML rendering of the comment.
//
// For example, if the username is "domenic" and the comment is "<dl> is a fun tag", you should output:
//
//     <b>domenic says</b>: "&lt;dl&gt; is a fun tag"

// console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

// function html(username, comment) {
//     // what goes here?
//     // don't forget to return the escaped string!
//     console.log('username: ', username);
//     console.log('comment: ', comment);
// }
//
//
// console.log( html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

// function html(`<b>${username} says</b>: ${comment}`) {
//     // what goes here?
//     // don't forget to return the escaped string!
//     console.log('username: ', username);
//     console.log('comment: ', comment);
//     return `<b>${username} says</b>: ${comment}`;
// }

var equivs = {
  "'": '&apos;'
};

function escaper(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    // .replace(/'/g, "&#39;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function html(...args) {
  var arrStr = args[0];
  var username = args[1];
  var comment = args[2];
  username = escaper(username);
  comment = escaper(comment);
  return arrStr[0] + username + arrStr[1] + comment + arrStr[2];
}


console.log( html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

// solution
function html(pieces, ...substitutions) {
    var result = pieces[0];
    for (var i = 0; i < substitutions.length; ++i) {
        result += escape(substitutions[i]) + pieces[i + 1];
    }

    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}

// my new one
function html(arrStr, ...subs) {
  var result = arrStr[0];
  for (var i = 0; i < subs.length; i++) {
    result += escaper(subs[i]) + arrStr[i + 1];
  }
  return result;
}
