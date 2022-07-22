import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent implements OnInit {

  constructor(private cardService:CardService) { }

  ngOnInit(): void {

  }

  search(searchText:string):void{
searchText=searchText.toLowerCase();
 this.cardService.filteredCards=this.cardService.cards.filter((card)=>{
  return card.title.toLowerCase().indexOf(searchText)>-1 ||(card.name &&  card.name.toLowerCase().indexOf(searchText)>-1) || card.phone.toLowerCase().indexOf(searchText)>-1 ||(card.address &&  card.address.toLowerCase().indexOf(searchText)>-1) ||(card.email &&  card.email.toLowerCase().indexOf(searchText)>-1)  ;
});

  }
}
