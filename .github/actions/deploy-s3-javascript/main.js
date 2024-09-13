const github = require('@actions/github');
const core = require('@actions/core');
const exec = require('@actions/exec');
function run() {
  core.notice('Coucou c\'est mon action')
};
run();