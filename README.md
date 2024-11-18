# Around The World - Event Management System PWA

## Table of Contents
- [Introduction](#introduction)
- [Dependencies](#dependencies)
- [Running the Project Locally](#running-the-project-locally)
- [Running the Project via Docker](#running-the-project-via-docker)
- [Nodemailer Configuration](#nodemailer-configuration)
- [Account Management with Strapi](#account-management-with-strapi)

## Introduction
This is a monorepo project combining a frontend (Next.js + Chakra UI/Tailwind CSS) and a backend (Strapi).

### Chakra UI vs Tailwind CSS
Due to the fact that I wanted to focus more on logic in the project, I decided to use Chakra UI, but I left Tailwind because I would like to use it even to write maybe a few views.

## Dependencies
To maintain a single `package-lock.json` file and avoid potential conflicts:
- Install all dependencies from the main project directory:
  npm install
  npm install <package-name> --workspace=backend
  etc.

## Running the Project Locally
<!-- Set Up Environment Variables on the backend and frontend based on the provided .env.example, env.docker.example, etc. -->
<!-- From the main project directory, install all dependencies for both workspaces -->
npm install-all
<!-- Additionally, you will need PostgreSQL and create a database ("backend/.env.example") and then import the data. -->
psql -U postgres -d around_the_world -f backend/db/db_backup.sql
<!-- Run the GraphQL Code Generator -->
npm run gen
<!-- Run the app -->
npm run start

## Running the Project via Docker
<!-- From main folder -->
docker-compose up --build
<!-- For stops and removes containers, volumes -->
docker-compose down -v

## Nodemailer Configuration
backend/.env.example
To be able to confirm user accounts via e-mail, you need Nodemailer provider for Strapi, 
If you want to use gmail account for this purpose, create a google app password:
[How to create app password in google](https://knowledge.workspace.google.com/kb/how-to-create-app-passwords-000009237)

## Account Management with Strapi
**Account Confirmation/Restart Password View url**
Strapi/Settings/Advanced settings/Redirection url - http://localhost:3000/account-confirmation (Your localhost address)
Strapi/Settings/Advanced settings/Reset password page - http://localhost:3000/reset-password (Your localhost address)
<!-- Changing login details to the admin panel in Strapi -->
npm run strapi admin:reset-user-password --email="your_email" --password="your_password"
<!-- Default is -->
"Admin@gmail.com" "tHt1passPH#" 