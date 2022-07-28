const deleteBtn = document.querySelectorAll('.fa-trash') //creating a variable and assigning it to a selection of all elements with a class of fa-trash
const item = document.querySelectorAll('.item span') //creating a variable and assigning it to a selection of span tags of a parent that has a class of item
const itemCompleted = document.querySelectorAll('.item span.completed') //creating a variable and assigning it to a selection of spans with a class of completed inside of a parent with a class of item

Array.from(deleteBtn).forEach((element)=>{ //creating an array from our selection and starting a looop
    element.addEventListener('click', deleteItem)//add an event listener to the current item that waits for a click and then calls a function called deleteItem
})//close our loop

Array.from(item).forEach((element)=>{//creating an array from our selection and starting a loop
    element.addEventListener('click', markComplete)//add an event listener to the current item that waits for a click and then calls a function called markComplete
})//close our loop

Array.from(itemCompleted).forEach((element)=>{//creating an array from our selection and starting a loop
    element.addEventListener('click', markUnComplete)//add an event listener to only completed item that waits for a click and then calls a function called markUnComplete
})//close our loop

async function deleteItem(){//declaring an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText//looks inside of the list item and grabs only the inner text within the list span
    try{//starting a try block to do something
        const response = await fetch('deleteItem', {//create a response variable that waits on a fetch to get data from the result of deleteItem route
            method: 'delete', //sets the crud method for the route
            headers: {'Content-Type': 'application/json'},//specifying the type of content expected, which is json
            body: JSON.stringify({//declare the message content being passed, and stringify that content
              'itemFromJS': itemText//setting the content of the body to the inner text of the list item, and naming it 'itemFromJS'
            })//closing the body
          })//closing the object
        const data = await response.json()//waiting on json from the response to be converted
        console.log(data)//log the results to the console
        location.reload()//reloads the page to update what is diplayed

    }catch(err){//if an error occurs pass the error into the catch block
        console.log(err)//log the error to the console
    }//close the catch block
}//end the function

async function markComplete(){//declaring an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText//looks inside of the list item and grabs only the inner text within the list span
    try{//starting a try block to do something
        const response = await fetch('markComplete', {//create a response variable that waits on a fetch to get data from the result of markComplete route
            method: 'put',//sets the crud method to "update" for the route
            headers: {'Content-Type': 'application/json'},//specifying the type of content expected, which is json
            body: JSON.stringify({//declare the message content being passed, and stringify that content
                'itemFromJS': itemText//setting the content of the body to the inner text of the list item, and naming it 'itemFromJS'
            })//closing the body
          })//closing the object
        const data = await response.json()//waiting on json from the response to be converted
        console.log(data)//log the results to the console
        location.reload()//reloads the page to update what is diplayed

    }catch(err){//if an error occurs pass the error into the catch block
        console.log(err)//log the error to the console
    }//close the catch block
}//end the function

async function markUnComplete(){//declaring an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText//looks inside of the list item and grabs only the inner text within the list span
    try{//starting a try block to do something
        const response = await fetch('markUnComplete', {//create a response variable that waits on a fetch to get data from the result of markUnComplete route
            method: 'put',//sets the crud method to "update" for the route
            headers: {'Content-Type': 'application/json'},//specifying the type of content expected, which is json
            body: JSON.stringify({//declare the message content being passed, and stringify that content
                'itemFromJS': itemText//setting the content of the body to the inner text of the list item, and naming it 'itemFromJS'
            })//closing the body
          })//closing the object
        const data = await response.json()//waiting on json from the response to be converted
        console.log(data)//log the results to the console
        location.reload()//reloads the page to update what is diplayed
        
    }catch(err){//if an error occurs pass the error into the catch block
        console.log(err)//log the error to the console
    }//close the catch block
}//end the function