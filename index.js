const core = require("@actions/core");
const github = require("@actions/github");

// issue object is defined here: https://docs.github.com/en/graphql/reference/objects#issue
var success = true;

try {
  // issue input defined in action metadata file
  const issue = core.getInput("issue");
  console.log("the issue passed by the workflow:", issue);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log("The event payload:", payload);
} catch (error) {
  success = false;
  core.setFailed(error.message);
}
core.setOutput("success", success);
