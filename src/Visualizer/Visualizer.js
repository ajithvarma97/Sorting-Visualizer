import React from 'react';
import './Visualizer.css';
import {getBubbleSortAnimations} from '../Algorithms/BubbleSort';
import {getMergeSortAnimations} from '../Algorithms/MergeSort';
import {getQuickSortAnimations} from '../Algorithms/QuickSort';
import {getSelectionSortAnimations} from '../Algorithms/SelectionSort';
import {getInsertionSortAnimations} from '../Algorithms/InsertionSort';
import {getHeapSortAnimations} from '../Algorithms/HeapSort'; 
const NUMBER_OF_ARRAY_BARS = 130;
const PRIMARY_COLOR = 'yellow';
const SECONDARY_COLOR = 'red';
const ANIMATION_SPEED_MS = 5;
export default class Visualizer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        array: [],
      };
    }
  
    componentDidMount() {
      this.resetArray();
    }
  
    resetArray() {
      const array = [];
      for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
        array.push(randomIntFromInterval(5, 620));
      }
      this.setState({array});
    }
    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] === "comparision1" || animations[i][0] === "comparision2";
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [comparision, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            }
            else {
                const [swap, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * ANIMATION_SPEED_MS);  
            }
        }}
        mergeSort() {
            const animations = getMergeSortAnimations(this.state.array);

            for (let i = 0; i < animations.length; i++) {
                const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
                const arrayBars = document.getElementsByClassName('array-bar');
                if(isColorChange === true) {
                    const [comparision, barOneIndex, barTwoIndex] = animations[i];
                    const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                    const barOneStyle = arrayBars[barOneIndex].style;
                    const barTwoStyle = arrayBars[barTwoIndex].style;
            
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    },i * ANIMATION_SPEED_MS);
                    
                }
                else {
                    setTimeout(() => {
                        const [overwrite, barOneIdx, newHeight] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                      },i * ANIMATION_SPEED_MS);
                }
            }}
        quickSort() {
                
                const animations = getQuickSortAnimations(this.state.array);
                for (let i = 0; i < animations.length; i++) {
                    const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
                    const arrayBars = document.getElementsByClassName('array-bar');
                    if(isColorChange === true) {
                        const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                        const [comparision, barOneIndex, barTwoIndex] = animations[i];
                        const barOneStyle = arrayBars[barOneIndex].style;
                        const barTwoStyle = arrayBars[barTwoIndex].style;
                        setTimeout(() => {
                            barOneStyle.backgroundColor = color;
                            barTwoStyle.backgroundColor = color;
                        },i * ANIMATION_SPEED_MS);
                    }
                    else {
                        const [swap, barIndex, newHeight] = animations[i];
                        if (barIndex === -1) {
                            continue;
                        }
                        const barStyle = arrayBars[barIndex].style;
                        setTimeout(() => {
                            barStyle.height = `${newHeight}px`;
                        },i * ANIMATION_SPEED_MS);  
                    }        }
                }
            selectionSort() {
                    
                    const animations = getSelectionSortAnimations(this.state.array);
                    for (let i = 0; i < animations.length; i++) {
                        const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
                        const arrayBars = document.getElementsByClassName('array-bar');
                        if(isColorChange === true) {
                            const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                            const [temp, barOneIndex, barTwoIndex] = animations[i];
                            const barOneStyle = arrayBars[barOneIndex].style;
                            const barTwoStyle = arrayBars[barTwoIndex].style;
                            setTimeout(() => {
                                barOneStyle.backgroundColor = color;
                                barTwoStyle.backgroundColor = color;
                            },i * ANIMATION_SPEED_MS);
                        }
                        else {
                            const [temp, barIndex, newHeight] = animations[i];
                            const barStyle = arrayBars[barIndex].style;
                            setTimeout(() => {
                                barStyle.height = `${newHeight}px`;
                            },i * ANIMATION_SPEED_MS);  
                        }
                    }}
                    heapSort(){
                        const animations = getHeapSortAnimations(this.state.array);
                        for (let i = 0; i < animations.length; i++) {
                            const isColorChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
                            const arrayBars = document.getElementsByClassName('array-bar');
                            if(isColorChange === true) {
                                const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                                const [comparision, barOneIndex, barTwoIndex] = animations[i];
                                if(barOneIndex>=130 || barTwoIndex>=130)
                                continue;
                                const barOneStyle = arrayBars[barOneIndex].style;
                                const barTwoStyle = arrayBars[barTwoIndex].style;
                                setTimeout(() => {
                                    barOneStyle.backgroundColor = color;
                                    barTwoStyle.backgroundColor = color;
                                },i * ANIMATION_SPEED_MS);
                            }
                            else {
                                const [swap, barIndex, newHeight] = animations[i];
                                if (barIndex === -1) {
                                    continue;
                                }
                                const barStyle = arrayBars[barIndex].style;
                                setTimeout(() => {
                                    barStyle.height = `${newHeight}px`;
                                },i * ANIMATION_SPEED_MS);  
                            }        }  
                    }
                    insertionSort() {
                        
                        const animations = getInsertionSortAnimations(this.state.array);
                        for (let i = 0; i < animations.length; i++) {
                            const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
                            const arrayBars = document.getElementsByClassName('array-bar');
                            if(isColorChange === true) {
                                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                                const [temp, barOneIndex, barTwoIndex] = animations[i];
                                const barOneStyle = arrayBars[barOneIndex].style;
                                const barTwoStyle = arrayBars[barTwoIndex].style;
                                setTimeout(() => {
                                    barOneStyle.backgroundColor = color;
                                    barTwoStyle.backgroundColor = color;
                                },i * ANIMATION_SPEED_MS);
                            }
                            else {
                                const [temp, barIndex, newHeight] = animations[i];
                                const barStyle = arrayBars[barIndex].style;
                                setTimeout(() => {
                                    barStyle.height = `${newHeight}px`;
                                },i * ANIMATION_SPEED_MS);  
                            }
                        }
                    }
    render() {
        const {array} = this.state;
    
        return (
           <div className="parent">
            <div className="name">
                <p>Sorting Visualizer</p>
            </div>
          <div className="array-container">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                }}></div>
            ))}
            </div>
            
           
             <div className="cont">
             <p className="para" onClick={()=>this.resetArray()}>Generate New Array</p>
           
             <div className="c1">
               <p className="para" onClick={()=>this.bubbleSort()}>Bubble Sort</p>
               <p className="para" onClick={()=>this.quickSort()}>Quick Sort</p>
               <p className="para" onClick={()=>this.heapSort()}>Heap Sort</p>              
                <p className="para" onClick={()=>this.mergeSort()}>Merge Sort</p>
                <p className="para" onClick={()=>this.selectionSort()}>Selection Sort</p>
                <p className="para" onClick={()=>this.selectionSort()}>Insertion Sort</p>
                </div>
              </div>
              
          
          
          
          </div>
          
          
          
        );
      }
    }
    function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      }