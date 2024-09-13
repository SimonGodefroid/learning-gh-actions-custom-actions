const github = require('@actions/github');
const core = require('@actions/core');
const exec = require('@actions/exec');
function run() {
  // 1. Get the inputs
  const bucket = core.getInput('bucket', { required: true, trimWhitespace: true });
  const region = core.getInput('region', { required: true, }); // because has a default
  const distFolder = core.getInput('dist-folder', { required: true, }); // because has a default
  
  // 2. Upload the files
  // we'll run the aws cli command to upload the files (shipped with the action)
  const  s3Uri = `s3://${bucket}/`;
  // AWS_ACCESS_KEY_ID
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${region}`);
  // NB: we could use the nodejs aws sdk 
  core.notice('Coucou c\'est mon action');
};
run();