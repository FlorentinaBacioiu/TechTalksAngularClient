import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { TalkService } from '../_services/talk.service'

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        AuthService,
        TalkService
    ],
})

export class CoreModule { }