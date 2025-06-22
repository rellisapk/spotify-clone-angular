import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Search } from './pages/search/search';
import { Artist } from './pages/artist/artist';
import { Album } from './pages/album/album';
import { Playlist } from './pages/playlist/playlist';
import { Track } from './pages/track/track';
import { Layout } from './components/layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: Home },
            { path: 'search', component: Search },
            { path: 'artist/:id', component: Artist },
            { path: 'album/:id', component: Album },
            { path: 'playlist/:id', component: Playlist },
            { path: 'track/:id', component: Track },
        ]
    }
];
