import { Component, OnInit } from '@angular/core';
import { makeDecorator } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  cosiipGrupo: any = '';
  cosiipClasse: any = '';
  cosiipBandeira: any = '';
  classeTaxa: any = '';
  bandeiraTaxa: any = '';
  infoGrupo: boolean = false; 
  infoClasse: boolean = false; 
  infoBandeira: boolean = false; 
  infoConsumo: boolean = false; 
  mostraResultado: boolean = false; 
  resultado: any = ''; 

  private dados: any = [ {
    grupo: null,
    classe: null,
    bandeira: null,
    consumo: null
  }

  ]

  private cosiip: any = [
    {
      grupo: "A",
      dados: [
        {
          classe: 1,
          valores: [
            {
              min: 0,
              max: 2000,
              tax: 52.60
            },
            {
              min: 2001,
              max: 5000,
              tax: 55.70
            },
            {
              min: 5001,
              max: 10000,
              tax: 59
            },
            {
              min: 10001,
              max: 99999999,
              tax: 65
            }

          ]
        }
      ]
    },
    {
      grupo: "B",
      dados: [
        //RESIDENCIAL
        {
          classe: 1,
          valores: [
            {
              min: 0,
              max: 30,
              tax: 0.55
            },
            {
              min: 31,
              max: 100,
              tax: 2.70
            },
            {
              min: 101,
              max: 200,
              tax: 5
            },
            {
              min: 201,
              max: 300,
              tax: 7
            },
            {
              min: 301,
              max: 400,
              tax: 8.80
            },
            {
              min: 401,
              max: 500,
              tax: 11
            },
            {
              min: 501,
              max: 1000,
              tax: 17.50
            },
            {
              min: 1001,
              max: 99999999,
              tax: 20.50
            }

          ]
        },
        //RESIDENCIAL BAIXA RENDA
        {
          classe: 1.1,
          valores: [
            {
              min: 0,
              max: 100,
              tax: 0
            },
            {
              min: 101,
              max: 200,
              tax: 2.50
            },
            {
              min: 201,
              max: 220,
              tax: 3.50
            },
            {
              min: 221,
              max: 300,
              tax: 7
            },
            {
              min: 301,
              max: 400,
              tax: 8.80
            },
            {
              min: 401,
              max: 500,
              tax: 11
            },
            {
              min: 501,
              max: 1000,
              tax: 17.50
            },
            {
              min: 1001,
              max: 99999999,
              tax: 20.50
            }

          ]
        },
        //INDUSTRIAL 
        {
          classe: 2,
          valores: [
            {
              min: 0,
              max: 30,
              tax: 5
            },
            {
              min: 31,
              max: 100,
              tax: 12
            },
            {
              min: 101,
              max: 200,
              tax: 22
            },
            {
              min: 201,
              max: 300,
              tax: 31
            },
            {
              min: 301,
              max: 400,
              tax: 40
            },
            {
              min: 401,
              max: 500,
              tax: 43
            },
            {
              min: 501,
              max: 1000,
              tax: 48
            },
            {
              min: 1001,
              max: 99999999,
              tax: 54
            }

          ]
        },
        //COMERCIAL
        {
          classe: 3,
          valores: [
            {
              min: 0,
              max: 30,
              tax: 10
            },
            {
              min: 31,
              max: 100,
              tax: 15
            },
            {
              min: 101,
              max: 200,
              tax: 21.60
            },
            {
              min: 201,
              max: 300,
              tax: 25
            },
            {
              min: 301,
              max: 400,
              tax: 27.80
            },
            {
              min: 401,
              max: 500,
              tax: 34
            },
            {
              min: 501,
              max: 1000,
              tax: 37
            },
            {
              min: 1001,
              max: 99999999,
              tax: 40
            }

          ]
        },
        //RURAL
        {
          classe: 4,
          valores: [
            {
              min: 0,
              max: 30,
              tax: 1.50
            },
            {
              min: 31,
              max: 100,
              tax: 1.75
            },
            {
              min: 101,
              max: 200,
              tax: 2.25
            },
            {
              min: 201,
              max: 300,
              tax: 3
            },
            {
              min: 301,
              max: 400,
              tax: 4
            },
            {
              min: 401,
              max: 500,
              tax: 5.25
            },
            {
              min: 501,
              max: 1000,
              tax: 6.50
            },
            {
              min: 1001,
              max: 99999999,
              tax: 8
            }

          ]
        },
        //PODER PÚBLICO
        {
          classe: 5,
          valores: [
            {
              min: 0,
              max: 30,
              tax: 3
            },
            {
              min: 31,
              max: 100,
              tax: 4
            },
            {
              min: 101,
              max: 200,
              tax: 5
            },
            {
              min: 201,
              max: 300,
              tax: 7
            },
            {
              min: 301,
              max: 400,
              tax: 9
            },
            {
              min: 401,
              max: 500,
              tax: 12
            },
            {
              min: 501,
              max: 1000,
              tax: 15
            },
            {
              min: 1001,
              max: 99999999,
              tax: 18
            }

          ]
        },
        //SERVIÇO PÚBLICO 
        {
          classe: 6,
          valores: [
            {
              min: 0,
              max: 30,
              tax: 3
            },
            {
              min: 31,
              max: 100,
              tax: 4
            },
            {
              min: 101,
              max: 200,
              tax: 5
            },
            {
              min: 201,
              max: 300,
              tax: 7
            },
            {
              min: 301,
              max: 400,
              tax: 9
            },
            {
              min: 401,
              max: 500,
              tax: 12
            },
            {
              min: 501,
              max: 1000,
              tax: 15
            },
            {
              min: 1001,
              max: 99999999,
              tax: 18
            }

          ]
        }
      ]
    }
  ]

  private defaultClasses: any = [ 
    { id: 1, val: "RESIDENCIAL", icone: 'residencial' },
    { id: 1.1, val: "RESIDENCIAL", row: "BAIXA RENDA", icone: 'residencial-br' },
    { id: 2, val: "INDUSTRIAL", icone: 'industrial' },
    { id: 3, val: "COMERCIAL", icone: 'comercial' },
    { id: 4, val: "RURAL", icone: 'rural' },
    { id: 5, val: "PODER PÚBLICO", icone: 'poder-publico' },
    { id: 6, val: "SERVIÇO PÚBLICO", icone: 'servico-publico' }
  ];

  grupos: any = [
    { id: 1, val: "A"},
    { id: 2, val: "B" },
  ];
  
  classes: any = this.defaultClasses;

  bandeiras: any = [
    { id: 1, val: "VERDE", tax: 281.82, cor: "green" },
    { id: 2, val: "AMARELA", tax: 291.82, cor: "yellow" },
    { id: 3, val: "VERMELHA", tax: 311.82, cor: "red", row: "PATAMAR 1" },
    { id: 4, val: "VERMELHA", tax: 331.82, cor: "red", row: "PATAMAR 2" },
  ];

  seleciona: any = {
    grupo: '',
    classe: '',
    bandeira: '',
    consumo: '',
  };

  grupoChange(val: any) {
    // console.log(JSON.stringify(val));
    // console.log(JSON.stringify(this.defaultClasses));
    // return;
    // const obj = this.grupos[val];
    // console.log(this.radioModel);
    // console.log(this.dados.grupo)
    // const obj = this.grupos.find(item => item.id == val);
    if (!this.dados.grupo) {
      this.classes = [];
      return;
    }
    if (this.dados.grupo == "A") {
      this.classes = [ 
        { id: 1, val: "RESIDENCIAL, INDUSTRIAL, COMERCIAL, PODER PÚBLICO, SERVIÇO PÚBLICO" },
      ];
    }
    else if (this.dados.grupo == "B") {
      this.classes = this.defaultClasses;
    }
    else {
      this.classes = [];
    }
  }

  calcular() {
    if (!this.dados.grupo || !this.dados.classe || !this.dados.bandeira || !this.dados.consumo) {
      this.mostraResultado = false;
      return;
    }
    this.cosiipGrupo = this.cosiip.find(item => item.grupo == this.dados.grupo).dados;
    this.cosiipClasse = this.cosiipGrupo.find(item => item.classe == this.dados.classe).valores;
    this.classeTaxa = this.cosiipClasse.find(item => item.min <= this.dados.consumo && this.dados.consumo <= item.max).tax;
    this.bandeiraTaxa = this.bandeiras.find(item => item.id == this.dados.bandeira).tax;
    this.resultado = (this.classeTaxa * this.bandeiraTaxa)/100;
    this.mostraResultado = true;
  }
  // onMouseOverOut() {
  //   this.isMouseOver = !this.isMouseOver;
  // }
  showInfoGrupo() {
    this.infoGrupo = !this.infoGrupo;
  }
  showInfoClasse() {
    this.infoClasse = !this.infoClasse;
  }
  showInfoBandeira() {
    this.infoBandeira = !this.infoBandeira;
  }
  showInfoConsumo() {
    this.infoConsumo = !this.infoConsumo;
  }

  converteT(val) {
    return val.replace(/,/g, '<br><br>');
  }
  
  constructor() {  
  }

  ngOnInit() {
  }

}
