1. Using VSC / Git Bash / cmd, install create-react-app globally
npm install -g create-react-app

npm: node package manager
-g: install it globally
create-react-app: module

if above does not work, just add sudo
sudo npm install -g create-react-app


2. Using the same editor, create a folder using create-react-app,
this will install everything in the background (package.json, etc)

create-react-app introapp

create-react-app: run the bin file for create-react-app installed globally
introapp: name of the folder


Other helpful commands after creating a folder:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd introapp
  npm start
  
  
-----------------------------------------

1. Create index.js

var React = require('react');
var ReactDOM = require('react-dom');

//<h1>Hello World</h1>
// <ul>
//		<li>Apple</li>
//		<li>Strawberry</li>
//		<li>Orange</li>
//</ul>
//In React, if we want to do the same thing, we first need to create a react element of type h1
 with content 'Hello World', which will eventually spit out our heading onto the webpage

//React.createElement(type, attrs/props, child1, child2, ...);
//React.createElement(type, attrs/props, ...children); 
//var App = React.createElement('h1', null, 'Hello World');
//Better way to do above using JSX (Javascript Syntax Extension)
//var App = <h1>'Hello World'</h1>;
var App = (
	<ul>
		<li>Apple</li>
		<li>Strawberry</li>
		<li>Orange</li>
	</ul>
);



//We need to somehow tell react to take our react element(App) and display it on the webpage using DOM
//ReactDOM.render([What], [Where]);

ReactDOM.render(
	App, 
	document.getElementById('root')
);

-----------------------------------------
Functional Components

//If you are passing a Component into a React.createElement, always use capital letters at the start
// Component, not component, this is for React to know if what is it passing is a native element or a component

var Component = function() {
	return (
		<h1>Hello World</h1>
	);
};

ReactDOM.render (
	React.createElement(Component),
	document.getElementById('root')
);

or

ReactDOM.render (
	<Component></Component>,
	document.getElementById('root')
);

or

ReactDOM.render (
	<Component />,
	document.getElementById('root')
);

-----------------------------------------

Adding props in a Component

//Outer {} signifies that it is a javascript code
//Inner {} signifies that it is a javascript object

var Component = function(props) {
	var style = {
		color: props.color
	};
	return (
		<div style={style}>
			<h1>{props.greeting}</h1>
		</div>
	);
};

//or you can simplify too...

var Component = function(props) {
	return (
		<div style={{color: props.color}}>
			<h1>{props.greeting}</h1>
		</div>
	);
};

ReactDOM.render (
	<Component greeting="Hello World" color="green"/>,
	document.getElementById('root')
);

-----------------------------------------

Adjacent JSX elements needs to be wrapped in enclosing tag
//see the h1 and h2 below are enclosed in div
//also component in render is enclosed in div

var Component = function (props) {
	return (
		<div style={{color: props.color}}>
			<h1>{props.greeting}</h1>
			<h2>{props.greeting}</h2>
		</div>
	);
}; 

ReactDOM.render (
	<div>
		<Component greeting="Hello World" color="green">
		<Component greeting="Hey there" color="blue">
	</div>,
		document.getElementById('root')
);

-----------------------------------------

Functional Component - accepts props and returns React.createElement
Class-based Component - for interactive applications, accepts user input, logic, etc.

Traditional way of class components

1. Install create-react-class
npm install -S create-react-class

2. define create-react-class
var createClass = require('create-react-class')



var createClass = require('create-react-class');

var Component = createClass({
	render: function () {
		return (
			<div style={{color: this.props.color }}>
				<h1>{this.props.greeting</h1>
			</div>
		);
	}
});

ReactDOM.render (
	<Component greeting='Hello World' color='green' />,
	document.getElementById('root')
);

-----------------------------------------

State - changes UI based on user inputs, etc.

var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');

var Component = createClass ({
	getInitialState: function () {
		return (
			color: 'blue'
		);
	},
	
	handleButtonClick: function() {
		this.setState(function(prevState)) {
			return (
				color: (prevState.color === 'blue') ? 'green' : 'blue'
			);
		};
	},
	
	render: function () {
		console.log('Inside render: ', this.state.color);
		return (
			<div>
				<div style={{color: this.color.state}}>
					<h1>{this.props.greeting}</h1>
				</div>
				<button onClick={this.handleButtonClick}>Click Me</button>
			</div>
		);
	}
});

ReactDOM.render (
	<Component greeting='Hello World' />,
	document.getElementById('root')
);

-----------------------------------------

Creating ShowsApp 
//for tutorial, we are adding 1 page only, but we will add multiple instance later

https://github.com/nxstack/showsapp
https://www.bootstrapcdn.com/

1. Create show.js in src

var React = require('react');
var createClass = require('create-react-class');

var Title = createClass ({
    render: function () {
        return (
            <h3>Title: Friends</h3>
        );
    }
});

var Poster = createClass ({
    render: function () {
        return (
            <img src="https://www.movieposter.com/posters/archive/main/52/MPW-26106" alt="Show Poster" style={{height: 400, width: 400}}/>
        );
    }
});

var ShowInfo = createClass ({
    render: function () {
        return (
            <div>
                <p>Plot: Follows the personal and professional lives of six 20 to 30-something-year-old friends living in Manhattan.</p>
                <h5>IMDB Rating: 9.0</h5>
            </div>
        );
    }
});

var Show = createClass ({
    render: function () {
        return (
            <div className="text-center">
                <Title />
                <Poster />
                <ShowInfo />
            </div>
        );
    }
});

//To export the file and make available to all
module.exports = Show;




2. Edit your index.js

var React = require('react');
var ReactDOM = require('react-dom');
var Show = require("./show");


ReactDOM.render (
    <Show />,
    document.getElementById('root')
);


3. Add bootstrap settings in your index.html file in public folder

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

-----------------------------------------

ShowsApp with props

1. shows.json
[
  {
    "title": "Friends",
    "poster": "https://www.movieposter.com/posters/archive/main/52/MPW-26106",
    "plot": "Follows the personal and professional lives of six 20 to 30-something-year-old friends living in Manhattan.",
    "imdbRating": "9.0"
  },
  {
    "title": "Game of Thrones",
    "plot": "Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race hell-bent on destruction returns after being dormant for thousands of years.",
    "poster": "https://cdn.cloudpix.co/images/game-of-thrones/game-of-thrones-poster-eb4051280faa7b786d82613fc4909011-large-404463.jpg",
    "imdbRating": "9.5"
  },
  {
    "title": "Sherlock",
    "plot": "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    "poster": "http://www.gbposters.com/media/catalog/product/cache/1/small_image/293x440/9df78eab33525d08d6e5fb8d27136e95/s/h/sherlock-bride-portrait-maxi-poster-1.16.jpg",
    "imdbRating": "9.2"
  }
]

2. show.js
var React = require('react');
var createClass = require('create-react-class');

var Title = createClass ({
    render: function () {
        return (
            <h3>Title: {this.props.showTitle}</h3>
        );
    }
});

var Poster = createClass ({
    render: function () {
        return (
            <img src={this.props.showPoster} alt="Show Poster" style={{height: 400, width: 400}}/>
        );
    }
});

var ShowInfo = createClass ({
    render: function () {
        return (
            <div>
                <p>Plot: {this.props.showPlot}</p>
                <h5>IMDB Rating: {this.props.showRating}</h5>
            </div>
        );
    }
});

var Show = createClass ({
    render: function () {
        var show = this.props.show;
        return (
            <div className="text-center">
                <Title showTitle={show.title}/>
                <Poster showPoster={show.poster}/>
                <ShowInfo showPlot={show.plot} showRating={show.imdbRating}/>
            </div>
        );
    }
});

module.exports = Show;



3. index.js
var React = require('react');
var ReactDOM = require('react-dom');
var Show = require("./show");
var shows = require("./shows");


ReactDOM.render (
    <div>
        <Show show={shows[0]}/>
        <Show show={shows[1]}/>
        <Show show={shows[2]}/>
    </div>,
    document.getElementById('root')
);

-----------------------------------------

Making the ShowsApp user input button

1. shows.json
[
  {
    "title": "Friends",
    "poster": "https://www.movieposter.com/posters/archive/main/52/MPW-26106",
    "plot": "Follows the personal and professional lives of six 20 to 30-something-year-old friends living in Manhattan.",
    "imdbRating": "9.0"
  },
  {
    "title": "Game of Thrones",
    "plot": "Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race hell-bent on destruction returns after being dormant for thousands of years.",
    "poster": "https://cdn.cloudpix.co/images/game-of-thrones/game-of-thrones-poster-eb4051280faa7b786d82613fc4909011-large-404463.jpg",
    "imdbRating": "9.5"
  },
  {
    "title": "Sherlock",
    "plot": "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    "poster": "http://www.gbposters.com/media/catalog/product/cache/1/small_image/293x440/9df78eab33525d08d6e5fb8d27136e95/s/h/sherlock-bride-portrait-maxi-poster-1.16.jpg",
    "imdbRating": "9.2"
  }
]



2. show.js
var React = require('react');
var createClass = require('create-react-class');

var Title = createClass ({
    render: function () {
        return (
            <h3>Title: {this.props.showTitle}</h3>
        );
    }
});

var Poster = createClass ({
    render: function () {
        return (
            <img src={this.props.showPoster} alt="Show Poster" style={{height: 400, width: 400}}/>
        );
    }
});

var ShowInfo = createClass ({
    render: function () {
        return (
            <div>
                <p>Plot: {this.props.showPlot}</p>
                <h5>IMDB Rating: {this.props.showRating}</h5>
            </div>
        );
    }
});

var Show = createClass ({
    getDefaultProps: function () {
        return {
            showIndex: 0
        };
    },

    getInitialState: function () {
        return {
            showIndex: this.props.showIndex
        };
    },

    handleBtnClick: function () {
        var totalShows = this.props.show.length;

        this.setState(function(prevState) {
            return {
                showIndex: (prevState.showIndex + 1) % totalShows
            };
        });
    },


    render: function () {
        var show = this.props.show[this.state.showIndex];
        return (
            <div className="text-center">
                <Title showTitle={show.title}/>
                <Poster showPoster={show.poster}/>
                <ShowInfo showPlot={show.plot} showRating={show.imdbRating}/>
                <button onClick={this.handleBtnClick}>Next Show</button>
            </div>
        );
    }
});

module.exports = Show;



3. index.js
var React = require('react');
var ReactDOM = require('react-dom');
var Show = require("./show");
var shows = require("./shows");


ReactDOM.render (
    <Show show={shows} />,
    document.getElementById('root')
);


-----------------------------------------
