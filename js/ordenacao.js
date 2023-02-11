// Faz parte da quick sort
swap = (items, leftIndex, rightIndex) => {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }

  //Misturar array
  shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    gerar_li(arr);
  }

  // Utiliza o metodo bubble sort de ordenacao
  bubble_sort = (lista) => {
    for(var i = 0; i <= lista.length-1; i++){      
      for(var j = 0; j < ( lista.length - i -1); j++){         
        if(lista[j] > lista[j+1]){
          var temp = lista[j]
          lista[j] = lista[j + 1]
          lista[j+1] = temp
        }
      }
    }
    gerar_li(lista);
  }

  // Utiliza o metodo selection sort
  selection_sort = (lista) => {
    let n = lista.length;
        
    for(let i = 0; i < n; i++) {        
        let min = i;
        for(let j = i+1; j < n; j++){
            if(lista[j] < lista[min]) {
                min=j; 
            }
         }
         if (min != i) {            
             let tmp = lista[i]; 
             lista[i] = lista[min];
             lista[min] = tmp;   
        }
    }
    gerar_li(lista);    
  }

// Metodo quick sort
  quick_sort = (items, left, right) => {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); 
        if (left < index - 1) { 
          quick_sort(items, left, index - 1);
        }
        if (index < right) { 
          quick_sort(items, index, right);
        }
    }
    gerar_li(items);
  }
  
  // Faz parte da quick sort
  partition = (items, left, right) => {
    var pivot = items[Math.floor((right + left) / 2)], 
    i = left, 
    j = right; 
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); 
            i++;
            j--;
        }
    }
    return i;
  }
  
  // Adiciona um novo número na lista
  add = () => {
    let add = document.getElementById('valor').value; 
    const validaNumero = v => /^\d{1,5}$/.test(v);
       
    if (validaNumero(add) && add !='' ){
      let lista  = document.getElementById("valores").innerHTML;
      lista = lista +"<li>"+add+"</li>";
      document.getElementById("valores").innerHTML = lista;
      document.getElementById('valor').value="";      
    } else{      
      alert("Número Inválido");
    }   
  }

  // Ordena a lista dependendo do metodo utilizado
  ordernar = () => {
    let metodo  = document.getElementById("metodo").value;
    let lista  = document.getElementById("valores").children;

    if(lista.length>1){
      let itemLista = [];
      for (let i=0; i < lista.length; i++) {
        itemLista.push(parseInt(lista[i].innerHTML));
      } 

      switch (metodo) {        
        case "selection_sort":
          selection_sort(itemLista);
          break;
        case "quick_sort":
          quick_sort(itemLista,0, itemLista.length-1);
          break;       
        default:
          bubble_sort(itemLista);
      }
    } else{
      alert("Adicione mais valores");
    }  
  }
// Mistura o vetor
  misturar = () => {
    let lista  = document.getElementById("valores").children;

    if(lista.length>1){
      let itemLista = [];
      for (let i=0; i < lista.length; i++) {
        itemLista.push(parseInt(lista[i].innerHTML));
      } 
      shuffle(itemLista);      
    } else{
      alert("Adicione mais valores");
    }  
  }

  // Monta o li ordenado e insere na lista
  gerar_li = (lista) => {
    var li = lista.map(function(elem){
      return '<li>'+elem+'</li>';
    });    
    document.getElementById("valores").innerHTML = li.join('');
  }

   // Limpar Lista
   limpar = (lista) => {    
    document.getElementById("valores").innerHTML = '';
   }