import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    public router: Router,
    public service: ServiceService,
  ) { }

  txtElement;
  submit = false;
  words;
  txt;
  pdfsrc;
  wordIndex;
  wait;
  isDeleting;

  ngOnInit(): void {
      // let slideIndex = 0;
      // showSlides();

      // function showSlides() {
      //   let i;
      //   let slides:any = document.getElementsByClassName("mySlides");
      //   let dots = document.getElementsByClassName("dot");
      //   for (i = 0; i < slides.length; i++) {
      //     slides[i].style.display = "none";
      //   }
      //   slideIndex++;
      //   if (slideIndex > slides.length) {
      //     slideIndex = 1;
      //   }
      //   for (i = 0; i < dots.length; i++) {
      //     dots[i].className = dots[i].className.replace(" active", "");
      //   }
      //   slides[slideIndex - 1].style.display = "block";
      //   dots[slideIndex - 1].className += " active";
      //   setTimeout(showSlides, 3000); // 3000 = Change image every 3 seconds
      // }
       //typing--!
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    //console.log(txtElement, words);
    this.type1(txtElement, words);

    const buttons = document.querySelectorAll(".card-buttons button");
    const sections = document.querySelectorAll(".card-section");
    const card = document.querySelector(".card");

    const handleButtonClick = (e) => {
      const targetSection = e.target.getAttribute("data-section");
      const section = document.querySelector(targetSection);
      targetSection !== "#about"
        ? card.classList.add("is-active")
        : card.classList.remove("is-active");
      card.setAttribute("data-state", targetSection);
      sections.forEach((s) => s.classList.remove("is-active"));
      buttons.forEach((b) => b.classList.remove("is-active"));
      e.target.classList.add("is-active");
      section.classList.add("is-active");
    };

    
    
    
     $(document).ready(function () {
      var $navbar = $(".navbar");
      var $offsetY = $navbar.offset().top + 10;
      function scroll() {
        if ($(window).scrollTop() >= $offsetY) {
          $navbar
            .addClass("menu-fixed")
            .css("background-color", "rgba(255,254,253,0.97)");
        } else {
          $navbar
            .removeClass("menu-fixed")
            .css("background-color", "transparent");
        }
      }
      document.onscroll = scroll;
      $("#search-icon").click(function () {
        $(".nav").toggleClass("search");
        $(".nav").toggleClass("no-search");
        $(".search-input").toggleClass("search-active");
      });

      $(".menu-toggle").click(function () {
        $(".nav").toggleClass("mobile-nav");
        $(this).toggleClass("is-active");
      });
      $(".nav-item").click(function () {
        $(".nav").toggleClass("mobile-nav");
        $(".menu-toggle").toggleClass("is-active");
      });
    });
  }



   //scrolling---------------------------
  scrollToElement(element): void {
    console.log(element);
      $('html, body').animate({
          scrollTop: $("#"+element).offset().top-150
      }, 1000);
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
     this.router.navigate(["/search"])
    }
  
  type1(txtElement, words) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = 2000;
    this.isDeleting = false;
    this.type();
  }
  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove characters
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add charaters
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 200;

    if (this.isDeleting) {
      // Increase speed by half when deleting
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }

  open(item) {
    
  }
  rout() {
     this.router.navigate(["/scan"])
  }
    rout2() {
     this.router.navigate(["/cart"])
  }

}
