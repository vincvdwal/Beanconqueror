import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Settings} from '../../../classes/settings/settings';
import {UISettingsStorage} from '../../../services/uiSettingsStorage';
import {UIAnalytics} from '../../../services/uiAnalytics';

import {Preparation} from '../../../classes/preparation/preparation';
import {UIPreparationStorage} from '../../../services/uiPreparationStorage';


@Component({
  selector: 'default-custom-parameter',
  templateUrl: './default-custom-parameter.component.html',
  styleUrls: ['./default-custom-parameter.component.scss'],
})
export class DefaultCustomParameterComponent implements OnInit {

  @Input() private data: Settings | Preparation;
  constructor(public uiSettingsStorage: UISettingsStorage,
              private readonly uiPreparationStorage: UIPreparationStorage,
              private readonly uiAnalytics: UIAnalytics,
              private readonly changeDetectorRef: ChangeDetectorRef) {

  }

  public ngOnInit() {
  }

  public save(): void {
    this.changeDetectorRef.detectChanges();
    if (this.data instanceof Settings) {
      this.uiSettingsStorage.saveSettings(this.data as Settings);
    } else {
      this.uiPreparationStorage.update(this.data as Preparation);
    }

  }


}
