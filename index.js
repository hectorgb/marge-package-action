const core = require('@actions/core')
const exec = require('child_process').exec
const fs = require('fs')

try {
  installSfdcMergePackage()
} catch (error) {
  core.setFailed(error.message)
}

function installSfdcMergePackage(){
  var install = 'npm install -g sfdc-merge-package'
  exec(install, function(error, stdout, stderr){
    if(error) throw(stderr)
    core.debug(stdout)
  })
}