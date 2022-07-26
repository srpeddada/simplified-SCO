import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    public router: Router,
    public service: ServiceService
  ) { }

  ngOnInit(): void {

  }
   SubmitSearch(form: NgForm){
    //console.log(form.value)
    // this.registerService.searchNews().subscribe((res) =>{
    //   //console.log(res)
    // })
      console.log(form.value)
    var value =form.value.search.trim()
    value = value.replace(/\s+/g, '_')
     //value.split(' ').join('%20')
   //  this.CookieService.set("search_value",value, 1, "/")
      localStorage.setItem("search_value", value)
     console.log(value)
     //this.router.navigate(["/search"])
    }
  

}
