# 🌶 Cosmetic Medical Academy

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)

#### Based on [Netlify CMS + React Starter](https://github.com/Jinksi/netlify-cms-react-starter/)

## Cloning this project

1. Clone the repo to your local machine

1. Remove the remote
    > `git remote rm origin`

1. Create a new empty repo on Github

1. Add this new repo address to your local repo and push
    > `git remote add origin ______ && git push -u origin master`

1. [Create a new project on Netlify](https://app.netlify.com/start) from your new Github Project

1. Once your Netlify project has been created, change a couple of settings:

    - Enable **Identity**
    - Change **Registration Preferences** to **Invite Only**
    - Enable **Git Gateway**

1. Invite users (probably yourself) to enable admin access

    - Open the **Identity** tab and hit **Invite Users**

1. Wait for the deploy to finish (first build takes longer)

## Show me the CMS!

The CMS lives at [\__YOUR_SITE_NAME__.netlify.com/admin](https://__YOUR_SITE_NAME__.netlify.com/admin).


## Developing

1. Clone your repo to your local machine

1. Install dependencies  

  `yarn` or `npm install`

1. Run the development server

  `yarn start` or `npm run start`

If you are adding or editing content locally in the CMS, a couple of things to note:

  1. Changes will be pushed to the remote repo.  

  1. You will be prompted to enter your site's url, this is necessary for Netlify Identity to manage user login. This is stored in `localStorage`, so you might have to empty your browser cache if you are switching projects but remaining on `localhost:3000`.

## Editing CMS fields

The Netlify CMS configuration is located in `public/admin/config.yml`. This is where you will configure the pages, fields, posts and settings that are editable by the CMS.

Find out more in the [Netlify CMS Docs](https://www.netlifycms.org/docs/#configuration).

## See also

[Netlify CMS Docs](https://www.netlifycms.org/docs/)  
[Netlify CMS Repo](https://github.com/netlify/netlify-cms)  
[Hyperstatic](https://github.com/Jinksi/hyperstatic) – the same starter project minus Netlify CMS  
[Gatsby + Netlify CMS Starter](https://github.com/AustinGreen/gatsby-starter-netlify-cms)
