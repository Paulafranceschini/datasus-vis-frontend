import { Component } from '@angular/core';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

  faHeartbeat = faHeartbeat;

}
