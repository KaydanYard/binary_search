function searcher(elements = []) {
  let key = 3;
  let start = 0;
  let end = elements.length -1;
  
  while (start <= end) {
    let mid = Math.floor((start+end)/2);

    if (elements[mid] === key) {
      return true;
    }
    else if (elements[mid] < key) {
      start = mid +1;
    } else {
      end = mid -1;
    }
  }
  return false;
}  