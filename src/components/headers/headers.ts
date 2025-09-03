import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-headers',
  imports: [NzButtonModule, NzFlexModule, NzIconModule, NzMenuModule, NzLayoutModule],
  templateUrl: './headers.html',
  styleUrl: './headers.css'
})
export class Headers {

  changeItems(): void {

  }
}
