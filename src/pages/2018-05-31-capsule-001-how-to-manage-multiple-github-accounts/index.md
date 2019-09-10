---
title: How to manage multiple GitHub accounts
date: "2018-05-31T22:12:03.284Z"
category: capsule
cover: ./cover.jpg
---

You know when you have multiple personalities, it's hard to manage stuff. We
live on that state of multiple "we". Even when coding we have to switch from
one GitHub account to another. So, to start our "capsules" (thanks Hundred
Rabbits for the inspiration for the name!) here we go: how we manage multiple
GitHub accounts on the same machine using different SSH keys. Too nerdy? Get
used to it ;-)

```bash
$ ssh-keygen -t rsa -C "foo@bar.com" -f ~/.ssh/id_rsa_foo
$ pbcopy < ~/.ssh/id_rsa.pub
```

Now go to your GitHub Settings Page, select SSH and GPG keys config, click on
New SSH Key and paste your new key.

Every time you want to become `foo`, run the following:

```bash
$ ssh-add -D
$ ssh-add ~/.ssh/id_rsa_foo
$ git config user.name "Foo"
$ git config user.email "foo@bar.com"
```

And to go back:

```bash
$ ssh-add -D
$ ssh-add ~/.ssh/id_rsa
$ git config user.name "You"
$ git config user.email "you@domain.com"
```

To make it easier, we just have a simple script to toggle between our two
accounts:

```bash
$ toggle.sh
You are now Foo.
$ toggle.sh
You are now You.
```

