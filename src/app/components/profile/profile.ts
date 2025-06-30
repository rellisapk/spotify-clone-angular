import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MiniPlayerService } from '../../services/mini-player';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './profile.html',
})
export class Profile {
  user = {
    name: 'Rileyy',
    avatar: 'https://i.pravatar.cc/150?img=12',
    followers: 128,
    following: 45,
    likedSongs: [{
      id: 3135556,
      title: "Harder, Better, Faster, Stronger",
      artist: {
        id: 27,
        name: "Daft Punk"
      },
      album: {
        id: 302127,
        title: "Discovery",
        cover_medium: "https://api.deezer.com/album/302127/image"
      }
    },
    {
      id: 1109731,
      title: "Hey Ya!",
      artist: {
        id: 68,
        name: "OutKast"
      },
      album: {
        id: 119606,
        title: "Speakerboxxx/The Love Below",
        cover_medium: "https://api.deezer.com/album/119606/image"
      }
    }
    ],
    playlists: [
      {
        id: 908622995,
        title: 'Top Hits 2024',
        cover: 'https://api.deezer.com/playlist/908622995/image',
      },
      {
        id: 1111144441,
        title: 'LoFi Chill Vibes',
        cover: 'https://api.deezer.com/playlist/1111144441/image',
      }
    ],
    likedPlaylists: [
      {
        id: 908622995,
        title: 'Top Hits 2024',
        cover: 'https://api.deezer.com/playlist/908622995/image',
      },
      {
        id: 1111144441,
        title: 'LoFi Chill Vibes',
        cover: 'https://api.deezer.com/playlist/1111144441/image',
      }
    ]
  }

  constructor(public player: MiniPlayerService) { }

  newPlaylistTitle = '';

  addPlaylist() {
    if (!this.newPlaylistTitle.trim()) return;

    const newId = Math.floor(Math.random() * 10000);
    this.user.playlists.unshift({
      id: newId,
      title: this.newPlaylistTitle.trim(),
      cover: 'https://picsum.photos/seed/${newId}/300/300'
    });

    this.newPlaylistTitle = '';
  }
  playTrack(track: any) {
    this.player.play(track, this.user.likedSongs);
  }
}
