import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import TitleComponent from '../../../shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
  <app-title title="View transition 2" />

  <section class="flex justify-end">
    <img 
    srcset="https://picsum.photos/id/237/200/300" 
    alt="Picsum" 
    width="200"
    height="300"
    style="view-transition-name: hero1"
    />

    <div 
    class="fixed bottom-16 bg-blue-800 w-32 h-32 rounded"
    style="view-transition-name: hero2"
    ></div>

  </section>
  `,
  styleUrl: './view-transition.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransitionComponent { }
