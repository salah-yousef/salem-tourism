import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor() { }

  ngOnInit() {
    $('#search_input_box').hide();
    $('#search').on('click', () => {
      $('#search_input_box').slideToggle('slow');
      $('#search_input').focus();
    });
    $('#close_search').on('click', () => {
      $('#search_input_box').slideUp('slow');
    });
  }

}
