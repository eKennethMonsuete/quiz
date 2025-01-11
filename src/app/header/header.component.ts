import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ToolbarModule, AvatarModule, SharedModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
