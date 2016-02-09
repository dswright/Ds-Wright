When first beginning to work on software projects, Git work flow can be very daunting. Below I have listed out my go-to work flow that I use on a daily basis to help keep my work in order.

# 10 step git work flow
(starting on the master brach)

1. git checkout -b branch-name  -- switch to a newly created branch called branch-name
*  edit some code...
2. git add . -- stage your changes to be commited
3. git commit -m "commit message" -- commit your changes
4. git push -u origin branch-name -- push the commits to the remote git repo. This will create a new branch on the repo called branch-name, and the -u flag will permanently link local branch to that remote branch, allowing you to use just 'git push' if you want to push up more changes for this branch. If you want to check what repo is set as your remote origin, you can use 'git remote -v'. Your origin can be reset to a different repo if necessary.

Now lets pretend that someone else made some updates to the master branch and you need to pull them into your branch.
5. git pull --rebase origin master -- this uses rebase to get the latest commits from the master branch on the origin repo. Rebase will add the new commits, and then add your commits on top. If there are any conflicts, you will be notified of which files and be prompted to fix them.
To complete the rebase after finding conflicts, first resolve the conflicts in the file, then run:
6. git add .
7. git rebase --continue
The rebase is now complete. Now we are in a potentially difficult situation. There have been commits pushed to a remote branch, and there have been additional commits that have been rebased on to your local branch from the master branch. So now your local branch and remote branch have different commits and in a different order. Running 'git status' right now will show a message like this:

Git will prompt you to pull down the latest changes from the remote branch, but this is not what you want to do. Doing a rebase of the remote branch now will take you back through resolving your conflicts with the master branch again, and the branches will stay out of sync, making you feel like you are in an endless cycle of rebasing. The correct command in this situation is:
8. git push --force origin branch-name -- this will force push the rebased commits from the master branch, and your additional commits that have been layered on top, onto the remote branch. Now the remote branch and local branch are correctly in sync, and your additional commits have been added on top of the latest commits rebased from the master branch.

The final steps in the git workflow is to submit a pull request. Oftentimes called a 'PR'
9. Go to Github. Make a pull request from the branch you want to merge (usually the one just pushed up to the remote repo), and the master branch.
![Submit Pull Request on GitHub](/images/git-workflow-compare-and-pr.png)
10. Review the PR, add a title and some comments if necessary. Review your code changes and the commits that you are submitting.
![Review PR on Github](/images/review-pr-github.png)
11. Accept the pull request.

Using rebase to merge in changes from other branches is by far the best way to merge your code. It keeps the commits that you have added clean and clear and on top and not muddled together with any other commits. It also allows you to easily squash your own commits using 'git rebase -i' to clean up your commit messages if necessary. The situation described above is the most complicated possible situation you can get into, and most of the time using git rebase is much more simple and you won't have to do everything that I have spelled out above.



