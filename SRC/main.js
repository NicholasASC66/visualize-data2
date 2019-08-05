
const main= document.querySelector("main")

const createCard = (obj,indx) =>{
    //card that contains user info
    const newCard = document.createElement("div")
    newCard.className = "card"
    newCard.id= indx;

//Face of user
    const face = document.createElement('img')
    face.src = obj.picture.medium
    face.alt = "Portrait"

// div that contains name, age and email
    const info = document.createElement("div")
    info.className = "info"
    const lst = document.createElement("ul")
    const name = document.createElement('li')
    const email = document.createElement('li')
    const age = document.createElement('li')
    name.innerHTML= `Name: ${title(list[indx].name.first)}  ${title(list[indx].name.last)}`
    email.innerHTML = `Email: ${list[indx].email}`
    age.innerHTML= `Age: ${list[indx].dob.age}`
    
    lst.appendChild(name)
    lst.appendChild(age)
    lst.appendChild(email)
    newCard.appendChild(face);
    newCard.appendChild(lst)
    main.appendChild(newCard);
}




const loopCreate=arr=>{
    for(let i = 0; i<arr.length; i++){
    createCard(arr[i],i);
    }
}

const title = name => {
    nameArr = name.trim().split(" ");
  
    arr = [];
    for (let word of nameArr) {
      arr.push([...word]);
    }
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (j === 0) {
          let l = arr[i].shift();
          arr[i].unshift(l.toUpperCase());
        }
      }
    }
  
    titleName = ""
    for (const word of arr) {
      titleName += " " +word.join("");
    }
  
    return titleName.trim()
  }

loopCreate(list);

