# github-action

Github Action playground

## Github payload

``` JSON
The event payload: {
  "action": "created",
  "comment": {
    "author_association": "OWNER",
    "body": "trigger",
    "created_at": "2022-09-06T20:50:54Z",
    "html_url": "https://github.com/interaga/github-dev/issues/1#issuecomment-1238635946",
    "id": 1238635946,
    "issue_url": "https://api.github.com/repos/interaga/github-dev/issues/1",
    "node_id": "IC_kwDOH4bSvc5J1BWq",
    "performed_via_github_app": null,
    "reactions": {
      "+1": 0,
      "-1": 0,
      "confused": 0,
      "eyes": 0,
      "heart": 0,
      "hooray": 0,
      "laugh": 0,
      "rocket": 0,
      "total_count": 0,
      "url": "https://api.github.com/repos/interaga/github-dev/issues/comments/1238635946/reactions"
    },
    "updated_at": "2022-09-06T20:50:54Z",
    "url": "https://api.github.com/repos/interaga/github-dev/issues/comments/1238635946",
    "user": {
      "avatar_url": "https://avatars.githubusercontent.com/u/1056873?v=4",
      "events_url": "https://api.github.com/users/interaga/events{/privacy}",
      "followers_url": "https://api.github.com/users/interaga/followers",
      "following_url": "https://api.github.com/users/interaga/following{/other_user}",
      "gists_url": "https://api.github.com/users/interaga/gists{/gist_id}",
      "gravatar_id": "",
      "html_url": "https://github.com/interaga",
      "id": 1056873,
      "login": "interaga",
      "node_id": "MDQ6VXNlcjEwNTY4NzM=",
      "organizations_url": "https://api.github.com/users/interaga/orgs",
      "received_events_url": "https://api.github.com/users/interaga/received_events",
      "repos_url": "https://api.github.com/users/interaga/repos",
      "site_admin": false,
      "starred_url": "https://api.github.com/users/interaga/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/interaga/subscriptions",
      "type": "User",
      "url": "https://api.github.com/users/interaga"
    }
  },
  "issue": {
    "active_lock_reason": null,
    "assignee": null,
    "assignees": [],
    "author_association": "OWNER",
    "body": "let's see what happens",
    "closed_at": null,
    "comments": 1,
    "comments_url": "https://api.github.com/repos/interaga/github-dev/issues/1/comments",
    "created_at": "2022-09-06T20:25:32Z",
    "events_url": "https://api.github.com/repos/interaga/github-dev/issues/1/events",
    "html_url": "https://github.com/interaga/github-dev/issues/1",
    "id": 1363776657,
    "labels": [],
    "labels_url": "https://api.github.com/repos/interaga/github-dev/issues/1/labels{/name}",
    "locked": false,
    "milestone": null,
    "node_id": "I_kwDOH4bSvc5RSZSR",
    "number": 1,
    "performed_via_github_app": null,
    "reactions": {
      "+1": 0,
      "-1": 0,
      "confused": 0,
      "eyes": 0,
      "heart": 0,
      "hooray": 0,
      "laugh": 0,
      "rocket": 0,
      "total_count": 0,
      "url": "https://api.github.com/repos/interaga/github-dev/issues/1/reactions"
    },
    "repository_url": "https://api.github.com/repos/interaga/github-dev",
    "state": "open",
    "state_reason": null,
    "timeline_url": "https://api.github.com/repos/interaga/github-dev/issues/1/timeline",
    "title": "workflow test",
    "updated_at": "2022-09-06T20:50:54Z",
    "url": "https://api.github.com/repos/interaga/github-dev/issues/1",
    "user": {
      "avatar_url": "https://avatars.githubusercontent.com/u/1056873?v=4",
      "events_url": "https://api.github.com/users/interaga/events{/privacy}",
      "followers_url": "https://api.github.com/users/interaga/followers",
      "following_url": "https://api.github.com/users/interaga/following{/other_user}",
      "gists_url": "https://api.github.com/users/interaga/gists{/gist_id}",
      "gravatar_id": "",
      "html_url": "https://github.com/interaga",
      "id": 1056873,
      "login": "interaga",
      "node_id": "MDQ6VXNlcjEwNTY4NzM=",
      "organizations_url": "https://api.github.com/users/interaga/orgs",
      "received_events_url": "https://api.github.com/users/interaga/received_events",
      "repos_url": "https://api.github.com/users/interaga/repos",
      "site_admin": false,
      "starred_url": "https://api.github.com/users/interaga/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/interaga/subscriptions",
      "type": "User",
      "url": "https://api.github.com/users/interaga"
    }
  },
  "repository": {
    "allow_forking": true,
    "archive_url": "https://api.github.com/repos/interaga/github-dev/{archive_format}{/ref}",
    "archived": false,
    "assignees_url": "https://api.github.com/repos/interaga/github-dev/assignees{/user}",
    "blobs_url": "https://api.github.com/repos/interaga/github-dev/git/blobs{/sha}",
    "branches_url": "https://api.github.com/repos/interaga/github-dev/branches{/branch}",
    "clone_url": "https://github.com/interaga/github-dev.git",
    "collaborators_url": "https://api.github.com/repos/interaga/github-dev/collaborators{/collaborator}",
    "comments_url": "https://api.github.com/repos/interaga/github-dev/comments{/number}",
    "commits_url": "https://api.github.com/repos/interaga/github-dev/commits{/sha}",
    "compare_url": "https://api.github.com/repos/interaga/github-dev/compare/{base}...{head}",
    "contents_url": "https://api.github.com/repos/interaga/github-dev/contents/{+path}",
    "contributors_url": "https://api.github.com/repos/interaga/github-dev/contributors",
    "created_at": "2022-08-25T16:20:17Z",
    "default_branch": "main",
    "deployments_url": "https://api.github.com/repos/interaga/github-dev/deployments",
    "description": "This is the repo representative of a dev team that wants to trigger the github-action",
    "disabled": false,
    "downloads_url": "https://api.github.com/repos/interaga/github-dev/downloads",
    "events_url": "https://api.github.com/repos/interaga/github-dev/events",
    "fork": false,
    "forks": 0,
    "forks_count": 0,
    "forks_url": "https://api.github.com/repos/interaga/github-dev/forks",
    "full_name": "interaga/github-dev",
    "git_commits_url": "https://api.github.com/repos/interaga/github-dev/git/commits{/sha}",
    "git_refs_url": "https://api.github.com/repos/interaga/github-dev/git/refs{/sha}",
    "git_tags_url": "https://api.github.com/repos/interaga/github-dev/git/tags{/sha}",
    "git_url": "git://github.com/interaga/github-dev.git",
    "has_downloads": true,
    "has_issues": true,
    "has_pages": false,
    "has_projects": true,
    "has_wiki": true,
    "homepage": null,
    "hooks_url": "https://api.github.com/repos/interaga/github-dev/hooks",
    "html_url": "https://github.com/interaga/github-dev",
    "id": 528929469,
    "is_template": false,
    "issue_comment_url": "https://api.github.com/repos/interaga/github-dev/issues/comments{/number}",
    "issue_events_url": "https://api.github.com/repos/interaga/github-dev/issues/events{/number}",
    "issues_url": "https://api.github.com/repos/interaga/github-dev/issues{/number}",
    "keys_url": "https://api.github.com/repos/interaga/github-dev/keys{/key_id}",
    "labels_url": "https://api.github.com/repos/interaga/github-dev/labels{/name}",
    "language": null,
    "languages_url": "https://api.github.com/repos/interaga/github-dev/languages",
    "license": null,
    "merges_url": "https://api.github.com/repos/interaga/github-dev/merges",
    "milestones_url": "https://api.github.com/repos/interaga/github-dev/milestones{/number}",
    "mirror_url": null,
    "name": "github-dev",
    "node_id": "R_kgDOH4bSvQ",
    "notifications_url": "https://api.github.com/repos/interaga/github-dev/notifications{?since,all,participating}",
    "open_issues": 1,
    "open_issues_count": 1,
    "owner": {
      "avatar_url": "https://avatars.githubusercontent.com/u/1056873?v=4",
      "events_url": "https://api.github.com/users/interaga/events{/privacy}",
      "followers_url": "https://api.github.com/users/interaga/followers",
      "following_url": "https://api.github.com/users/interaga/following{/other_user}",
      "gists_url": "https://api.github.com/users/interaga/gists{/gist_id}",
      "gravatar_id": "",
      "html_url": "https://github.com/interaga",
      "id": 1056873,
      "login": "interaga",
      "node_id": "MDQ6VXNlcjEwNTY4NzM=",
      "organizations_url": "https://api.github.com/users/interaga/orgs",
      "received_events_url": "https://api.github.com/users/interaga/received_events",
      "repos_url": "https://api.github.com/users/interaga/repos",
      "site_admin": false,
      "starred_url": "https://api.github.com/users/interaga/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/interaga/subscriptions",
      "type": "User",
      "url": "https://api.github.com/users/interaga"
    },
    "private": true,
    "pulls_url": "https://api.github.com/repos/interaga/github-dev/pulls{/number}",
    "pushed_at": "2022-09-06T20:24:56Z",
    "releases_url": "https://api.github.com/repos/interaga/github-dev/releases{/id}",
    "size": 149,
    "ssh_url": "git@github.com:interaga/github-dev.git",
    "stargazers_count": 0,
    "stargazers_url": "https://api.github.com/repos/interaga/github-dev/stargazers",
    "statuses_url": "https://api.github.com/repos/interaga/github-dev/statuses/{sha}",
    "subscribers_url": "https://api.github.com/repos/interaga/github-dev/subscribers",
    "subscription_url": "https://api.github.com/repos/interaga/github-dev/subscription",
    "svn_url": "https://github.com/interaga/github-dev",
    "tags_url": "https://api.github.com/repos/interaga/github-dev/tags",
    "teams_url": "https://api.github.com/repos/interaga/github-dev/teams",
    "topics": [],
    "trees_url": "https://api.github.com/repos/interaga/github-dev/git/trees{/sha}",
    "updated_at": "2022-09-06T18:48:58Z",
    "url": "https://api.github.com/repos/interaga/github-dev",
    "visibility": "private",
    "watchers": 0,
    "watchers_count": 0,
    "web_commit_signoff_required": false
  },
  "sender": {
    "avatar_url": "https://avatars.githubusercontent.com/u/1056873?v=4",
    "events_url": "https://api.github.com/users/interaga/events{/privacy}",
    "followers_url": "https://api.github.com/users/interaga/followers",
    "following_url": "https://api.github.com/users/interaga/following{/other_user}",
    "gists_url": "https://api.github.com/users/interaga/gists{/gist_id}",
    "gravatar_id": "",
    "html_url": "https://github.com/interaga",
    "id": 1056873,
    "login": "interaga",
    "node_id": "MDQ6VXNlcjEwNTY4NzM=",
    "organizations_url": "https://api.github.com/users/interaga/orgs",
    "received_events_url": "https://api.github.com/users/interaga/received_events",
    "repos_url": "https://api.github.com/users/interaga/repos",
    "site_admin": false,
    "starred_url": "https://api.github.com/users/interaga/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/interaga/subscriptions",
    "type": "User",
    "url": "https://api.github.com/users/interaga"
  }
}```

``` JSON
data: [{
      "url": 'https://api.github.com/repos/interaga/github-dev/issues/comments/1238635946',
      "html_url": 'https://github.com/interaga/github-dev/issues/1#issuecomment-1238635946',
      "issue_url": 'https://api.github.com/repos/interaga/github-dev/issues/1',
      "id": 1238635946,
      "node_id": 'IC_kwDOH4bSvc5J1BWq',
      "user": [Object],
      "created_at": '2022-09-06T20:50:54Z',
      "updated_at": '2022-09-06T20:50:54Z',
      "author_association": 'OWNER',
      "body": 'trigger',
      "reactions": [Object],
      "performed_via_github_app": null
    },
    {
      "url": 'https://api.github.com/repos/interaga/github-dev/issues/comments/1238690493',
      "html_url": 'https://github.com/interaga/github-dev/issues/1#issuecomment-1238690493',
      "issue_url": 'https://api.github.com/repos/interaga/github-dev/issues/1',
      "id": 1238690493,
      "node_id": 'IC_kwDOH4bSvc5J1Oq9',
      "user": [Object],
      "created_at": '2022-09-06T21:48:21Z',
      "updated_at": '2022-09-06T21:48:21Z',
      "author_association": 'OWNER',
      "body": 'another',
      "reactions": [Object],
      "performed_via_github_app": null
    },]
```


the platform tag is a topic