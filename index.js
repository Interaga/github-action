import core from "@actions/core";
import github from "@actions/github";

/*

issue object is defined here: https://docs.github.com/en/graphql/reference/objects#issue

octokit/rest.js API: https://octokit.github.io/rest.js/v18

example that walks through all the comments: https://github.com/peter-evans/find-comment

*/

async function run() {
  var success = true;

  try {
    const issue = core.getInput("issue");
    const githubToken = core.getInput("githubToken");
    const octokit = github.getOctokit(githubToken);
    console.log("the issue passed by the workflow:", JSON.stringify(issue, undefined, 2));

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = github.context.payload;
    console.log("The event payload:", JSON.stringify(payload, undefined, 2));

    const repository = core.getInput("repository");
    const [owner, repo] = repository.split("/");

    // get the issue and walk through the comments
    const parameters = {
      owner,
      repo,
      issue_number: payload.issue.id,
    };

    for await (const comments of octokit.paginate.iterator(octokit.rest.issues.listComments, parameters)) {
      comments.forEach((comment) => {
        console.log("COMMENT: ", comment);
      });
    }
  } catch (error) {
    success = false;
    core.setFailed(error.message);
  }
  core.setOutput("success", success);
}

await run();
