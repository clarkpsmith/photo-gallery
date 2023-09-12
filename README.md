```markdown
# Photo Gallery App

The Photo Gallery App is a mobile application built with React Native that allows users to browse a photo collection. I'm using the contentful API to pull some photos that i've uploaded of the DJ DYNOHUNTER.

## Features

- **Photo Display**: View your collection of photos in a grid layout.
- **Full Screen Mode**: Click on indivdual photos to see them in full screen.
- **Swipe Gestures**: Easily navigate between images by swiping left or right.



## Installation

To run the Photo Gallery App locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/clarkpsmith/photo-gallery.git
   ```
   
2. Navigate to the project directory:

	```bash 
	cd photo-gallery
	```
3. Start the development server:

	```bash 
	npm start
 	# or
	yarn start
	```

4. Run the app on an Android or iOS emulator or a physical device via Expo.

5. Set up a Contentful account and Obtain an Access Key and a Space ID

6. create an apiKeys.js file in the root directory and add the contentful API keys
	```CONTENTFUL_ACCESS_KEY='your_contentful_access_key'```
	```CONTENTFUL_SPACE_ID='your_contentful_space_id'```
	
7.  In Contentful, create a content model called showPhotos with a media field type named imageUrl, and upload some photos to this model.
```
	
	
