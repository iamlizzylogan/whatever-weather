# Whatever Weather

*Cold or warm... Letting you know if you should stay home.* This is a weather forecast project telling you the weather for the next few days.

## How To Install

First, go to a directory of your choosing on your computer, using the command line interface as follows.

```sh
cd path/to/parent/directory
```

Clone this repository into it.

```sh
git clone https://github.com/iamlizzylogan/whatever-weather.git
```

Enter your GitHub username and password if prompted.

Git will create a subdirectory named `whatever-weather` in your current directory. Navigate to it.

```sh
cd whatever-weather
```

Now, install the project's dependencies from [npm](https://www.npmjs.com/get-npm).

```sh
npm i
```

Because all setup is ready, there is no need for you to do anything else - the installation is done.

## How To Open

Once you have cloned the project and installed its dependencies, you can view it in two ways. Make sure you are in `whatever-weather` subdirectory before performing any of these steps. 

### 1) Open using the dev server

In order to view the project using the dev server, you need to start the server using the command line.

```sh
npm start
```

This should automatically open the project in your default Web browser. If this doesn't happen, go to `localhost:8080` in a Web browser of your choice.

### 2) Open from the bundle

First, create a production build.

```sh
npm run build
```

This command will create the `dist` subdirectory in `whatever-weather`. Open your Web browser and enter the path to `index.html` located therein.

``` file:///path/to/parent/directory/whatever-weather/dist/index.html ```

## Tech Stack

This project was built with:
- React
- SASS
- HTML
