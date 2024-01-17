# This application allows users to view and vote for their favorite animals.
# As a user i can vote for the cutest animal from the list provide
# When i click on a name of an animal displays the animal's name, image, and the number of votes
# The application fetches a list of animals from a specified API(db.json), displays them on the webpage, and provides a voting mechanism.
## Features

# Fetch Data: 
Utilizes the Fetch API to retrieve character data from `http://localhost:3000/characters`.
# Dynamic Rendering:
 Dynamically creates table rows to display character information.
# Responsive Design: 
Character images are displayed with a fixed width and height for a consistent and visually appealing presentation.

## Overview
The code fetches character data from `http://localhost:3000/characters` and dynamically creates table rows (<tr>) using the td_moringa function. The character details are then appended to the table body.

The td_moringa function takes character details (name, id, image, votes) as parameters and creates a table row (<tr>) with corresponding table cells (<td>). This function encapsulates the HTML structure for displaying character information.



