<h1>Reminders Web application</h1>
<h2>Provides functionality such as:</h2>
<ul>
  <li>Signing up with a local or Github account</li>
  <li>Logging into your own private account.</li>
  <li>Create, modify, and delete your own reminders.</li>
  <li>Admin page to revoke sessions</li>
</ul>

<h2>Getting started</h2>

<h3>Creating the Github OAuth application</h3>
<p>A Github OAuth application is needed for the Github login strategy to work
<p>With your own Github account, create a Github OAuth application <a href='https://github.com/settings/applications/new'>here</a></p>
<p>
Set the homepage url to: "http://localhost:3001"</p>
<p>Set the callback url to "http://localhost:3001/auth/github/callback"</p>

<h3>Cloning the repository</h3>
<p>In a location where you want to save the folder, type inside your terminal: "git clone https://github.com/bleulenny/webapp-reminders"</p>
<p>In your terminal, type in: "npm install"</p> 

<h3>Modifying the .env file</h3>
<p>In this file you will have to copy and paste your Github OAuth client ID and Github OAUth secret in the corresponding placeholders</p>

<h3>Running the application</h3>
<p>When you have completed all the steps above, you are ready to run the application by typing in your terminal: node index.js </p>
