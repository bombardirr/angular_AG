import { Component, OnInit } from '@angular/core';

// To work with interfaces
import {SendingObj, ResultText} from '../interface/translatorInterface';
// Service that handles the sending/receiving data
// to/from the Google translate API
import {TranslatorService} from '../translator.service';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {

// The object that stores the text from the
// Google translate API
result: ResultText = {
  resultText: ''
}

// The "TranslatorService" injection
  constructor(
    private translatorService: TranslatorService
  ) { }

  ngOnInit(): void {
  }
// The method prepares the input data that came from the html template
// to be sent to the "TranslatorService"
  prepareForTranslation(textToTranslate: string, chosenLang: string) {
    const objToSend: SendingObj = {
      q: textToTranslate,
      target: chosenLang
    }

// The following magic is happening here:
// 1 -  We send the "objToSend" object to the "TranslatorService"
// 2 -  We "subscribe" to the incoming response/translation from the
//      "TranslatorService"
// 3 -  We take the exact part of the response we got from the
//      Google translate API and store it into the "result"
//      object
// 4 -  We send it to the console
this.translatorService.getTranslation(objToSend).subscribe((income: any) => {
  this.result = {
    resultText: income.data.translations[0].translatedText
  }
  console.log(this.result);
});
};
};
