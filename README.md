# Age of Wushu Chat History Viewer
"Age of Wushu Chat History Viewer" is a web application for viewing one's direct messages chat history of the game "Age of Wushu" (also known as "9yin" in China), a free-to-play 3D martial arts action MMORPG, developed by Snail Games. This application enables you to view the contents of the chat history XML file, without requiring the user to launch the game.

The project makes use of a custom base64 decoding algorithm, as described in [this blog post](https://blog.ersan.io/2020/12/30/cracking-age-of-wushus-chat-log-encoding/).

## How to use
Upload the XML file located within your Age of Wushu installation directory, generally located at `Snail Games USA\Age of Wushu\bin\[acc]\[file].xml`.

## Important notes
- The selected chat file does NOT leave your browser, i.e. there is no server spying on your chat history.
- This web application is not intended for mobile handheld devices, as the game is made for PC.
- An example XML file is provided in the assets.

# Development
This section is for development-related topics.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
