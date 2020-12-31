import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WccRoutingModule } from './wcc-routing.module';
import { DropDownComponent } from '../components/drop-down/drop-down.component';
import { DropdownmenuComponent } from '../components/drop-down/dropdownmenu/dropdownmenu.component';
import { DropDownDDirective } from '../components/drop-down/drop-down-d.directive';
import { DropDownItemDDirective } from '../components/drop-down/drop-down-item-d.directive';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { DatePickerComponent } from '../components/date-picker/date-picker.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { RateComponent } from '../components/rate/rate.component';
import { SwitchComponent } from '../components/switch/switch.component';
import { TimePickerComponent } from '../components/time-picker/time-picker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MessageComponent } from '../components/message/message.component';
import { ProgressComponent } from '../components/progress/progress.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { TabNavComponent } from '../components/tabs/tab-nav/tab-nav.component';
import { TableComponent } from '../components/table/table.component';
import { StepComponent } from '../components/step/step.component';
import { StepItemComponent } from '../components/step/step-item/step-item.component';

import { WccComponent } from './wcc/wcc.component';
import { CalendarComponentP } from './calendar/calendar.component';
import { DatePickerComponentP } from './date-picker/date-picker.component';
import { LoadingComponentP } from './loading/loading.component';
import { PaginationComponentP } from './pagination/pagination.component';
import { RateComponentP } from './rate/rate.component';
import { SwitchComponentP } from './switch/switch.component';
import { TimePickerComponentP } from './time-picker/time-picker.component';
import { MessageComponentP } from './message/message.component';
import { ProgressComponentP } from './progress/progress.component';
import { FixBoxComponent } from '../components/usual/fix-box/fix-box.component';
import { TabsComponentP } from './tabs/tabs.component';
import { TableComponentP } from './table/table.component';
import { StepComponentP } from './step/step.component';

@NgModule({
  declarations: [
    DropdownmenuComponent,
    DropDownComponent,
    DropDownDDirective,
    DropDownItemDDirective,
    CalendarComponent,
    DatePickerComponent,
    LoadingComponent,
    PaginationComponent,
    RateComponent,
    SwitchComponent,
    TimePickerComponent,
    DropdownComponent,
    MessageComponent,
    WccComponent,
    ProgressComponent,
    TabsComponent,
    TabNavComponent,
    TableComponent,
    StepComponent,
    CalendarComponentP,
    DatePickerComponentP,
    LoadingComponentP,
    PaginationComponentP,
    RateComponentP,
    SwitchComponentP,
    TimePickerComponentP,
    MessageComponentP,
    ProgressComponentP,
    FixBoxComponent,
    TabsComponentP,
    TableComponentP,
    StepComponentP,
    StepItemComponent,
  ],
  imports: [CommonModule, WccRoutingModule],
})
export class WccModule {}
