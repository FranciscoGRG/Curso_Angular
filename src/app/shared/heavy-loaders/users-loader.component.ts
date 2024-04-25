import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-loader',
    standalone: true,
    imports: [],
    template: `<h1>Hola mundo </h1>`,
})

export class UserLoaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}