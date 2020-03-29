import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PastLaunchListGQL } from '../services/spacexGraphql.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent {

  constructor(private pastLaunchesService: PastLaunchListGQL) { }

  // Please be careful to not fetch too much, but this amount lets us see lazy loading imgs in action
  pastLaunches$ = this.pastLaunchesService
                      .fetch({ limit: 30 })
                      // Here we extract our query data, we can also get info like errors or loading state from res
                      .pipe(map((res) => res.data.launchesPast));

}
