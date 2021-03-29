import { Component, OnInit } from '@angular/core';

// To work with interfaces
import { SendingObj, ResultText, HistoryObj, LangObj } from '../interface/translatorInterface';
// Service that handles the sending/receiving data
// to/from the Google translate API
import { TranslatorService } from '../translator.service';

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
  prepareForTranslation(initLang: string, textToTranslate: string, chosenLang: string) {
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
    // 4 -  We store the data to the localStorage
    this.translatorService.getTranslation(objToSend).subscribe((income: any) => {
      this.result = {
        resultText: income.data.translations[0].translatedText
      }
      const temp: HistoryObj = {
        initLang: initLang,
        initText: textToTranslate,
        targetLang: chosenLang,
        targetText: this.result.resultText
      };

      // Sending the translation to the localStorage
      if (localStorage.length != 0) {
        const id = JSON.stringify(localStorage.length)
        localStorage.setItem(id, (JSON.stringify(temp)))
      } else {
        localStorage.setItem('0', JSON.stringify(temp))
      }
    });
  };

  // Collection of languages

  langObj: LangObj[] = [
    {
      langShort: 'af',
      langLong: 'Afrikaans'
    },
    {
      langShort: 'sq',
      langLong: 'Albanian'
    },
    {
      langShort: 'am',
      langLong: 'Amharic'
    },
    {
      langShort: 'ar',
      langLong: 'Arabic'
    },
    {
      langShort: 'hy',
      langLong: 'Armenian'
    },
    {
      langShort: 'az',
      langLong: 'Azerbaijani'
    },
    {
      langShort: 'eu',
      langLong: 'Basque'
    },
    {
      langShort: 'be',
      langLong: 'Belarusian'
    },
    {
      langShort: 'bn',
      langLong: 'Bengali'
    },
    {
      langShort: 'bs',
      langLong: 'Bosnian'
    },
    {
      langShort: 'bg',
      langLong: 'Bulgarian'
    },
    {
      langShort: 'ca',
      langLong: 'Catalan'
    },
    {
      langShort: 'ceb',
      langLong: 'Cebuano'
    },
    {
      langShort: 'zh',
      langLong: 'Chinese'
    },
    {
      langShort: 'co',
      langLong: 'Corsican'
    },
    {
      langShort: 'hr',
      langLong: 'Croatian'
    },
    {
      langShort: 'cs',
      langLong: 'Czech'
    },
    {
      langShort: 'da',
      langLong: 'Danish'
    },
    {
      langShort: 'nl',
      langLong: 'Dutch'
    },
    {
      langShort: 'en',
      langLong: 'English'
    },
    {
      langShort: 'eo',
      langLong: 'Esperanto'
    },
    {
      langShort: 'et',
      langLong: 'Estonian'
    },
    {
      langShort: 'fi',
      langLong: 'Finnish'
    },
    {
      langShort: 'fr',
      langLong: 'French'
    },
    {
      langShort: 'fy',
      langLong: 'Frisian'
    },
    {
      langShort: 'gl',
      langLong: 'Galician'
    },
    {
      langShort: 'ka',
      langLong: 'Georgian'
    },
    {
      langShort: 'de',
      langLong: 'German'
    },
    {
      langShort: 'el',
      langLong: 'Greek'
    },
    {
      langShort: 'gu',
      langLong: 'Gujarati'
    },
    {
      langShort: 'ht',
      langLong: 'Haitian Creole'
    },
    {
      langShort: 'ha',
      langLong: 'Hausa'
    },
    {
      langShort: 'haw',
      langLong: 'Hawaiian'
    },
    {
      langShort: 'he',
      langLong: 'Hebrew'
    },
    {
      langShort: 'hi',
      langLong: 'Hindi'
    },
    {
      langShort: 'hmn',
      langLong: 'Hmong'
    },
    {
      langShort: 'hu',
      langLong: 'Hungarian'
    },
    {
      langShort: 'is',
      langLong: 'Icelandic'
    },
    {
      langShort: 'ig',
      langLong: 'Igbo'
    },
    {
      langShort: 'id',
      langLong: 'Indonesian'
    },
    {
      langShort: 'ga',
      langLong: 'Irish'
    },
    {
      langShort: 'it',
      langLong: 'Italian'
    },
    {
      langShort: 'ja',
      langLong: 'Japanese'
    },
    {
      langShort: 'jv',
      langLong: 'Javanese'
    },
    {
      langShort: 'kn',
      langLong: 'Kannada'
    },
    {
      langShort: 'kk',
      langLong: 'Kazakh'
    },
    {
      langShort: 'km',
      langLong: 'Khmer'
    },
    {
      langShort: 'rw',
      langLong: 'Kinyarwanda'
    },
    {
      langShort: 'ko',
      langLong: 'Korean'
    },
    {
      langShort: 'ku',
      langLong: 'Kurdish'
    },
    {
      langShort: 'ky',
      langLong: 'Kyrgyz'
    },
    {
      langShort: 'lo',
      langLong: 'Lao'
    },
    {
      langShort: 'la',
      langLong: 'Latin'
    },
    {
      langShort: 'lv',
      langLong: 'Latvian'
    },
    {
      langShort: 'lt',
      langLong: 'Lithuanian'
    },
    {
      langShort: 'lb',
      langLong: 'Luxembourgish'
    },
    {
      langShort: 'mk',
      langLong: 'Macedonian'
    },
    {
      langShort: 'mg',
      langLong: 'Malagasy'
    },
    {
      langShort: 'ms',
      langLong: 'Malay'
    },
    {
      langShort: 'ml',
      langLong: 'Malayalam'
    },
    {
      langShort: 'mt',
      langLong: 'Maltese'
    },
    {
      langShort: 'mi',
      langLong: 'Maori'
    },
    {
      langShort: 'mr',
      langLong: 'Marathi'
    },
    {
      langShort: 'mn',
      langLong: 'Mongolian'
    },
    {
      langShort: 'my',
      langLong: 'Myanmar'
    },
    {
      langShort: 'ne',
      langLong: 'Nepali'
    },
    {
      langShort: 'no',
      langLong: 'Norwegian'
    },
    {
      langShort: 'ny',
      langLong: 'Nyanja'
    },
    {
      langShort: 'or',
      langLong: 'Odia'
    },
    {
      langShort: 'ps',
      langLong: 'Pashto'
    },
    {
      langShort: 'fa',
      langLong: 'Persian'
    },
    {
      langShort: 'pl',
      langLong: 'Polish'
    },
    {
      langShort: 'pt',
      langLong: 'Portuguese'
    },
    {
      langShort: 'pa',
      langLong: 'Punjabi'
    },
    {
      langShort: 'ro',
      langLong: 'Romanian'
    },
    {
      langShort: 'ru',
      langLong: 'Russian'
    },
    {
      langShort: 'sm',
      langLong: 'Samoan'
    },
    {
      langShort: 'gd',
      langLong: 'Scots Gaelic'
    },
    {
      langShort: 'sr',
      langLong: 'Serbian'
    },
    {
      langShort: 'st',
      langLong: 'Sesotho'
    },
    {
      langShort: 'sn',
      langLong: 'Shona'
    },
    {
      langShort: 'sd',
      langLong: 'Sindhi'
    },
    {
      langShort: 'si',
      langLong: 'Sinhala'
    },
    {
      langShort: 'sk',
      langLong: 'Slovak'
    },
    {
      langShort: 'sl',
      langLong: 'Slovenian'
    },
    {
      langShort: 'so',
      langLong: 'Somali'
    },
    {
      langShort: 'es',
      langLong: 'Spanish'
    },
    {
      langShort: 'su',
      langLong: 'Sundanese'
    },
    {
      langShort: 'sw',
      langLong: 'Swahili'
    },
    {
      langShort: 'sv',
      langLong: 'Swedish'
    },
    {
      langShort: 'tl',
      langLong: 'Tagalog'
    },
    {
      langShort: 'tg',
      langLong: 'Tajik'
    },
    {
      langShort: 'ta',
      langLong: 'Tamil'
    },
    {
      langShort: 'tt',
      langLong: 'Tatar'
    },
    {
      langShort: 'te',
      langLong: 'Telugu'
    },
    {
      langShort: 'th',
      langLong: 'Thai'
    },
    {
      langShort: 'tr',
      langLong: 'Turkish'
    },
    {
      langShort: 'tk',
      langLong: 'Turkmen'
    },
    {
      langShort: 'uk',
      langLong: 'Ukrainian'
    },
    {
      langShort: 'ur',
      langLong: 'Urdu'
    },
    {
      langShort: 'ug',
      langLong: 'Uyghur'
    },
    {
      langShort: 'uz',
      langLong: 'Uzbek'
    },
    {
      langShort: 'vi',
      langLong: 'Vietnamese'
    },
    {
      langShort: 'cy',
      langLong: 'Welsh'
    },
    {
      langShort: 'xh',
      langLong: 'Xhosa'
    },
    {
      langShort: 'yi',
      langLong: 'Yiddish'
    },
    {
      langShort: 'yo',
      langLong: 'Yoruba'
    },
    {
      langShort: 'zu',
      langLong: 'Zulu'
    },
  ]
}
