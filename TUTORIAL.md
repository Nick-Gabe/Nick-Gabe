# Hey, do you want an automated README aswell?
I decided to create this since it is really easy taking mine as a base, and you're free to customize it the way you want at anytime.

### Just follow those steps:
- **Fork my repository**
  - Instead of just creating a repository from scratch, you need to use mine as a template. You can enter [this link](https://github.com/Nick-Gabe/Nick-Gabe/fork) to generate it. Put your Github username as the repository name, this way it will be displayed at your profile.
- **Edit the code**
  - To make your life easier, the code I wrote using Javascript is already done, and you just need to set the environment variables. They are located at [.env](/.env), also if you want to know what each option is, here's the [.env example](/.env.example). Just modify them at .env and your automatic README will already start working.
- **Install the dependencies**
  - Just run "npm install" at your Terminal and it will install whatever dependencies the project currently uses.

### Customizing your README:
- **Don't change the README itself**
  - There is a file called ["README_TEMPLATE"](./README_TEMPLATE.md), it is the file you should modify if you want to make changes to your Readme.
  - You can add custom replacers inside the [replacers folder](./replacers), you can imagine the replacers just like React components, with each file having its own thing to replace, and the file name is what it will replace.
- **How to test if its working?**
  - That's simple! After creating your README_TEMPLATE and maybe some custom replacers, you just need to run `npm start` and your README will update itself with the new information. Magic, right?