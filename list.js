// An object to hold the item we will be
// storing in our list
var ListItem = function(data, tail) {
  this.tail = tail
  this.data = data
}

// List implementation
var List = function() {
  this.item = null

  // Add a data item to the front of the list
  this.add = function(elem) {
    this.item = new ListItem(elem, this.item)
  }

  // Returns true if the list is empty
  this.empty = function() {
    if (this.item === null){
      return true;
    }
    else {
      return false;
    }
  } 
  // Returns the data at the head of the list. If
  // the list is empty, return null. This leaves
  // the list unmodified
  this.head = function() {
    // ....
    if(this.empty() !== true){
      return this.item.data
    }
    else{
      return null
    }
  }
  // Remove item off the head of the list and return
  // its value. The new head of the list must be the
  // next element in the list if it exists. If the
  // list is empty, we return null
  this.pop = function() {
    if(this.item === null){
      return null
    }
    
    var data = this.item.data;
    this.item = this.item.tail;
    return data;
    // ......
    
  }

  // Return the number of elements in the list.
  this.length = function() {
    // ......
    if(this.item === null){
      return 0
    }

    var length = 0;

    var currentItem = this.item;

    do {
      currentItem = currentItem.tail;
      length += 1;
    } 
    while (currentItem !=null)

      return length; 
  }
     // Return the last data item in the list if it exists. If
  // not, return null
  this.last = function() {
        // .....
        if(this.item === null){
          return null
        }

        var currentItem = this.item;
        var i =0;
        while (currentItem.tail !== null){
         currentItem = currentItem.tail;
       }
       return currentItem.data;
     }
   }