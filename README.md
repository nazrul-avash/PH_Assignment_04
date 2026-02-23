1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer. 
getElementById returns the only elements/node on the DOM tree if exists. It searches node based on css value of ID property.
getElementsByClassName returns the list of nodes by that class name from the html page/DOM tree. The list is a array-like collection called by html collection.
querySelector: It takes class name as parameter and returns the first matched node from the tree by searching with class name parameter.
querySelectorAll: It returns all nodes/elements which have that class name sent in the method parameter.

2. How do you create and insert a new element into the DOM?
Answer: First we need to call document.createElement(), in the parameter we send the name of element. Then we can add/modify/delete class names, id, styles.
And at last we must append the child to any container or parent. 
example:
const statusBtn = document.createElement("button");
statusBtn.classList.add("status", "btn", "btn-outline", "bg-gray-200", "mb-2", "w-fit");
document.body.appendChild(statusBtn);

3. What is Event Bubbling? And how does it work?
Answer: All of mouse/keyboard activity in browser window is tracked by the browser. It precisely finds out in which element or node of the html has been clicked.
After tracking the target element, then it travels upward. It saves all the parent nodes from the target/clicked element. The process of traveling bottom to top is like
bubble of water from under the pond.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation means tracking larger area of the page with a single event listener. If we do not use event delegation, then we have to add more listeners which is difficult maintain and might create more bugs. It help us to control more with less code.

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() methods stops browsers default/expected behavior. By adding this method inside event listener we can stop the pages normal activity.
stopPropagation(): By this method, we can stop the traveling of the event bubble going upward. With this can stop the browser to only collect the target elements, no information of parents.