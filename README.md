# Javascript Language Forms #

The concept of forms was borrowed from martial arts. Instead of solving new problems over and over in hopes that the language will stick, a form is intended to be repeated movement for movement to develop a relationship with the language and practices of a fluent developer. The student at each form level will learn to identify syntactic patterns while following an intentional and regimented process to promote fluency through a repeated process.

A student of any form will know they are ready to move to the next form when they can demonstrate proficiency in the current form by applying the techniques presented without referring to the example materials. No two programmers are alike so it is understood that the steps someone would follow may vary slightly. This variance is good as it demonstrates a deeper understanding of the ideas presented in the form.

All of the first three forms will use the same tests and will address the questions posed in the tests in the same order. For any proficiency check, the student will be expected to work through the tests by reading them and then providing an appropriate response.

As a student becomes more conversant in a particular form, they are encouraged to apply their knowledge using code katas, like the problems provided by [Exercism.io](http://exercism.io/).

## Setup ##

To use Javascript language forms, you will need to do the following:

- Install [Node.js](https://nodejs.org/)
- Install [Visual Studio Code](https://code.visualstudio.com/)
- Clone the JS Language Forms repository: [https://github.com/cmstead/jsLearnerForms](https://github.com/cmstead/jsLearnerForms)

**After Installing**

- Start Visual Studio Code
- Open the folder you cloned JS Language Forms to in your editor
- Open the test file and the associated source file (They are numbered, start at 1)
- Follow the prompts, directions and hints and start coding!

### Installing Node.js ###

If you haven't ever installed node before, please watch the following video on Node.

https://www.youtube.com/watch?v=tlntE8fe6u4

This video is geared for people installing on Windows, but if you are on a Mac the setup is effectively the same.

### Installing Visual Studio Code ###

For most operating systems, VS Code is available as a binary you simply install and run. Download the executable installer for your operating system and run it. The installer will do the rest.

### Project One-Time Setup ###

Open a command prompt/terminal/shell, go to the directory where you cloned JS Language Forms and type `npm i`.  This will install everything the project needs in order to run.

**That's it! You're all set.**

## Running JS Forms ##

### In Node ###
Open the test file to for reference and open a command prompt or terminal.  At the prompt type `node run-form #` where # is the number of the form you are working on.

Example of running first form:

`node run-form 1`

The test runner will rerun as you update your source code.  It will run all tests until it reaches a failing test.

### Starting a Form Over ###

These forms are intended to be done more than once.  In order to make this easy to do, there is a reset script.  At the prompt type `node reset-form #` where # is the number of the form to reset.

Example of resetting first form:

`node reset-form 1`

### Resetting and Running ###

There is also a script which will allow you to reset and run a form -- `node reset-and-run-form #`

Example of resetting and running first form:

`node reset-and-run-form 1`

## Skills covered per form ##

This section will be updated as forms are completed and ready for use.

### First Form ###

Core setup concepts:

- Strict mode Javascript
- Immediately Invoked Function Expressions
- Exporting a module

Ideas to build upon:

- Function creation
- Conditional statements
- Calling a function
- Interaction and use of function parameters
- String concatenation
- Mathematical operations and operators
- Built in modules such as the Math module
- Built in functions such as toString and valueOf
- Adding or overriding functions on objects
- Looping
- Arrays
- Nested logic

Good reinforcement exercises from Exercism.io include:

- Leap
- Hamming
- RNA-Transcription
- Bob

Strong first form students will be challenged by these exercises:

- Gigasecond (The Date api is necessary for this problem)
- Word-count
- Pangram

### Second Form

Second form concepts

- Inner looping functions
- Ternary expressions
- Instantiable objects
- Closures
- Factory functions
- Higher-order functions

Reinforcement exercises from Exercism.io are to refactor the following using second form concepts:

- Hamming
- Word-count
- Pangram

### Third Form

Third form concepts

- Reduce
- Recursion
- Function chaining
- Instantiable objects as types
- Creating static methods on types
- Executing prototypal methods as static
- Scope management
- Partial application with bind
- Generic functions
- Type checking
- Metaprogramming

### Fourth Form -- Test Dummy Form

Fourth form concepts

- Writing unit tests
- Creating vice tests around existing code
- Mocks, stubs and spies
- Code seams
- Promises and async programming
- Pure and impure functions
- Programming patterns
- Code deduplication
- Testing libraries - Mocha, Chai, Sinon and Mockery
