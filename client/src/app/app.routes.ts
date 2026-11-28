import { Routes } from '@angular/router';
import { FilmComponent } from './components/film/film.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';

export const routes: Routes = [
    {
        path: 'films',
        component: FilmComponent
    },
    {
        path: 'films/:id',
        component: FilmDetailComponent
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
