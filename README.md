## Getting Started

Welcome to IPZ Portal. This is your go-to destination for all things related to Indonesia Project Zomboid. Our platform is designed to provide you with a one-stop-shop for all the information you need to get started with the game.

Whether you're a newcomer or a seasoned player, our community is here to support you. You'll find a wealth of resources here, including guides, tutorials, tips and tricks, and much more. Our content is regularly updated to ensure that you have access to the latest and most accurate information.

One of the great things about our community is that it's open to everyone. We welcome contributions from members of the community, whether you're an experienced player or just starting out. You can share your own guides, tutorials, and other helpful resources to help others get started with the game.

So why not join us today and start exploring all that our community has to offer? Whether you're looking to learn more about the game or share your own knowledge with others, you'll find everything you need right here. We look forward to seeing you around!

## How to Contribute a Guide?

## Tools

**Markdown Editor**:
You can use markdown editor to write your guide, we're recommendating to use [StackEdit](https://stackedit.io/) stack edit is in-browser markdown editor.

There is a few step in **Advance mode** 


---
### Advance mode

 1. Clone the repository: clone the repository to your local machine. You can do this by running the command `git clone https://github.com/projectzomboid-id/portal.git` in your terminal.
 2. Create a new branch: Once you have the repository cloned, create a new branch to work on your changes. This is done using the command `git checkout -b <GUIDES-yourusername>`.
 3. Add your author information in `guides/author.yml` then edit like the example below
 ```yml
 chaser:
  name: Chaserlazer
  title: Community Contributor
  url: https://github.com/abimanyudrmwn (You can fill url with any social media account)
  image_url: https://cdn.discordapp.com/avatars/566871075355623449/a660c16ec952c22d5586cac119838b2f?size=1024
```
 5. Make your changes: This is the step where you make your contribution. You can directly make new markdown file with date in your terminal e.g. `touch 2023-05-02-your-name-of-content.md` on `guides` directory.
 6. Then don't forget to add content header e.g.
```md
---
slug: guide-for-dummy
title: Guide for Dummy
authors: [chaser]
tags: [guide]
---

[YOUR CONTENT]
```
7. Commit your changes: Once you have made your changes, commit them to your branch. This is done using the command `git commit -m "guides: [YOUR-GUIDE-TITLE]"`.
8. Push your changes: After committing your changes, push them to your fork on GitHub. This is done using the command `git push origin <new-branch-name>`.
9. Create a pull request: Finally, create a pull request to merge your changes into the portal repository. This can be done through the GitHub interface by going to Portal repository and clicking on the "New pull request" button. Make sure to provide a detailed description of your changes and any relevant information.
10. Collaborate: Once you've created a pull request, you may be asked to make changes or address feedback from the portal maintainers. Collaborate with them to ensure that your contribution is up to their standards. 

---
## Built with Docusaurus
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

