import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CalendarComponentP } from './calendar/calendar.component';
import { DatePickerComponentP } from './date-picker/date-picker.component';
import { LoadingComponentP } from './loading/loading.component';
import { PaginationComponentP } from './pagination/pagination.component';
import { RateComponentP } from './rate/rate.component';
import { SwitchComponentP } from './switch/switch.component';
import { TimePickerComponentP } from './time-picker/time-picker.component';
import { MessageComponentP } from './message/message.component';
import { ProgressComponentP } from './progress/progress.component';
import { TabsComponentP } from './tabs/tabs.component';
import { TableComponentP } from './table/table.component';
import { StepComponentP } from './step/step.component';
import { UploadComponentP } from './upload/upload.component';
import { CopyComponentP } from './copy/copy.component';
const routes: Routes = [
  {
    path: 'dropDown',
    component: DropdownComponent,
  },
  {
    path: 'pagination',
    component: PaginationComponentP,
  },
  {
    path: 'rate',
    component: RateComponentP,
  },
  {
    path: 'calendar',
    component: CalendarComponentP,
  },
  {
    path: 'datePicker',
    component: DatePickerComponentP,
  },
  {
    path: 'timePicker',
    component: TimePickerComponentP,
  },
  {
    path: 'switch',
    component: SwitchComponentP,
  },
  {
    path: 'loading',
    component: LoadingComponentP,
  },
  {
    path: 'message',
    component: MessageComponentP,
  },
  {
    path: 'progress',
    component: ProgressComponentP,
  },
  {
    path: 'tabs',
    component: TabsComponentP,
  },
  {
    path: 'table',
    component: TableComponentP,
  },
  {
    path: 'step',
    component: StepComponentP,
  },
  {
    path: 'upload',
    component: UploadComponentP,
  },
  {
    path: 'copy',
    component: CopyComponentP,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WccRoutingModule {}
