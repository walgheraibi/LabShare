# CONTRIBUTING

There are a number of ways to get involved with the development of ls-seed. Even if you've never contributed code to an Open Source project before, we're always looking for help identifying bugs, writing and reducing test cases and documentation.

### CLONE - Create your local workspace

Clone the project to your local workspace
```
$ git clone https://github.com/LabShare/ls-seed.git
$ cd ls-seed
$ git remote add upstream https://github.com/LabShare/ls-seed.git
```

### BRANCH - Create your git branch

Create your feature branch and start hacking:
```
$ git checkout -b <my-branch-name>
$ git status
```
Status should show your current branch

### HACKING - Update code with your own awesome features

Go to your local workspace and start making changes for your features and bug fixes

```
$ mkdir MyAwesomeNewFeature
$ cd MyAwesomeNewFeature
$ vi AwesomeFeature.js
```
Check the list of changes on your local git repo
```
$git status
```
Once you are ready to commit to your local repo, go ahead...

### COMMIT - Add your updates to your local repo
Make sure git knows your name and email address:

```
$ git config --global user.name "J. Contributing User"
$ git config --global user.email "j.contributing.user@example.com"
```

```
$git commit
```

Writing good commit logs is important.  A commit log should describe what 
changed and why.  Follow these guidelines when writing one:

1. The first line should be 50 characters or less and contain a short
   description of the change.
2. Keep the second line blank.
3. Wrap all other lines at 72 columns.

A good commit log looks like this:

```
Header line: explaining the commit in one line

Body of commit message is a few lines of text, explaining things
in more detail, possibly giving some background about the issue
being fixed, etc etc.

The body of the commit message can be several paragraphs, and
please do proper word-wrap and keep columns shorter than about
72 characters or so. That way `git log` will show things
nicely even when it is indented.
```

The header line should be meaningful; it is what other people see when they
run `git shortlog` or `git log --oneline`.

Have a look at `git log` for inspiration.

### REBASE

Use `git rebase` (not `git merge`) to sync your work from time to time.

```
$ git fetch upstream
$ git rebase upstream/v0.8  # or upstream/master
```

### PUSH

```
$ git push origin <my-branch-name>
```


### Further Reading

Git Documentation: http://git-scm.com/documentation


