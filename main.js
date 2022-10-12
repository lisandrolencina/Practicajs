class Product {
    constructor(name,price){
        this.name = name;
        this.price = price ;
    }
}


class UI {
    addProduct(product){
     const productList = document.getElementById('product-list');
     const element = document.createElement('div');
     element.innerHTML = `
        
        <div class= "card text-center mb-4">
            <div class= "card-body">
                <strong> Producto  </strong>: ${product.name}
                <strong> Precio</strong>: ${product.price}
                <a href="#" class= "btn btn-danger" name = "delate"> Eliminar </a>
            </div>

        </div>
     `;
    


     productList.appendChild(element);
     this.resetForm

    }

    resetForm(){
        document.getElementById('product-form').reset();
    }


    deleteProduct(element){
        if(element.name === 'delate'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto eliminado', 'danger')
        
        }



    }
    showMessage(menssage, cssClass){
      const div =  document.createElement('div');
      div.className = `alert alert-${cssClass} mt-4`;
      div.appendChild(document.createTextNode(menssage));
      //Mostrando en  DOM
      const container = document.querySelector('.container');
      const app = document.querySelector('#App');  
      container.insertBefore(div, app);  
      setTimeout(function(){
            document.querySelector('.alert').remove();
      },3000);
    }

}

//Eventos DOM

document.getElementById('product-form')
    .addEventListener('submit' , function(e){
    
    const name = document.getElementById('name').value; 
    const price = document.getElementById('price').value; 
    
    const product = new Product(name,price);

    const ui = new UI();
    if(name === '' || price ===''){
        ui.showMessage('Completar campos','primary')
    }
    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage('Producto Agregado', 'success');


    e.preventDefault();

});

document.getElementById('product-list').addEventListener('click',function(e){
        const ui = new UI();
        ui.deleteProduct(e.target)


}); 