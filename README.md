# mangaListImages
This project is an app where you can add, delete, get and update the profile of the manga you have read with images.
## Postman
https://documenter.getpostman.com/view/29808712/2s9YRCVqf8
## Pages
There are more pages that I use because I couldn't add the login user part.
So in reality, for the project, the important pages are:
* my-mangas: This page will show your list of mangas and a form to add new mangas. Each manga have two buttons, one will delete it and the other go to update-manga.
* update-manga: Here you can update the manga, you can change the image or not, it is your decision.
## Technologies Used
* Ionic: The framework used to create the front end of the app.
* Node.js: To create the back end of the app.
## Services Used
Like in the pages part, I only use 2 of the 4 services that exist in the project, that are:
* mymangas: Where all the operations related to mangas is done.
* photo: This service controll the selection and discard of images.
## Running the Project
### Clone the repository with the command
```
git clone https://github.com/Naidr/mangaListImages.git
```
### Access the project backend
```
cd /backend
```
### Execute the backend
```
node index.js
```
### Access the project frontend
```
cd ../frontend
```
### Execute the frontend
```
ionic serve
```
The app will be available in your browser at http://localhost:8100
