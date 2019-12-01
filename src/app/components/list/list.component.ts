import { Component, OnInit } from '@angular/core';
import {AsyncService} from '../../services/async.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor(private async:AsyncService) { }

  elements = [];

  ngOnInit() {
    this.async.read().subscribe(el =>{
      const element = JSON.stringify(el);
      this.elements.push(element);
    });
  }

}
