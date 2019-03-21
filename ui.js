class UI {
 constructor(){
  this.profileContainer=document.querySelector('#profileContainer');                                    this.alert=document.querySelector('#alert');               
 }

    showProfile(profile){
        this.profileContainer.innerHTML=`
        <div class="card card-body">
        <div class="row">
            <div class="col-md-3">
            <a href="https://placeholder.com"><img src="https://via.placeholder.com/150" class="img-thumbnail"></a>  

            </div>
            <div class="col-md-9">
                <h4>Contact</h4>
                <ul class="list-group">
                    <li class="list-group-item">name : ${profile.name}</li>
                    <li class="list-group-item">username : ${profile.username}</li>
                    <li class="list-group-item">email : ${profile.email}</li>
                    <li class="list-group-item">address : ${profile.address.street}, ${profile.address.city}</li>
                    
                    
                </ul>

                <h4 class="ml-1 mt-3">Todo list</h4>
                <ul id="todo"class="list-group">

            </div>

        </div>
        </div>
        
        
        `;
    }
    showAlert(text) {
        this.alert.innerHTML=`
            ${text} is not found        
        `;
    }
    showTodo(todo){
        let html="";

        todo.forEach(item => {

            if(item.completed){
                html+=`
                <li class="list-group-item bg-success">
                ${item.title}
                </li> 
                `;
            }
            else{
                html+=`
                <li class="list-group-item ">
                ${item.title}
                </li> 
                `;

            }
            
        });

        this.profileContainer.querySelector('#todo').innerHTML=html;

    }
    clear(){
        this.profileContainer.innerHTML="";
        this.alert.innerHTML="";

    }
}