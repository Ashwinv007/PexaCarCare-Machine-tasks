import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@Component({
  selector:'app-root',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./app.html',
  styleUrl:'./app.css'
})

export class App implements OnInit {
  users:any[]=[]

  currentPage=1
  totalPages=1
  rowsPerPage=5
  constructor(private http:HttpClient,private cdr:ChangeDetectorRef){}
  
  ngOnInit(){
    this.fetchUsers(this.currentPage)
  }
  fetchUsers(page:number){
  this.http.get(`/api/users?page=${page}`, {
    headers: { 'x-api-key': 'reqres_5c01aeb4c50b44b29d6993d455c8ad50' }
  }).subscribe((res:any)=>{
     console.log('API response:', res);
      this.users=res.data
      this.totalPages=res.total_pages
      this.cdr.detectChanges()
      
    })
  }
  changePage(page:number){
    this.currentPage=page
     this.fetchUsers(page)
  }
  changeRows(event:any){
    this.rowsPerPage=event.target.value
  }
}