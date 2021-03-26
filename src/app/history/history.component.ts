import { Component, OnInit, Input } from '@angular/core';

import {HistoryObj} from '../interface/translatorInterface';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @Input() initLang: string = '';
  @Input() initText: string = '';
  @Input() targetLang: string = '';
  @Input() targetText: string = '';

  constructor( ) { }

  ngOnInit(): void {
  }
  newArr: HistoryObj[] = []
  newObj: HistoryObj = {
    initLang: '',
    initText: '',
    targetLang: '',
    targetText: ''
  }
  showHist() {
    let tempArr = []
    for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.getItem(JSON.stringify(i));
    tempArr.push([{i, value}]);
  }

  let values = tempArr.sort()

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