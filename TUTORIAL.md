# Hey, do you want an automated README aswell?

I decided to create this since it is really easy taking mine as a base, and you're free to customize it the way you want at anytime.

## Just follow those steps

- **Fork my repository**
  - Instead of just creating a repository from scratch, you need to use mine as a template. You can enter [this link](https://github.com/Nick-Gabe/Nick-Gabe/fork) to generate it. Put your Github username as the repository name, this way it will be displayed at your profile.
- **Edit the code**
  - To make your life easier, the code I wrote using Javascript is already done, and you just need to set the data that will be used. It is located at [data.js](/data.js). Just modify the file, push and your automatic README will be generated.

## Customizing your README

- **Install the dependencies**
  - Run `npm install` at your Terminal and it will install all the dependencies the project currently uses.
- **Don't change the README itself**
  - There is a file called ["README_TEMPLATE"](./README_TEMPLATE.md), it is the file you should modify if you want to make changes to your Readme.
  - You can add custom replacers inside the [replacers folder](./src/replacers). The name of the file is the name of the replacer you need to mention at your template, so `%{myexperience}` is replaced by the result of the [myexperience.js](./src/replacers/myexperience.js) file.
- **How to test if its working?**
  - That's simple! After editing your README_TEMPLATE, you just need to run `npm start` and your README will update itself with the new information. Magic, right?

Want to see it in a video? [Here it is!](https://youtu.be/Dd28Zy4Rm6g)
