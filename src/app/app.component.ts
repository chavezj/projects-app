import { Component } from '@angular/core';

import { DataService } from '../app/services/data.service'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projects-app';
  projects: any = null;
  constructor(public main: DataService) {

      this.main.getData('./assets/myprojectstatus.json').subscribe(data=> {
        this.projects = data;
        console.log(this.projects);
      })

  }
}
