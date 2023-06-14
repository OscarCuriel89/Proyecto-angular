import { Component, OnInit, ViewChild } from '@angular/core';
declare const $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number=0;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;
  @ViewChild('textos') textos: any;

  constructor() {
    this.widthSlider= 0;
    this.anchuraToSlider= 0;
    this.captions = true;

   }

  ngOnInit(): void {
    
  
  }
  cargarSlider(){
     
    this.anchuraToSlider = this.widthSlider;
  }
  resetearSlider(){
    this.anchuraToSlider = false;
  }
  getAutor(event:any){
    this.autor= event;
    
  }

}
