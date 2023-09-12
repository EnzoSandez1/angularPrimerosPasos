import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public name : string = 'ironman';
  public age : number = 45 ;

  get capitalizedName(): string{
    return this.name.toUpperCase() ;
  }

  getHeroDescription(): string {

    return `${ this.name } - ${ this.age }`;
  }

  changeName(nombre: string):void{
    this.name = nombre ;
  }

  changeAge(edad: number) : void {
    this.age= edad;
  }
  reset():void{
    this.name='ironman';
    this.age=45;
  }

}
