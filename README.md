# prime_solo_nd_01

This is a small MEAN stack project. The goal was to create a personal webpage. I chose to focus on an image carousel that featured imported images.

The icon at the top left redirects to my personal page and the social media icons at the bottom push to my personal social media pages.

Breakout of folders and files in this project:
The .gitignore file tells git what files to ignore
The Gruntfile.js directs Grunt what node_modules need to be copied into my vendor folder. No uglifying.
package.json acts as a guide for our node_modules
The server directory holds our Public directory and our app.js file
  The app.js file sets requirements for future developers and establishes our port
  The Public Directory holds our Assets, Vendors and Views directories
    The Assets folder contains our Scripts and Styles directories
      The Scripts folder contains an app.js and jquery.min js
        The app.js isn't being used right now. I created to help test functionality
        jquery.min.js is the minified jQuery file
      The Styles folder contains Stylesheet.css and an images directory
        Stylesheet.css is my customized stylesheet that overrides bootstrap styling
        Images directory contains all images and icons featured in the site
    The Vendor directory holds public libraries. In this case, bootstrap and jquery
    The Views directory holds the index.html file
      
      
If you have any questions/comments/concerns please feel free to get a hold of me on GitHub at CassandraDanger
