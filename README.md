# Assignment 1
## Build a static website

Our assignments are going to be built around building a blog from the ground up and eventually hosting your blog in the cloud. For this first assignment, you are going to take the content that is in the raw_content folder and build a blog out of it.

You will use HTML, CSS, and Javascript to build a static web page using the content that is in the raw_content folder. The content contains five blog articles that will be separate pages on your website.

You will need to do the following:

**Create a homepage**
 - With a heading to designate the title of the web page
 - With links to all five of the blog entries that are in the raw_content folder
 
**Create five blog posts with the content in the raw_content folder**
 - Mark up the content using **semantic** HTML tags (h1, p, section, etc...)
 - These files are written in markdown format. If you go to your repository on github and click on the file, you will see these files formatted. Be sure to emulate exactly what you see on your website, for example, ordered lists should use the ul and li tags.

**Create an About Us page**
 - You can write whatever content you would like in this page about your self
 - Make sure you mark up the content using **semantic** html tags

**Create a Contact Us page**
 - Create a page that contains a (non-working) form where people can contact you
 - Need to have the following fields: Name, Subject, Message
 - Must have a submit button
 - Must make all fields required: if user submits form without those fields a message saying which fields need to be filled out at the top of the page.
   - Note: **this is not an alert box.** You will need to modify the HTML of the page to place this text at the top of the page.
 - When someone clicks the submit button, a message should appear on the top of the page saying "Your message has been sent"
   - Note: **this is not an alert box.** You will need to modify the HTML of the page to place this text at the top of the page.
 - The message does not need to be sent to any particular address
 - Must use JavaScript

**Look and feel**
 - Must have a header and a footer on every page that contains the following links: the homepage, the About us page, and the Contact Us page
 - Must specifically style the header with one css style
 - Must specifically style the footer with one css style
 - Must link at least one external CSS style sheet that **you have written yourself**
 - Can use [Skeleton](http://getskeleton.com/) (or another CSS framework) as one of the CSS style sheets, but again one CSS file must be handwritten by you
 - Must style at least one *element*, one *class*, and one *id* and use it somewhere on your web page
 - Must use styles that cascade, i.e. some element whose style is affected by more than 1 declaration in your CSS file

**Interactivity**
 - Must link at least one external JavaScript file to the web page
 - Must use JavaScript to power the Contact Us page

**Other requirements**
 - HTML and CSS must validate! Use the Markup Validation Service for [HTML](https://validator.w3.org/#validate_by_upload+with_options) and [CSS](http://jigsaw.w3.org/css-validator/)

**Extra Credit**
 - Write a local comments section at the bottom of each blog post page
 - There should be a form where you can enter your name, and a message
 - Messages that have been written earlier should be displayed above the form
 - Must use local storage to save previous comments that have been made on that browser 
