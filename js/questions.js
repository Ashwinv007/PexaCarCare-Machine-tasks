function debounce(func,wait){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            func.apply(this,args);
        },wait)
    }
}

function findMissingNumber(arr){
    const set=new Set(arr);
    for(let i=1;i<=arr.length+1;i++){
        if(!set.has(i)){
            return i;
        }
    }
}

document.addEventListener('DOMContentLoaded',()=>{

    // Q2: Debounce Demo

    const debounceBtn=document.getElementById('debounce-btn');
    const debounceCount=document.getElementById('debounce-count');
    let count=0;

    const debouncedFn=debounce(()=>{
        count++;
        debounceCount.textContent=count;
    },500)
    debounceBtn.addEventListener('click',debouncedFn)




    //Q3: Missing nubmer Demo
    document.getElementById('find-missing-btn').addEventListener('click',()=>{
        const arr1=[3,7,1,2,8,4,5];
        const arr2=[1,2,4,5,6];
        document.getElementById('missing-num-1').textContent= findMissingNumber(arr1);
        document.getElementById('missing-num-2').textContent=findMissingNumber(arr2);
    })


    //Q4: Modify User list
    const ul=document.querySelector('#user-list ul');

    document.getElementById('add-user-btn').addEventListener('click',()=>{
        const newUser=document.createElement('li');
        newUser.textContent='David';
        ul.appendChild(newUser);

    })

    document.getElementById('remove-user-btn').addEventListener('click',()=>{
        if (ul.firstElementChild){
            ul.removeChild(ul.firstElementChild);
        }
    })


    //Q5: Form validation

    const form=document.getElementById('login-form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        const username=document.getElementById('username').value.trim();
        const password=document.getElementById('password').value.trim();
        const errDiv=document.getElementById('error-message');

        if(username === '' || password === ''){
            errDiv.textContent='Both Username and Password are required';
            errDiv.style.color='red';
        }else{
            errDiv.textContent='Form Submitted Successfully';
            errDiv.style.color='green';
            console.log('Form Submitted');
        }
    })
})