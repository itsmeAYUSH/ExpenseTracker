// user = expense
//User = Expense

window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const expenseDetailsString = localStorageObj[key];
        const expenseDetailsObj = JSON.parse(expenseDetailsString);
        addExpense(expenseDetailsObj)
    }
})

function saveToLocalStorage(event){
    event.preventDefault();
    const amount = event.target.amount.value;
    const discription = event.target.discription.value;
    const catagory = event.target.catagory.value;
    let obj = {
        amount,
        discription,
        catagory,
      }
      localStorage.setItem(obj.discription,JSON.stringify(obj));
      addExpense(obj);
}
function addExpense(expense){
    if(localStorage.getItem(expense.discription)!== null){
        removeExpense(expense.discription);
    }
    const parentNode = document.getElementById('listOfExpense');
    const childHTML = `<li id=${expense.discription}> ${expense.amount} - ${expense.discription} - ${expense.catagory}
    <button class="editbtn" onCLick=editExpense('${expense.amount}','${expense.discription}','${expense.catagory}')>Edit expense</button>
    <button class="deletebtn" onCLick=deleteExpense('${expense.discription}')>Delete expense</button>
    </li>`;
    parentNode.innerHTML =  parentNode.innerHTML + childHTML;
}

function deleteExpense(discription){
   localStorage.removeItem(discription);
    removeExpense(discription);
}

function removeExpense(discription){
    const parentNode = document.getElementById('listOfExpense');
    const deletingChildNode = document.getElementById(discription);
    if(deletingChildNode){
        parentNode.removeChild(deletingChildNode);
    }
    
}   
function editExpense(amount,discription,catagory){
    document.getElementById('amount').value = amount;
    document.getElementById('discription').value = discription;
    document.getElementById('catagory').value = catagory;
    deleteExpense(discription);

}


