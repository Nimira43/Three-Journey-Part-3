# Documentation

## vite.config.js

#### import { defineConfig } from 'vite'
###### This line imports the defineConfig function from Vite, which helps with IntelliSense and type-checking in your configuration.

#### import restart from 'vite-plugin-restart'
###### This line imports the vite-plugin-restart plugin, which allows you to automatically restart the server when certain files change.

#### export default defineConfig({ ... })
###### This function call exports the configuration for Vite.

#### Configuration Options:
##### root:

```
root: 'src/',
```

###### Sets the root directory of the project to src/. This means Vite will look for your entry HTML file in the src directory.

##### publicDir:

```
publicDir: '../public',
```

###### Specifies the directory to serve as plain static assets. Files inside this directory are served at the root URL.

##### server:

```
server: {
  host: true,
  open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
},
```

###### host: true: This makes the server accessible over the local network.

###### open: This option automatically opens the browser when the server starts, unless running in a sandbox environment like CodeSandbox.

##### build:

```
build: {
  outDir: '../dist',
  emptyOutDir: true,
  sourcemap: true
},
```

###### outDir: '../dist': Sets the output directory for the build to ../dist.

###### emptyOutDir: true: Empties the output directory before building.

###### sourcemap: true: Generates source maps for debugging.

##### plugins:

```
plugins: [
  restart({
    restart: ['../public/**']
  })
],
```

###### restart: Configures the vite-plugin-restart plugin.

###### restart: ['../public/**']: Watches the public directory for changes and restarts the server when changes are detected.

## main.js

#### Scene Setup:

###### Creates a Three.js scene.

###### Adds a simple cube geometry with a basic material.

#### Canvas and Renderer:

###### Selects a canvas element to render the scene.

###### Sets up the WebGL renderer with responsive sizes and pixel ratio.

#### Camera and Controls:

###### Initialises a perspective camera with adjustable aspect ratio.

###### Adds orbit controls to enable interactive camera movement.

#### Responsive Design:

###### Listens for window resize events to update camera aspect ratio and renderer size.

#### Animation Loop:

###### Utilises requestAnimationFrame to create a continuous render loop.

###### Updates the scene on each frame.