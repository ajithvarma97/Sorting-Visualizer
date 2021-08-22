export function getHeapSortAnimations(array){
    let animations=[];
    let auxillaryArray=array.slice();
    heapSort(auxillaryArray,auxillaryArray.length,animations);
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    console.log(animations);
    return animations;

}
function heapSort(arr,n,animations)
{
    // Build heap (rearrange array)
    for (let i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i,animations);
 
    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        animations.push(["swap", 0, arr[i]]);
        animations.push(["swap", i, arr[0]]);
        swap(arr,0,i);
 
        // call max heapify on the reduced heap
        heapify(arr, i, 0,animations);
    }
}
function heapify(arr,n,i,animations)
{
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2
 
    // If left child is larger than root
    animations.push(["comparision1", l, largest]);
     animations.push(["comparision2", l, largest]);
    if (l < n && arr[l] > arr[largest])
        {largest = l;
            }
 
    // If right child is larger than largest so far
    animations.push(["comparision1", r, largest]);
     animations.push(["comparision2", r, largest]);
    if (r < n && arr[r] > arr[largest])
        {largest = r;}
 
    // If largest is not root
    if (largest != i) {
        animations.push(["swap", largest,arr[i]]);
        animations.push(["swap", i, arr[largest]]);
            swap(arr,i,largest);
          
 
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest,animations);
    
    }}
function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}
function arraysAreEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
}