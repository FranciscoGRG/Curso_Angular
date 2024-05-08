import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import TitleComponent from '../../../shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/req-response';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule, TitleComponent,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  public titleLabel = computed(() => {
    if (this.user()) {
      return `Informacion del usuario: ${this.user()?.first_name} ${this.user()?.last_name}`;
    }

    return 'Informacion del usuario';
  })


  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );


  // constructor() {
  //   this.route.params.subscribe(params => {
  //     console.log({ params });
  //   })
  // }

}
