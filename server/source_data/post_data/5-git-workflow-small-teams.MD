When first beginning to work on software projects, Git work flow can be very daunting. Below I have listed out my go-to work flow that I use on a daily basis to help keep my work in order.

# 10 step git work flow
(starting on the master brach)

1. git checkout -b branch-name  -- switch to a newly created branch called branch-name
*  edit some code...
2. git add . -- stage your changes to be commited
3. git commit -m "commit message" -- commit your changes
4. git push -u origin branch-name -- push the commits to the remote git repo. This will create a new branch on the repo called branch-name, and permanently link local branch to that remote branch, allowing you to use just 'git push' to push your local repo again. If you want to check what repo is as your remote origin, you can use 'git remote -v'. Your origin can be reset to a different repo if necessary.
5. Go to Github. Make a pull request from the branch you want to merge (usually the one just pushed up to the remote repo), and the master branch.
6. 