# mucow-sass-template
MuCow template with sass support.
### How to use it
* Download or clone this repository to your local machine:
```
git clone https://github.com/andreamaiolo/mucow-sass-template widget
```

* Move into the created folder and install the needed dependencies:
```
cd widget
npm install
```

* Write your `js` scripts, `css` styles and your `html` markup within the `src` folder and include those files in your `.mucow` source file using the following directive:
```
@@include('widget.js')
```

* Compile the widget:
```
gulp
```

* Done! The resulting widget will be available in the `dist` folder.

To listen for src files change, run:
```
gulp watch
```
The widget will be updated everytime you save any source file.