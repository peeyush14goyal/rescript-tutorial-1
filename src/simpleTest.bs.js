// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("bs-platform/lib/js/caml_obj.js");

function assertEqual(expected, actual, msg) {
  if (Caml_obj.caml_equal(expected, actual)) {
    console.log("\u001b[92m" + "PASS: " + "\u001b[39m" + msg);
  } else {
    console.log("\u001b[91m" + "FAIL: " + "\u001b[39m" + msg);
    console.log("~~~~~~~~~");
    console.log("Expected: ");
    console.log("---------");
    console.log(expected);
    console.log("");
    console.log("Received: ");
    console.log("---------");
    console.log(actual);
    console.log("~~~~~~~~~");
  }
  
}

exports.assertEqual = assertEqual;
/* No side effect */
