import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [CommonModule, HttpModule],
    declarations: [],
    exports: [CommonModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [],
        };
    }
}