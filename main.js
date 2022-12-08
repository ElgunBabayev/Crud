
function load (){

    let tbody =document.querySelector('tbody')
            tbody.innerHTML = "";

    axios.get("https://northwind.vercel.app/api/suppliers")
    .then(res => {
 
        res.data.forEach(element => {
            
            // let liElement = document.createElement('li');
            // liElement.innerHTML = element.companyName;
            // document.querySelector('ul').appendChild(liElement);
            
            let tr = document.createElement('tr');
                    tr.setAttribute('id', element.id);

                    let tdId = document.createElement('td');
                    tdId.innerHTML = element.id;

                    let tdcompanyName = document.createElement('td');
                    tdcompanyName.innerHTML = element.companyName;

                    let tdcontactName = document.createElement('td');
                    tdcontactName.innerHTML = element.contactName;

                    let tdcontactTitle = document.createElement('td');
                    tdcontactTitle.innerHTML = element.contactTitle;

                    let deleteButton = document.createElement('button');
                    deleteButton.id = element.id;
                    deleteButton.innerHTML = "Delete"
                    deleteButton.addEventListener("click", function (e) {
                        let suppliersId = e.target.id;
                        e.target.parentElement.remove();
                        remove(suppliersId);
                    })

                    tr.appendChild(tdId);
                    tr.appendChild(tdcompanyName);
                    tr.appendChild(tdcontactName);
                    tr.appendChild(tdcontactTitle);
                    tr.appendChild(deleteButton);

                    document.querySelector('tbody').appendChild(tr);

        });

    })
}

load();

let companyNameEl =document.getElementById("compName");
let contactNameEl = document.getElementById("contName");
let contactTitleEl = document.getElementById("contTitle");
let addBtn = document.querySelector(".btn");

function add(){

    let newSuppliers = {
        companyName : companyNameEl.value,
        contactName : contactNameEl.value,
        contactTitle : contactTitleEl.value
    }
     axios.post("https://northwind.vercel.app/api/suppliers", newSuppliers)
     .then(res =>{
        return res;
     })
     
}
function remove(id){
    axios.delete(`https://northwind.vercel.app/api/suppliers/ ${id}`)
     .then(res =>{
        return res;
     })
     .catch(err => {
        console.log('Error', err);
        throw err
    })
     
}


