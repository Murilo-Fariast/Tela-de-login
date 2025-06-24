import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-postagem',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud-postagem.component.html',
  styleUrls: ['./crud-postagem.component.css']
})
export class CrudPostagemComponent {
  titulo = '';
  conteudo = '';
  postagens: any[] = [];

  adicionarPostagem() {
    if (this.titulo && this.conteudo) {
      this.postagens.push({
        titulo: this.titulo,
        conteudo: this.conteudo
      });

    this.titulo = '';
    this.conteudo = '';
    } else {
      alert('Preencha todos os campos por favor');
    }
  }
  excluirPostagem(index: number) {
    this.postagens.splice(index, 1);
  }
}
