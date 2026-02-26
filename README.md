1. Download Node.js from https://nodejs.org/en/download 

NOTE: Get Long-term Support (LTS) version–should be v24.14.0 as of Feb 2026

2. Run the Node.js installer and follow respective steps

NOTE: You will have to RESTART your computer once you have completed all the steps after running the installer

After you’ve restarted your computer, go to your terminal and run node --version like in the image below to verify that node is installed



If you want to get ahead:
*We will be doing this during the workshop since this is a process you will have to repeat for each project you have that involves React.js*

3. Open VS Code (Make sure you have the correct version) and the folder you will save your project in

4. Open the Terminal and verify that you are in the correct directory

5. In the Terminal, enter the following:

npm create vite@latest react-workshop-app --template react

Note: For future reference, “react-workshop-app” is going to be the name of your website/program, so feel free to change this to whatever you want!

6. Type y and then click Enter/Return to proceed

When asked for a framework, select React
When asked for a variant, select JavaScript

7. Navigate to your app

I.e. if your directory in your Terminal is: 

C:\Users\leati\OneDrive\Desktop\WebDevWorkshops25

Then type cd react-workshop-apps so that your directory says

C:\Users\leati\OneDrive\Desktop\WebDevWorkshops25\react-workshop-app


8. Type npm install in the Terminal to make sure everything is installed (you may have already asked for npm to install everything in one of the previous steps)



9. Type npm run dev
