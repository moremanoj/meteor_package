// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by demo-calculate.js.
import { name as packageName } from "meteor/moremanoj:demo-calculate";

// Write your tests here!
// Here is an example.
Tinytest.add('demo-calculate - example', function (test) {
  test.equal(packageName, "demo-calculate");
});
