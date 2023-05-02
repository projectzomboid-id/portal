---
slug: how-to-contribute-guide
title: How to contribute guide
authors: [chaser]
tags: [guide]
---

## Hi Fellas

Are you a die-hard player of Project Zomboid and have spent countless hours honing your survival skills in the zombie-infested world? Do you have a unique strategy or playstyle that has helped you stay alive longer than your peers? Or perhaps you have some tips and tricks that could benefit the wider community of players?

If so, we invite you to contribute to the Project Zomboid community and share your expertise with others. This is an opportunity for you to give back to the community that has helped you along your journey and to help others improve their gameplay experience.

Whether you're an experienced player or a newcomer to the game, your contributions are welcome. You can share your strategies, playstyles, tips, or anything else that you think would be useful to others. From survival tips to combat tactics, base building strategies to scavenging techniques, there's always something new to learn about Project Zomboid.


### Tools

**Markdown Editor**:
You can use markdown editor to write your guide, we're recommend to use [StackEdit](https://stackedit.io/) stack edit is in-browser markdown editor.

There is a few step in **Non-Advance mode** and  **Advance mode.** 

### Non-Advance  steps

 1. Open `guides` directory ![1](https://imgur.com/eBzjfa5.png)
 2. Edit authors.yml then add your info e.g. 
 
 ```
 chaser:
  name: Chaserlazer
  title: Community Contributor
  url: https://github.com/abimanyudrmwn
  image_url: https://cdn.discordapp.com/avatars/566871075355623449/a660c16ec952c22d5586cac119838b2f?size=1024
  ``` 

![authors](https://imgur.com/pBagsKX.png)
![edit bro wowoww](https://imgur.com/bZ61Fu7.png)
![enter image description here](https://imgur.com/JXFnjPt.png)

4. Save it. Then create new file in `guides` directory with date slug e.g `2023-05-02-your-title.md` 
  ![2](https://imgur.com/cDCFFWr.png)![3](https://imgur.com/fUMHM6d.png)
5. Add header snippet for your content info like this:
![content](https://imgur.com/wNed78R.png)
6. Then you can click Commit changes, fill up commit message or give it default message and add optional description about your guide. Click Commit changes.
7. You can fill [YOUR CONTENT HERE] with your content that created in any markdown editor (we recommend to use [StackEdit](https://stackedit.io/)
8. Create a pull request: Finally, create a pull request to merge your changes into the portal repository. This can be done through the GitHub interface by going to Portal repository and clicking on the "New pull request" button. Make sure to provide a detailed description of your changes and any relevant information.
9. Collaborate: Once you've created a pull request, you may be asked to make changes or address feedback from the portal maintainers. Collaborate with them to ensure that your contribution is up to their standards.

---

### Advance mode

 1. Clone the repository: clone the repository to your local machine. You can do this by running the command `git clone <repository-url>` in your terminal.
 2. Create a new branch: Once you have the repository cloned, create a new branch to work on your changes. This is done using the command `git checkout -b <GUIDES-yourusername>`.
 
 3. Add your author information in `guides/author.yml` then edit like the example below
 
 ```
 chaser:
  name: Chaserlazer
  title: Community Contributor
  url: https://github.com/abimanyudrmwn
  image_url: https://cdn.discordapp.com/avatars/566871075355623449/a660c16ec952c22d5586cac119838b2f?size=1024
  ```

 5. Make your changes: This is the step where you make your contribution. You can directly make new markdown file with date in your terminal e.g. `touch 2023-05-02-your-name-of-content.md` on `guides` directory.
 6. Then don't forget to add content header e.g.
 
```
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


**Built with Docusaurus**
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.



