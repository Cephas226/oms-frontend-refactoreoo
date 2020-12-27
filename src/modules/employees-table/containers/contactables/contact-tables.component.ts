import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-tables',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './contact-tables.component.html',
    styleUrls: ['contact-tables.component.scss'],
})
export class ContactTablesComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
