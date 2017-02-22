/*Bubble sort*/
function BubbleSort(arr)     
{                            
    var n = arr.length;
    for (var i = 0; i < n-1; i++){ 
    	for (var j = 0; j < n-1-i; j++){ 
    		if (arr[j+1] < arr[j]) { 
    			var t = arr[j+1]; 
    			arr[j+1] = arr[j]; 
    			arr[j] = t; }
        }
     }                     
    return arr;
}

BubbleSort([4,2,1,3]);

/*Selection sort*/
function SelectionSort(arr){                              
    var n = arr.length;
    for (var i = 0; i < n-1; i++) { 
    	var min = i;
    	for (var j = i+1; j < n; j++) { 
    		if (arr[j] < arr[min]) min = j; 
    	} 
       var t = arr[min]; 
       arr[min] = arr[i]; 
       arr[i] = t;
     }                    
    return arr;
}

SelectionSort([1,5,3,4,10,2,6]);