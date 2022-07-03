import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public email:any;
  public password:any;
  public name:any;
  public imageURL :string = 'http://www.4x4.ec/overlandecuador/wp-content/uploads/2017/06/default-user-icon-8.jpg';
  public rol : string= "";
  public image_reference: string= "";
  
  constructor(
    public router:Router,
    public fireService:FireserviceService
  ) { }

  ngOnInit() {
  }

  signup(){ 
    this.fireService.signup({email:this.email,password:this.password}).then(res=>{
      if(res.user.uid){
        let data = {
          email:this.email,
          password:this.password,
          name:this.name,
          uid:res.user.uid,
          imageURL: this.imageURL,
          image_reference: this.image_reference,
          rol: this.rol,
        }
        this.fireService.saveDetails(data).then(res=>{
         alert('Account Created!');
         switch(data.rol) { 
          case "administrador": { 
            this.router.navigateByUrl(`admin/${data.uid}`)
             break; 
          } 
          case "turista": { 
            this.router.navigateByUrl(`turista/${data.uid}`)
             break; 
          } 
          case "encargado": { 
            this.router.navigateByUrl(`encargado/${data.uid}`)
            break; 
         }
          default: { 
             alert("revisa que el usuario tenga rol")
             break; 
          } 
       } 
        },err=>{
          console.log(err);
        })
      }
    },err=>{
      alert(err.message);

      console.log(err);
    })
  }
  turista(){
    this.rol= "turista"
  }
  encargado(){
    this.rol= "encargado"
  }

  inicioSecion(){
    this.router.navigateByUrl('encargado');
  }
  logout(){
    this.router.navigateByUrl('');
  }

}
