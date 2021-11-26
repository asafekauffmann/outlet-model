import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
   selector: 'app-editgroceryitem',
   templateUrl: './editgroceryitem.component.html',
   styleUrls: ['./editgroceryitem.component.sass']
})
export class EditgroceryitemComponent implements OnInit {
   
   name: any;

   constructor(private route : ActivatedRoute) { }

   ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
         this.name = params['name'];
      });
   }

}
