## CI flow

1) developer pushes code to github
2) CI Server detects that a new push of code occured
3) CI Server clones project to a cloud-based virtual machine
4) CI Server runs all tests (Travis runs tests using a'.travis.yml' file)
5) If all tests pass, CI server marks build as 'passing' and does some optional followup

### CI Providers
- Travis CI
- Circle CI (like travis)
- Codeship
- AWS Codebuild (more advaced, amazon)
