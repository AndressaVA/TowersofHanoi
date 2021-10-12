let numeros = [];
let pilastrevalores = [1, 0, 0];
let pilastrequantidades = [3, 0, 0];
let blocos = [];
let bloco1, bloco2, bloco3, pilastre1, pilastre1valores, pilastre2valores, pilastre3valores, todospilastrevalores, pilastre2, pilastre3, b, speed, cont, widthh, pl;
let ot = 0;
let pilastres = [];
let mover = true;
let moverpilastre;
let n = 1;
let m = 0;
let k = 0;
let proximo = false, final = false, final2 = false, essefinal = false, inicio = true, simulacao = true, blocostotais = 4, listadeblocos = [], somaa = 0, segundo = true, simulacao2 = false, variavel = 3, variavel2 = false;
let listapilastre1 = [];
let listapilastre2 = [0];
let listapilastre3 = [0];
let listapilastres = [];
let pq, teste1, teste2;


function mousePressed(){
  if (simulacao2 == false){
    variavel2 = false;
  if (mouseX > widthh/8 + 50 && mouseX < widthh/8 + 100 && mouseY > widthh/50 && mouseY < widthh/50 + 25){
     blocostotais = (blocostotais + 1)%10;
    listapilastre1 = null;
    blocos = null;
    numeros = null;
    numeros = [];
    listapilastre1 = [];
    blocos = [];
    listapilastre1 = [];
    listapilastre2 = [0];
    listapilastre3 = [0];
    pilastre1.blocosquant = blocostotais;
    pilastre2.blocosquant = 0;
    pilastre3.blocosquant = 0;
    for (var a = 0; a < blocostotais; a += 1){
    var bloco = new Blocos(a);
    blocos.push(bloco);
  }
  for (var b = 0; b < blocostotais; b +=1){
    numeros.push(0);
  }
  for (var p = 0; p < blocostotais; p += 1){
     somaa += 2**p;
}
     for (var nm = blocostotais; nm >= 0; nm -=1){
    listapilastre1.push(2**nm);
  }
  }
  }
  if (simulacao2 == false){
    if (mouseX > widthh*2/3 && mouseX < widthh*2/3 + 150 && mouseY > widthh/60 && mouseY < widthh/60 + 40){
    simulacao2 = true;
    simulacao = true;
  }
  }
}
let Canvas;
let position;
function setup() {
    widthh = windowWidth; 
  if (widthh > 1100){
    widthh = 1100;
  }
  let largura = widthh*0.95;
  Canvas = createCanvas(widthh*0.95, widthh*0.5);
  position = windowWidth/2 - largura/2;
  Canvas.position(position, widthh*0.04);
  for (var a = 0; a < blocostotais; a += 1){
    var bloco = new Blocos(a);
    blocos.push(bloco);
  }
  for (var b = 0; b < blocostotais; b +=1){
    numeros.push(0);
  }
  for (var p = 0; p < blocostotais; p += 1){
     somaa += 2**p;
}
  pilastre1 = new Pilastres(widthh/6, 0);
  pilastre2 = new Pilastres(widthh/2.12, 1);
  pilastre3 = new Pilastres(widthh/1.25, 2);
  pilastre1.blocosquant = blocostotais;
  pilastre2.blocosquant = 0;
  pilastre3.blocosquant = 0;
  pilastres = [pilastre1, pilastre2, pilastre3];
  pilastre1valores = somaa;
  pilastre2valores = 0;
  pilastre3valores = 0;
  todospilastrevalores = [pilastre1valores, pilastre2valores, pilastre3valores];
  for (var nm = blocostotais; nm >= 0; nm -=1){
    listapilastre1.push(2**nm);
  }
  listapilastres = [listapilastre1, listapilastre2, listapilastre3];
}

function draw() {
  background(0);
  pilastrevalores = todospilastrevalores;
  pilastre1.showpilastre();
  pilastre2.showpilastre();
  pilastre3.showpilastre();
   if (simulacao2 == false){
  fill(100, 100, 100);
  rect(widthh*2/3, widthh/60, 150, 40);
  fill(255);
  textSize(30);
  text('Start', widthh*2/3 + 30,  widthh/60 + 30);
  rect(widthh/8, widthh/50, 50, 25);
  textSize(20);
  fill(0);
  text(blocostotais, widthh/8 + 20, widthh/50 + 20);
  fill(0, 200, 220);
  rect(widthh/8 + 50, widthh/50, 25, 25);
  fill(255);
  textSize(22);
  text('+', widthh/8 + 54, widthh/50 + 22);
  }
  for (var a = 0; a < blocostotais; a+=1){
    blocos[a].showbloco();
  }
  k = 0;
  cont = 0;
  if (simulacao2){
  if (simulacao){
  for (let a of numeros){
    k += 1;
    if (a == 0){
      cont += 1;
      if (cont == 1){
        b = numeros.indexOf(a);
        pl = listapilastres[(blocos[b].pilastrepos + 1)%3].length;
        pq = listapilastres[(blocos[b].pilastrepos + 2)%3].length;
        teste1 = listapilastres[(blocos[b].pilastrepos + 1)%3];
        teste2 = listapilastres[(blocos[b].pilastrepos + 1)%3];
        segundo = true;
      if (teste1[pl - 1]/blocos[b].valor > 1 || teste1[pl - 1] == 0){
        moverpilastre = pilastres[(blocos[b].pilastrepos + 1)%3];
        segundo = false;
        
      } 
        if (segundo){
        moverpilastre = pilastres[(blocos[b].pilastrepos + 2)%3]; 
        }
      }
    
    }
    if (mover){
        if (blocos[b].y > 45){
          blocos[b].moveverticalcima();
        }
      }
    if (blocos[b].y <= 45){
          mover = false;
      if (inicio){
          if (blocos[b].x < moverpilastre.x){
            speed = n;
          }
          if (blocos[b].x > moverpilastre.x){
            speed = n*(-1);
          }
        inicio = false;
      }
          if (speed > 0){
            if (blocos[b].x != moverpilastre.x - 50*(blocos[b].num +1)/2 + 12.5){
            blocos[b].movehorizontal( moverpilastre);
          }
            if (blocos[b].x >= moverpilastre.x - 50*(blocos[b].num +1)/2 + 12.5){
              essefinal = true;
              }
          }
      if (speed < 0){
        if (blocos[b].x != moverpilastre.x - 50*(blocos[b].num +1)/2 + 12.5){
            blocos[b].movehorizontal( moverpilastre);
          }
            if (blocos[b].x <= moverpilastre.x - 50*(blocos[b].num +1)/2 + 12.5){
              essefinal = true;
              }
          }
      }
  if (essefinal){
  if (essefinal){
       if (blocos[b].y < 0.8*widthh*0.5 -  moverpilastre.blocosquant*25 - 25){
           blocos[b].moveverticalbaixo( moverpilastre);

          if (blocos[b].y >= 0.8*widthh*0.5 -  moverpilastre.blocosquant*25 - 25)
          {
            final = true;
          }
       }
         if (final){
              moverpilastre.blocosquant += 1;
           pilastres[blocos[b].pilastrepos].blocosquant -= 1;
            let a = blocos[b].valor;
            numeros[b] = 1;
            let i = 1;
            if (b == 1){
              numeros[0] = 0;
            }
            if (b - 1 > 0){
               for (numeros[b - i]; numeros[0]; i ++)
                 numeros[b - i] = 0;
                }
             comercarmovimento = true;
             mover = true;
             m += 1;
           final = false;
           final2 = true;
           essefinal = false;
           inicio = true;
           
          }
  }
      if (final2){
    final2 = false;
        listapilastres[blocos[b].pilastrepos].pop();
        listapilastres[blocos[b].pilastrepos].unshift(0);
        listapilastres[moverpilastre.espc].push(blocos[b].valor);
        let l = moverpilastre.espc;
        blocos[b].pilastrepos = l  ;   
  }
    }
  }
  }
  fill(0, 250, 175, 200);
  textSize(50);
  for (var h = blocostotais; h > 0; h -=1 ){
    text(numeros[h - 1] + '   ', 0.8*widthh*0.5 + 150 - 30*h, 0.95*widthh*0.5 );
  }
  if (m == 2){
    m = 0;
  }
  if (final2){
  }
  let sum = 0;
  for (var pp = 0; pp < numeros.length; pp += 1){
      sum += numeros[pp];
    if (sum == numeros.length ){
      simulacao = false;
      simulacao2 = false;
      secondpart = true;
       for (var r = 0; r < blocostotais; r+=1){
    blocos[r].x = widthh/6 - 50*(blocos[r].num +1)/2 + 12.5;
  }
      numeros = null;
      numeros = [];
    }
    }
  }
}

class Pilastres{
  constructor(x, espc){
    this.espc = espc;
    this.x = x;
    this.blocopos = undefined;
    this.blocosquant = undefined;
  }
  
  showpilastre(){
    fill(100, 40, 0);
    noStroke();
    rect(this.x, 0.2*widthh*0.5, 25, 0.6*widthh*0.5);
  }
}
class Blocos {
  constructor(num){
    this.num = num;
    this.x = widthh/6 - 50*(num +1)/2 + 12.5;
    this.y = 0.8*widthh*0.5 - (blocostotais - num)*25;
    this.valor = 2**num;
    this.pilastrepos = 0;
  }
  showbloco(){
    fill(0, 250, 175, 200);
    stroke(255);
    rect(this.x, this.y, (this.num + 1)*50, 25);
  }
  movehorizontal(pilastre){
    if (this.x < pilastre.x){
      this.x += speed;
    }
    if (this.x > pilastre.x - 50*(this.num +1)/2 + 12.5){
      this.x += speed;
    }
  }
  moveverticalcima(){
    if (this.y > 45){
      this.y = this.y - n;
    }
  }
  moveverticalbaixo(pilastre){
    if (this.y < 0.8*widthh*0.5 - pilastre.blocosquant*25 - 25){
      this.y +=  n;
    }
  }
}