# React speed typing game

Test your typing speed with this small react project

![speed-typing game](https://github.com/adnan-muhammadi/type-with-me/blob/main/public/pic.png)

## how it works
- Click start button
	- The keyborad focus with automatically be in the input field
		- Input field will be enabled for typing
	- The time will start counting from deafult time which is 30 secs
	- At the end of the time you will see how many words you typed in as many seconds
		- input field will be disabled
		- The  function below will return the exact word count without spaces
		- 
		```javascript
			function calculateWordCount(text) {
        			const wordsArr = text.trim().split(" ")
        			return wordsArr.filter(word => word !== "").length
    			}
		```
___
## React feautures covered

1. Hooks
	- useEffect
	- useState
	- useRef
	- custom hooks

2. Functional components

Quick start:

```
$ yarn # npm install
$ yarn start # npm start
````

 
Contact me <https://linkedin.com/in/theadnan>

Happy Coding!
