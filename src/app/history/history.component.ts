import { Component, OnInit, Input } from '@angular/core';
// Importing of the required interface
import { HistoryObj } from '../interface/translatorInterface';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

// The data came from the parent component to show it as current translation

  @Input() initLang: string = '';
  @Input() initText: string = '';
  @Input() targetLang: string = '';
  @Input() targetText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Array and object that store the data gathered from the localStorage and ordered
  // the appropriate way
  newArr: HistoryObj[] = []
  newObj: HistoryObj = {
    initLang: '',
    initText: '',
    targetLang: '',
    targetText: ''
  }

  // Method that works with the localStroge and create the data for the view
  showHist() {
    let tempArr = []
    // Here we create an array of objects with new keys and old values for easier sorting
    for (let i = 0; i < localStorage.length; i++) {
      const value = localStorage.getItem(JSON.stringify(i));
      tempArr.push([{ i, value }]);
    }
    // Actual sorting
    let values = tempArr.sort()
    // Final object creation.
    // We select each object from the previously sorted array of objects.
    // Then we parse it.
    // We assemble the target object (the newObj) that will go to the view.
    // 
    for (let value of values) {
      for (let i of value) {
        let ob = JSON.parse(JSON.stringify(i.value))
        let parseOb = JSON.parse(ob)
        this.newObj = {
          initLang: parseOb.initLang,
          initText: parseOb.initText,
          targetLang: parseOb.targetLang,
          targetText: parseOb.targetText
        }
        this.newArr.push(this.newObj)
      }
    }
  }
}