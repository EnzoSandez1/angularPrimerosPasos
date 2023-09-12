import { Component} from '@angular/core';
import { dbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

constructor (private  dbzService : dbzService) {}

get characters (): Character[]{
  return [...this.dbzService.characters];
}
onDeletedCharacter(id : string) : void{
   this.dbzService.onDeleteCharacter(id);
}
onNewCharacter(character : Character): void{
 this.dbzService.addCharacter(character);
}


}




