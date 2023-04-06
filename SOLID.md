# SOLID principles in JavaScript

The purpose of this file is to summarize some of the SOLID principles in JavaScript as a way of taking down notes and in case of coming back to refresh this in the future.

Here are some sources used:

- [TheOdinProject](https://www.theodinproject.com/lessons/node-path-javascript-oop-principles)
- [AspiringCraftsman blog](http://aspiringcraftsman.com/2011/12/08/solid-javascript-single-responsibility-principle/)
- [Duncan McArdle Article on Medium](https://duncan-mcardle.medium.com/solid-principle-1-single-responsibility-javascript-5d9ce2c6f4a5)
- [Cristian Ramirez Article on Medium](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)

## S - The Single Responsibility principle

This is the first principle of the lot, and it's fairly simple however in theory of it, however implementing it can sometimes be tricky. The Single Responsibility principle states the following: *A class should have a single job at all times.*

Sounds simple enough, but what does *one job* actually mean? Should only do one thing? Or is a job enough to count as our whole project?

This should be clearly defined by splitting up the system into chunks, a great article which helped me see at this at the beginning was [Building a house from the inside out](https://www.ayweb.dev/blog/building-a-house-from-the-inside-out).
For example, imagine we are making a simple to-do list, we would want to split up each of our methods into the following sections:
- Any actions related to a single task: writing, editing, deleting
- Storing a list of tasks: add to list, take off from list, rearrange list
- Creating and manipulating the DOM: displaying the whole page, displaying the tasks.

This way we make sure that each object has a single job, or a single responsibility, and when it goes through changes, it should only affect things in that object.

Another way to give jobs to an object is through **Object Role Stereotypes** discussed in [Object Design: Roles, Responsibilities and Collaborations](https://www.amazon.com/Object-Design-Roles-Responsibilities-Collaborations/dp/0201379430):
- **Information holder**: Its purpose is to store information and push it onto other object e.g. storing task data and pushing it to the DOM
- **Structurer**: Maintains relationships between objects and information about those relationships 
- **Service provider**: Performs specific tasks and offers services to others on demand, e.g. changing format of a string
- **Controller**: Makes decisions and controls a complex task, e.g. decides the outcome of a tic-tac-toe game while it's still in progress
- **Coordinator**: Does not make decisions, however delegates work to other objects, e.g. once the home page content is generated, pushes it onto a makeFullPage function which matches together different parts of the DOM
- **Interfacer**: Transforms information or requests between unique parts of the system.

## O - The Open/Closed Principle

The Open/Closed principle states the following: *All code should be open for extension, but closed for modification*.

Open for extension, simply means if we want to adapt the object due to a change in our application or system, this should be possible. Closed for modification *however*, means should we adapt the code it should **not** modify the source code. So, should we want to want to extend our object, this should be possible without having to modify any of the existing code.

## L - The Liskov Substitution Principle
*Any class which should be substitutable for its parent class without unexpected consequences*
In other words, if we have a parent and a child class, all the functionality within the parent class should be working without issues in the child class.
## I - The Interface Segregation Principle
*Clients should not be forced to depend on method which they do not use*.

## D - The Dependency Inversion Principle
*High-level modules should not depend on low-level modules - both of which should depend on abstractions* &,

*Abstractions should not depend on details - details should depend on abstractions*.

Right, what does all this really mean?

Essentially, separate anything that can undergo change to a separate object or module, that way you can change it without having to change the higher-level function or code.