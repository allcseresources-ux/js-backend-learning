require("dotenv").config();
console.log("hello world");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

let githubData = {
  login: "allcseresources-ux",
  id: 228361042,
  node_id: "U_kgDODZyDUg",
  avatar_url: "https://avatars.githubusercontent.com/u/228361042?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/allcseresources-ux",
  html_url: "https://github.com/allcseresources-ux",
  followers_url: "https://api.github.com/users/allcseresources-ux/followers",
  following_url:
    "https://api.github.com/users/allcseresources-ux/following{/other_user}",
  gists_url: "https://api.github.com/users/allcseresources-ux/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/allcseresources-ux/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/allcseresources-ux/subscriptions",
  organizations_url: "https://api.github.com/users/allcseresources-ux/orgs",
  repos_url: "https://api.github.com/users/allcseresources-ux/repos",
  events_url:
    "https://api.github.com/users/allcseresources-ux/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/allcseresources-ux/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 1,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2025-08-24T16:20:08Z",
  updated_at: "2025-08-24T19:14:16Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (rew, res) => {
  res.send("razi.twit");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Code with Harry</h2>");
});

app.get('/github', (req ,res ) =>{
  res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
