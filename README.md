## Dependency Management
npm install
npm run gen

**IDEA:** To maintain a single `package-lock.json` file and avoid potential conflicts:
- Install all dependencies from the main project directory:
  npm install
  npm install <package-name> --workspace=backend
  etc.

**Nodemailer - backend/.env.example**
To be able to confirm user accounts via e-mail, you need Nodemailer provider for Strapi, 
If you want to use gmail account for this purpose, create a google app password:
[How to create app password in google](https://knowledge.workspace.google.com/kb/how-to-create-app-passwords-000009237)

**Tailwind CSS Chakra UI**
Due to the fact that I wanted to focus more on logic in the project, I decided to use Chakra UI, but I left Tailwind because I would like to use it even to write maybe a few views.

**Account Confirmation View url in Strapi**
Strapi/Settings/Advanced settings/Redirection url - http://localhost:3000/account-confirmation (Your localhost address)
