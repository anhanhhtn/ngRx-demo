import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from "./data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  template: `
    {{message}}
  `,
  styleUrls: []
})
export class ParentComponent implements OnInit, OnDestroy {

  message:string='';
  subscription!: Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    console.log(this.message)
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}